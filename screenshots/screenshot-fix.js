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
  '04-invoicing'
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
  
  // Capturar erros do console
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('ERRO NO CONSOLE:', msg.text());
    }
  });
  
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
  
  // 01 - Login Page
  console.log('01 - Login Page...');
  await page.goto(`${BASE_URL}/web/login`, { waitUntil: 'networkidle2', timeout: 60000 });
  await delay(2000);
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '00-login', '01-login-page.png'), fullPage: true });
  console.log('Screenshot 01 salvo!');
  
  // 02 - Apos Login
  console.log('02 - Apos Login...');
  await page.goto(`${BASE_URL}/web#action=base.action_client_bottom_menu`, { waitUntil: 'networkidle2', timeout: 60000 });
  await delay(5000);
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '00-login', '02-apos-login.png'), fullPage: true });
  console.log('Screenshot 02 salvo!');
  
  // 03 - Dashboard
  console.log('03 - Dashboard...');
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '01-dashboard', '01-dashboard.png'), fullPage: true });
  console.log('Screenshot 03 salvo!');
  
  // 04 - Purchase (Compras)
  console.log('04 - Purchase...');
  await page.goto(`${BASE_URL}/web#action=purchase.action_purchase_order`, { waitUntil: 'networkidle2', timeout: 60000 });
  await delay(5000);
  
  // Verificar se ha erro
  const errorDetail = await page.$('.o_error_detail');
  if (errorDetail) {
    console.log('ERRO EM PURCHASE - Tentando acessar lista de pedidos...');
    // Tentar acessar a action de lista
    await page.goto(`${BASE_URL}/web#action=purchase.purchase_order_action_tree`, { waitUntil: 'networkidle2', timeout: 60000 });
    await delay(5000);
  }
  
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '02-purchase', '01-tela-inicial.png'), fullPage: true });
  console.log('Screenshot 04 salvo!');
  
  // Verificar se tem botao de criar
  const createBtn = await page.$('.o_list_button_add');
  if (createBtn) {
    console.log('05 - Criar Pedido de Compra...');
    await createBtn.click();
    await delay(3000);
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '02-purchase', '02-criar-pedido.png'), fullPage: true });
    console.log('Screenshot 05 salvo!');
  } else {
    console.log('Botao Create nao encontrado em Purchase');
  }
  
  // 06 - Inventory (Estoque)
  console.log('06 - Inventory...');
  await page.goto(`${BASE_URL}/web#action=stock.action_picking_tree`, { waitUntil: 'networkidle2', timeout: 60000 });
  await delay(5000);
  
  // Verificar se ha erro
  const errorDetail2 = await page.$('.o_error_detail');
  if (errorDetail2) {
    console.log('ERRO EM INVENTORY - Tentando acessar lista de transferencias...');
    // Tentar acessar a action de lista
    await page.goto(`${BASE_URL}/web#action=stock.action_picking_tree`, { waitUntil: 'networkidle2', timeout: 60000 });
    await delay(5000);
  }
  
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '03-inventory', '01-tela-inicial.png'), fullPage: true });
  console.log('Screenshot 06 salvo!');
  
  // Verificar se tem botao de criar
  const createInvBtn = await page.$('.o_list_button_add');
  if (createInvBtn) {
    console.log('07 - Criar Transferencia...');
    await createInvBtn.click();
    await delay(3000);
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '03-inventory', '02-criar-transferencia.png'), fullPage: true });
    console.log('Screenshot 07 salvo!');
  } else {
    console.log('Botao Create nao encontrado em Inventory');
  }
  
  // 08 - Invoicing (Faturamento)
  console.log('08 - Invoicing...');
  await page.goto(`${BASE_URL}/web#action=account.action_move_out_invoice_type`, { waitUntil: 'networkidle2', timeout: 60000 });
  await delay(5000);
  
  // Verificar se ha erro
  const errorDetail3 = await page.$('.o_error_detail');
  if (errorDetail3) {
    console.log('ERRO EM INVOICING - Tentando acessar lista de faturas...');
    // Tentar acessar a action de lista
    await page.goto(`${BASE_URL}/web#action=account.action_move_out_invoice_type`, { waitUntil: 'networkidle2', timeout: 60000 });
    await delay(5000);
  }
  
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '04-invoicing', '01-tela-inicial.png'), fullPage: true });
  console.log('Screenshot 08 salvo!');
  
  // Verificar se tem botao de criar
  const createInvBtn2 = await page.$('.o_list_button_add');
  if (createInvBtn2) {
    console.log('09 - Criar Fatura...');
    await createInvBtn2.click();
    await delay(3000);
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '04-invoicing', '02-criar-fatura.png'), fullPage: true });
    console.log('Screenshot 09 salvo!');
  } else {
    console.log('Botao Create nao encontrado em Invoicing');
  }
  
  console.log('Screenshots concluidos!');
  
  await browser.close();
}

takeScreenshots().catch(console.error);
