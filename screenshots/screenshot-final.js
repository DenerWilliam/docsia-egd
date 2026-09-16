const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const BASE_URL = 'http://localhost:14069';
const DIR = path.join(__dirname, 'cypress/screenshots');

['00-login','01-dashboard','02-purchase','03-inventory','04-invoicing'].forEach(d => {
  const p = path.join(DIR, d);
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
});

async function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

async function waitForReady(page) {
  await page.waitForFunction(() => {
    return !document.querySelector('.o_loading') && !document.querySelector('.modal-open .o_error_detail');
  }, { timeout: 15000 }).catch(() => {});
  await delay(2000);
}

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1920,1080'],
    defaultViewport: { width: 1920, height: 1080 }
  });

  const page = await browser.newPage();
  page.on('dialog', async d => await d.dismiss().catch(() => {}));

  // Login
  console.log('Login...');
  await page.goto(`${BASE_URL}/web/login`, { waitUntil: 'networkidle2' });
  await delay(1000);
  await page.type('#login', 'admin');
  await page.type('#password', 'admin');
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle2' }),
    page.click('button[type="submit"]')
  ]);
  await delay(5000);

  // Dashboard
  console.log('01 - Dashboard');
  await page.goto(`${BASE_URL}/web#action=base.action_client_bottom_menu`, { waitUntil: 'networkidle2' });
  await delay(3000);
  await page.screenshot({ path: path.join(DIR, '01-dashboard', '01-dashboard.png'), fullPage: true });

  // Purchase - usar click via JS no menu lateral superior
  console.log('02 - Purchase');
  await page.goto(`${BASE_URL}/web#menu_id=219&model=purchase.order&view_type=list`, { waitUntil: 'networkidle2' });
  await delay(5000);
  await waitForReady(page);
  await page.screenshot({ path: path.join(DIR, '02-purchase', '01-tela-inicial.png'), fullPage: true });

  const pb = await page.$('.o_list_button_add');
  if (pb) {
    await pb.click();
    await delay(3000);
    await page.screenshot({ path: path.join(DIR, '02-purchase', '02-criar-pedido.png'), fullPage: true });
  }

  // Inventory
  console.log('03 - Inventory');
  await page.goto(`${BASE_URL}/web#menu_id=178&model=stock.picking&view_type=list`, { waitUntil: 'networkidle2' });
  await delay(5000);
  await waitForReady(page);
  await page.screenshot({ path: path.join(DIR, '03-inventory', '01-tela-inicial.png'), fullPage: true });

  const ib = await page.$('.o_list_button_add');
  if (ib) {
    await ib.click();
    await delay(3000);
    await page.screenshot({ path: path.join(DIR, '03-inventory', '02-criar-transferencia.png'), fullPage: true });
  }

  // Invoicing
  console.log('04 - Invoicing');
  await page.goto(`${BASE_URL}/web#menu_id=115&model=account.move&view_type=list`, { waitUntil: 'networkidle2' });
  await delay(5000);
  await waitForReady(page);
  await page.screenshot({ path: path.join(DIR, '04-invoicing', '01-tela-inicial.png'), fullPage: true });

  const ib2 = await page.$('.o_list_button_add');
  if (ib2) {
    await ib2.click();
    await delay(3000);
    await page.screenshot({ path: path.join(DIR, '04-invoicing', '02-criar-fatura.png'), fullPage: true });
  }

  // Verificar erros nas screenshots
  for (const dir of ['02-purchase', '03-inventory', '04-invoicing']) {
    const files = fs.readdirSync(path.join(DIR, dir));
    for (const f of files) {
      if (f.endsWith('.png')) {
        const stat = fs.statSync(path.join(DIR, dir, f));
        console.log(`${dir}/${f}: ${(stat.size/1024).toFixed(1)}KB`);
      }
    }
  }

  console.log('Done!');
  await browser.close();
})();
