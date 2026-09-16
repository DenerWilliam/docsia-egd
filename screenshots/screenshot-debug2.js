const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const BASE_URL = 'http://localhost:14069';
const SCREENSHOTS_DIR = path.join(__dirname, 'cypress/screenshots/debug');

if (!fs.existsSync(SCREENSHOTS_DIR)) {
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
}

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function takeScreenshots() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1920,1080'],
    defaultViewport: { width: 1920, height: 1080 }
  });

  const page = await browser.newPage();
  
  // Login
  console.log('Fazendo login...');
  await page.goto(`${BASE_URL}/web/login`, { waitUntil: 'networkidle2', timeout: 60000 });
  await delay(2000);
  await page.type('#login', 'admin');
  await page.type('#password', 'admin');
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 60000 }),
    page.click('button[type="submit"]')
  ]);
  await delay(3000);
  console.log('Login realizado!');
  
  // Testar Purchase
  console.log('Testando Purchase...');
  await page.goto(`${BASE_URL}/web#action=344`, { waitUntil: 'networkidle2', timeout: 60000 });
  await delay(5000);
  
  // Verificar se ha erro
  const errorDetail = await page.$('.o_error_detail');
  const errorModal = await page.$('.modal-body');
  const errorDialog = await page.$('.o_dialog_error');
  
  console.log('errorDetail:', !!errorDetail);
  console.log('errorModal:', !!errorModal);
  console.log('errorDialog:', !!errorDialog);
  
  // Verificar se ha texto de erro na pagina
  const pageText = await page.evaluate(() => document.body.innerText);
  const hasError = pageText.includes('Odoo Server Error') || pageText.includes('KeyError');
  console.log('hasError:', hasError);
  
  // Salvar HTML da pagina
  const pageContent = await page.content();
  fs.writeFileSync(path.join(SCREENSHOTS_DIR, 'purchase-debug.html'), pageContent);
  console.log('HTML salvo em purchase-debug.html');
  
  // Screenshot
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'purchase-debug.png'), fullPage: true });
  
  console.log('Debug concluido!');
  
  await browser.close();
}

takeScreenshots().catch(console.error);
