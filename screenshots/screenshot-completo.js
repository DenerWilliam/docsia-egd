const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const BASE_URL = 'http://localhost:14069';
const SCREENSHOTS_DIR = path.join(__dirname, 'cypress/screenshots');

// Criar diretorios
const dirs = [
  '00-login',
  '01-dashboard', 
  '02-purchase',
  '03-inventory',
  '04-invoicing',
  '05-settings'
];
dirs.forEach(dir => {
  const dirPath = path.join(SCREENSHOTS_DIR, dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
});

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
  
  // 01 - Login Page
  console.log('01 - Login Page...');
  await page.goto(`${BASE_URL}/web/login`, { waitUntil: 'networkidle2', timeout: 60000 });
  await delay(2000);
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '00-login', '01-login-page.png'), fullPage: true });
  console.log('Screenshot 01 salvo!');
  
  // Login
  console.log('Fazendo login...');
  await page.type('#login', 'admin');
  await page.type('#password', 'admin');
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 60000 }),
    page.click('button[type="submit"]')
  ]);
  await delay(3000);
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '00-login', '02-apos-login.png'), fullPage: true });
  console.log('Screenshot 02 salvo!');
  
  // 02 - Dashboard
  console.log('02 - Dashboard...');
  await page.goto(`${BASE_URL}/web#action=base.action_client_bottom_menu`, { waitUntil: 'networkidle2', timeout: 60000 });
  await delay(5000);
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '01-dashboard', '01-dashboard.png'), fullPage: true });
  console.log('Screenshot 03 salvo!');
  
  // 03 - Purchase (Compras)
  console.log('03 - Purchase...');
  await page.goto(`${BASE_URL}/web#action=purchase.action_purchase_order`, { waitUntil: 'networkidle2', timeout: 60000 });
  await delay(5000);
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '02-purchase', '01-tela-inicial.png'), fullPage: true });
  console.log('Screenshot 04 salvo!');
  
  // Criar Pedido de Compra
  const createBtn = await page.$('.o_list_button_add');
  if (createBtn) {
    console.log('04 - Criar Pedido de Compra...');
    await createBtn.click();
    await delay(3000);
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '02-purchase', '02-criar-pedido.png'), fullPage: true });
    console.log('Screenshot 05 salvo!');
    
    // Preencher fornecedor
    const partnerInput = await page.$('input[name="partner_id"]');
    if (partnerInput) {
      console.log('05 - Preencher Fornecedor...');
      await partnerInput.click({ clickCount: 3 });
      await partnerInput.type('Vendor', { delay: 100 });
      await delay(2000);
      const autocompleteItems = await page.$$('.ui-autocomplete:visible li');
      if (autocompleteItems.length > 0) {
        await autocompleteItems[0].click();
      }
      await delay(2000);
      await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '02-purchase', '03-preencher-fornecedor.png'), fullPage: true });
      console.log('Screenshot 06 salvo!');
    }
  }
  
  // 04 - Inventory (Estoque)
  console.log('07 - Inventory...');
  await page.goto(`${BASE_URL}/web#action=stock.action_stock_picking_tree`, { waitUntil: 'networkidle2', timeout: 60000 });
  await delay(5000);
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '03-inventory', '01-tela-inicial.png'), fullPage: true });
  console.log('Screenshot 08 salvo!');
  
  // Criar Transferencia
  const createInvBtn = await page.$('.o_list_button_add');
  if (createInvBtn) {
    console.log('08 - Criar Transferencia...');
    await createInvBtn.click();
    await delay(3000);
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '03-inventory', '02-criar-transferencia.png'), fullPage: true });
    console.log('Screenshot 09 salvo!');
    
    // Selecionar operacao
    const pickingTypeInput = await page.$('div[name="picking_type_id"] input');
    if (pickingTypeInput) {
      console.log('09 - Selecionar Operacao...');
      await pickingTypeInput.click();
      await delay(2000);
      const autocompleteItems = await page.$$('.ui-autocomplete:visible li');
      if (autocompleteItems.length > 0) {
        await autocompleteItems[0].click();
      }
      await delay(2000);
      await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '03-inventory', '03-selecionar-operacao.png'), fullPage: true });
      console.log('Screenshot 10 salvo!');
    }
  }
  
  // 05 - Invoicing (Faturamento)
  console.log('11 - Invoicing...');
  await page.goto(`${BASE_URL}/web#action=account.action_move_out_invoice_type`, { waitUntil: 'networkidle2', timeout: 60000 });
  await delay(5000);
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '04-invoicing', '01-tela-inicial.png'), fullPage: true });
  console.log('Screenshot 12 salvo!');
  
  // Criar Fatura
  const createInvBtn2 = await page.$('.o_list_button_add');
  if (createInvBtn2) {
    console.log('12 - Criar Fatura...');
    await createInvBtn2.click();
    await delay(3000);
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '04-invoicing', '02-criar-fatura.png'), fullPage: true });
    console.log('Screenshot 13 salvo!');
    
    // Preencher cliente
    const partnerInput2 = await page.$('input[name="partner_id"]');
    if (partnerInput2) {
      console.log('13 - Preencher Cliente...');
      await partnerInput2.click({ clickCount: 3 });
      await partnerInput2.type('Customer', { delay: 100 });
      await delay(2000);
      const autocompleteItems = await page.$$('.ui-autocomplete:visible li');
      if (autocompleteItems.length > 0) {
        await autocompleteItems[0].click();
      }
      await delay(2000);
      await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '04-invoicing', '03-preencher-cliente.png'), fullPage: true });
      console.log('Screenshot 14 salvo!');
    }
  }
  
  // 06 - Settings
  console.log('15 - Settings...');
  await page.goto(`${BASE_URL}/web#action=base.action_administration`, { waitUntil: 'networkidle2', timeout: 60000 });
  await delay(5000);
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '05-settings', '01-settings.png'), fullPage: true });
  console.log('Screenshot 16 salvo!');
  
  console.log('Todos os screenshots concluidos!');
  
  await browser.close();
}

takeScreenshots().catch(console.error);
