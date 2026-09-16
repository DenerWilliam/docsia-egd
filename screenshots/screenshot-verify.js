const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const BASE_URL = 'http://localhost:14069';
const DIR = path.join(__dirname, 'cypress/screenshots/debug');

if (!fs.existsSync(DIR)) fs.mkdirSync(DIR, { recursive: true });

async function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1920,1080'],
    defaultViewport: { width: 1920, height: 1080 }
  });

  const page = await browser.newPage();
  page.on('dialog', async d => await d.dismiss().catch(() => {}));

  // Login
  await page.goto(`${BASE_URL}/web/login`, { waitUntil: 'networkidle2' });
  await delay(1000);
  await page.type('#login', 'admin');
  await page.type('#password', 'admin');
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle2' }),
    page.click('button[type="submit"]')
  ]);
  await delay(5000);

  // Verificar cada screenshot
  const screenshots = [
    { name: 'Purchase', dir: '02-purchase', file: '01-tela-inicial.png' },
    { name: 'Inventory', dir: '03-inventory', file: '01-tela-inicial.png' },
    { name: 'Invoicing', dir: '04-invoicing', file: '01-tela-inicial.png' }
  ];

  for (const ss of screenshots) {
    console.log(`Verificando ${ss.name}...`);
    
    // Navegar para o modulo
    await page.goto(`${BASE_URL}/web`, { waitUntil: 'networkidle2' });
    await delay(3000);
    
    // Click no app
    await page.evaluate((moduleName) => {
      const items = document.querySelectorAll('.o_app');
      for (const item of items) {
        if (item.textContent.trim().includes(moduleName)) {
          item.click();
          return true;
        }
      }
      return false;
    }, ss.name);
    await delay(3000);
    
    // Click no submenu apropriado
    await page.evaluate((moduleName) => {
      const links = document.querySelectorAll('.o_menu_entry a, .dropdown-item');
      const menuMap = {
        'Purchase': 'Orders',
        'Inventory': 'Transfers',
        'Invoicing': 'Invoices'
      };
      const target = menuMap[moduleName];
      for (const link of links) {
        if (link.textContent.trim() === target) {
          link.click();
          return true;
        }
      }
      return false;
    }, ss.name);
    await delay(5000);
    
    // Verificar conteudo
    const content = await page.evaluate(() => {
      return {
        title: document.title,
        hasError: !!document.querySelector('.o_error_detail'),
        hasTable: !!document.querySelector('table'),
        hasListView: !!document.querySelector('.o_list_view'),
        hasFormView: !!document.querySelector('.o_form_view'),
        bodyText: document.body.innerText.substring(0, 500)
      };
    });
    
    console.log(`  Title: ${content.title}`);
    console.log(`  Error: ${content.hasError}`);
    console.log(`  Table: ${content.hasTable}`);
    console.log(`  ListView: ${content.hasListView}`);
    console.log(`  Body: ${content.bodyText.substring(0, 200)}`);
    
    // Screenshot
    await page.screenshot({ path: path.join(DIR, `${ss.name.toLowerCase()}-verify.png`), fullPage: true });
  }

  console.log('Done!');
  await browser.close();
})();
