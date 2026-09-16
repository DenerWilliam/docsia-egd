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
  
  // Testar Purchase com action_id direto
  console.log('Testando Purchase com action_id 344...');
  await page.goto(`${BASE_URL}/web#action=344`, { waitUntil: 'networkidle2', timeout: 60000 });
  await delay(5000);
  
  // Verificar se ha erro
  const errorDetail = await page.$('.o_error_detail');
  if (errorDetail) {
    console.log('ERRO ENCONTRADO EM PURCHASE!');
    const errorText = await page.evaluate(el => el.textContent, errorDetail);
    console.log('Texto do erro:', errorText.substring(0, 500));
    
    // Salvar HTML da pagina com erro
    const pageContent = await page.content();
    fs.writeFileSync(path.join(SCREENSHOTS_DIR, 'purchase-error.html'), pageContent);
    console.log('HTML do erro salvo em purchase-error.html');
  } else {
    console.log('Purchase OK!');
  }
  
  // Screenshot
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'purchase.png'), fullPage: true });
  
  // Testar Inventory com action_id direto
  console.log('Testando Inventory com action_id 298...');
  await page.goto(`${BASE_URL}/web#action=298`, { waitUntil: 'networkidle2', timeout: 60000 });
  await delay(5000);
  
  // Verificar se ha erro
  const errorDetail2 = await page.$('.o_error_detail');
  if (errorDetail2) {
    console.log('ERRO ENCONTRADO EM INVENTORY!');
    const errorText = await page.evaluate(el => el.textContent, errorDetail2);
    console.log('Texto do erro:', errorText.substring(0, 500));
    
    // Salvar HTML da pagina com erro
    const pageContent = await page.content();
    fs.writeFileSync(path.join(SCREENSHOTS_DIR, 'inventory-error.html'), pageContent);
    console.log('HTML do erro salvo em inventory-error.html');
  } else {
    console.log('Inventory OK!');
  }
  
  // Screenshot
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'inventory.png'), fullPage: true });
  
  // Testar Invoicing com action_id direto
  console.log('Testando Invoicing com action_id 199...');
  await page.goto(`${BASE_URL}/web#action=199`, { waitUntil: 'networkidle2', timeout: 60000 });
  await delay(5000);
  
  // Verificar se ha erro
  const errorDetail3 = await page.$('.o_error_detail');
  if (errorDetail3) {
    console.log('ERRO ENCONTRADO EM INVOICING!');
    const errorText = await page.evaluate(el => el.textContent, errorDetail3);
    console.log('Texto do erro:', errorText.substring(0, 500));
    
    // Salvar HTML da pagina com erro
    const pageContent = await page.content();
    fs.writeFileSync(path.join(SCREENSHOTS_DIR, 'invoicing-error.html'), pageContent);
    console.log('HTML do erro salvo em invoicing-error.html');
  } else {
    console.log('Invoicing OK!');
  }
  
  // Screenshot
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'invoicing.png'), fullPage: true });
  
  console.log('Diagnostico concluido!');
  
  await browser.close();
}

takeScreenshots().catch(console.error);
