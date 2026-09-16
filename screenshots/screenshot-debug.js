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
  
  // Verificar modulos disponiveis
  console.log('Verificando modulos disponiveis...');
  await page.goto(`${BASE_URL}/web#action=base.action_client_bottom_menu`, { waitUntil: 'networkidle2', timeout: 60000 });
  await delay(3000);
  
  // Listar menus
  const menus = await page.$$eval('.dropdown-item', items => 
    items.map(item => ({
      text: item.textContent.trim(),
      href: item.getAttribute('href')
    }))
  );
  console.log('Modulos encontrados:', JSON.stringify(menus, null, 2));
  
  // Screenshot do menu
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '01-menu-principal.png'), fullPage: true });
  
  // Testar Purchase
  console.log('Testando Purchase...');
  await page.goto(`${BASE_URL}/web#action=purchase.action_purchase_order`, { waitUntil: 'networkidle2', timeout: 60000 });
  await delay(5000);
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '02-purchase.png'), fullPage: true });
  
  // Verificar se tem botao de criar
  const createBtn = await page.$('.o_list_button_add');
  if (createBtn) {
    console.log('Botao Create encontrado em Purchase!');
    await createBtn.click();
    await delay(3000);
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '03-purchase-create.png'), fullPage: true });
  } else {
    console.log('Botao Create NAO encontrado em Purchase');
    // Verificar se ha erro na pagina
    const errorMsg = await page.$('.o_error_detail');
    if (errorMsg) {
      console.log('Erro encontrado na pagina Purchase');
      await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '03-purchase-error.png'), fullPage: true });
    }
  }
  
  // Testar Inventory
  console.log('Testando Inventory...');
  await page.goto(`${BASE_URL}/web#action=stock.action_stock_picking_tree`, { waitUntil: 'networkidle2', timeout: 60000 });
  await delay(5000);
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '04-inventory.png'), fullPage: true });
  
  // Verificar se tem botao de criar
  const createInvBtn = await page.$('.o_list_button_add');
  if (createInvBtn) {
    console.log('Botao Create encontrado em Inventory!');
    await createInvBtn.click();
    await delay(3000);
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '05-inventory-create.png'), fullPage: true });
  } else {
    console.log('Botao Create NAO encontrado em Inventory');
  }
  
  // Testar Invoicing
  console.log('Testando Invoicing...');
  await page.goto(`${BASE_URL}/web#action=account.action_move_out_invoice_type`, { waitUntil: 'networkidle2', timeout: 60000 });
  await delay(5000);
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '06-invoicing.png'), fullPage: true });
  
  // Verificar se tem botao de criar
  const createInvBtn2 = await page.$('.o_list_button_add');
  if (createInvBtn2) {
    console.log('Botao Create encontrado em Invoicing!');
    await createInvBtn2.click();
    await delay(3000);
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '07-invoicing-create.png'), fullPage: true });
  } else {
    console.log('Botao Create NAO encontrado em Invoicing');
  }
  
  console.log('Debug concluido!');
  
  await browser.close();
}

takeScreenshots().catch(console.error);
