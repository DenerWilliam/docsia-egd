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

  // Testar Purchase via menu_id
  console.log('Testando Purchase via menu_id=219...');
  await page.goto(`${BASE_URL}/web#menu_id=219&model=purchase.order&view_type=list`, { waitUntil: 'networkidle2' });
  await delay(5000);
  
  // Verificar各种可能的错误元素
  const hasError = await page.$('.o_error_detail');
  const hasModal = await page.$('.modal.show, .modal.in');
  const hasServerError = await page.evaluate(() => document.body.innerText.includes('Server Error'));
  const hasOdooError = await page.evaluate(() => document.body.innerText.includes('Odoo Server Error'));
  
  console.log('hasError:', !!hasError);
  console.log('hasModal:', !!hasModal);
  console.log('hasServerError:', hasServerError);
  console.log('hasOdooError:', hasOdooError);
  
  // Verificar se ha dados na tabela
  const hasTable = await page.$('.o_list_view, .o_list_table, table');
  const tableRows = await page.$$('.o_list_view tbody tr, .o_data_row');
  console.log('hasTable:', !!hasTable);
  console.log('tableRows:', tableRows.length);
  
  // Salvar HTML
  const html = await page.content();
  fs.writeFileSync(path.join(DIR, 'purchase-menu.html'), html);
  
  // Screenshot
  await page.screenshot({ path: path.join(DIR, 'purchase-menu.png'), fullPage: true });
  
  // Testar Inventory via menu_id
  console.log('Testando Inventory via menu_id=178...');
  await page.goto(`${BASE_URL}/web#menu_id=178&model=stock.picking&view_type=list`, { waitUntil: 'networkidle2' });
  await delay(5000);
  
  const hasError2 = await page.$('.o_error_detail');
  console.log('hasError:', !!hasError2);
  
  await page.screenshot({ path: path.join(DIR, 'inventory-menu.png'), fullPage: true });
  
  // Testar Invoicing via menu_id
  console.log('Testando Invoicing via menu_id=115...');
  await page.goto(`${BASE_URL}/web#menu_id=115&model=account.move&view_type=list`, { waitUntil: 'networkidle2' });
  await delay(5000);
  
  const hasError3 = await page.$('.o_error_detail');
  console.log('hasError:', !!hasError3);
  
  await page.screenshot({ path: path.join(DIR, 'invoicing-menu.png'), fullPage: true });
  
  console.log('Done!');
  await browser.close();
})();
