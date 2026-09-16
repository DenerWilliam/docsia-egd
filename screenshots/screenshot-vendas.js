const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const BASE_URL = 'http://localhost:14069';
const SCREENSHOTS_DIR = path.join(__dirname, 'cypress/screenshots/01-vendas');

// Criar diretorio se nao existir
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
  
  console.log('Login realizado com sucesso!');
  
  // 01 - Tela Inicial Vendas
  console.log('01 - Tela Inicial Vendas...');
  await page.goto(`${BASE_URL}/web#action=sale.action_sale_order`, { waitUntil: 'networkidle2', timeout: 60000 });
  await delay(5000);
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '01-tela-inicial.png'), fullPage: true });
  
  // 02 - Criar Orcamento
  console.log('02 - Criar Orcamento...');
  await page.goto(`${BASE_URL}/web#action=sale.action_sale_order`, { waitUntil: 'networkidle2', timeout: 60000 });
  await delay(3000);
  await page.click('.o_list_button_add');
  await delay(3000);
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '02-criar-orcamento.png'), fullPage: true });
  
  // 03 - Preencher Cliente
  console.log('03 - Preencher Cliente...');
  await page.goto(`${BASE_URL}/web#action=sale.action_sale_order`, { waitUntil: 'networkidle2', timeout: 60000 });
  await delay(3000);
  await page.click('.o_list_button_add');
  await delay(3000);
  const partnerInput = await page.$('input[name="partner_id"]');
  if (partnerInput) {
    await partnerInput.click({ clickCount: 3 });
    await partnerInput.type('Customer', { delay: 100 });
    await delay(2000);
    const autocompleteItems = await page.$$('.ui-autocomplete:visible li');
    if (autocompleteItems.length > 0) {
      await autocompleteItems[0].click();
    }
  }
  await delay(2000);
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '03-preencher-cliente.png'), fullPage: true });
  
  // 04 - Adicionar Produto
  console.log('04 - Adicionar Produto...');
  await page.goto(`${BASE_URL}/web#action=sale.action_sale_order`, { waitUntil: 'networkidle2', timeout: 60000 });
  await delay(3000);
  await page.click('.o_list_button_add');
  await delay(3000);
  const partnerInput2 = await page.$('input[name="partner_id"]');
  if (partnerInput2) {
    await partnerInput2.click({ clickCount: 3 });
    await partnerInput2.type('Customer', { delay: 100 });
    await delay(2000);
    const autocompleteItems = await page.$$('.ui-autocomplete:visible li');
    if (autocompleteItems.length > 0) {
      await autocompleteItems[0].click();
    }
  }
  await delay(2000);
  const addLineBtn = await page.$('.o_field_x2many_list_row_add a');
  if (addLineBtn) {
    await addLineBtn.click();
  }
  await delay(2000);
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '04-adicionar-produto.png'), fullPage: true });
  
  // 05 - Preencher Produto
  console.log('05 - Preencher Produto...');
  await page.goto(`${BASE_URL}/web#action=sale.action_sale_order`, { waitUntil: 'networkidle2', timeout: 60000 });
  await delay(3000);
  await page.click('.o_list_button_add');
  await delay(3000);
  const partnerInput3 = await page.$('input[name="partner_id"]');
  if (partnerInput3) {
    await partnerInput3.click({ clickCount: 3 });
    await partnerInput3.type('Customer', { delay: 100 });
    await delay(2000);
    const autocompleteItems = await page.$$('.ui-autocomplete:visible li');
    if (autocompleteItems.length > 0) {
      await autocompleteItems[0].click();
    }
  }
  await delay(2000);
  const addLineBtn2 = await page.$('.o_field_x2many_list_row_add a');
  if (addLineBtn2) {
    await addLineBtn2.click();
  }
  await delay(2000);
  const productInput = await page.$('.o_selected_row input[name="product_id"]');
  if (productInput) {
    await productInput.type('Product', { delay: 100 });
    await delay(2000);
    const autocompleteItems = await page.$$('.ui-autocomplete:visible li');
    if (autocompleteItems.length > 0) {
      await autocompleteItems[0].click();
    }
  }
  await delay(2000);
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '05-preencher-produto.png'), fullPage: true });
  
  // 06 - Confirmar Orcamento
  console.log('06 - Confirmar Orcamento...');
  await page.goto(`${BASE_URL}/web#action=sale.action_sale_order`, { waitUntil: 'networkidle2', timeout: 60000 });
  await delay(3000);
  await page.click('.o_list_button_add');
  await delay(3000);
  const partnerInput4 = await page.$('input[name="partner_id"]');
  if (partnerInput4) {
    await partnerInput4.click({ clickCount: 3 });
    await partnerInput4.type('Customer', { delay: 100 });
    await delay(2000);
    const autocompleteItems = await page.$$('.ui-autocomplete:visible li');
    if (autocompleteItems.length > 0) {
      await autocompleteItems[0].click();
    }
  }
  await delay(2000);
  const addLineBtn3 = await page.$('.o_field_x2many_list_row_add a');
  if (addLineBtn3) {
    await addLineBtn3.click();
  }
  await delay(2000);
  const productInput2 = await page.$('.o_selected_row input[name="product_id"]');
  if (productInput2) {
    await productInput2.type('Product', { delay: 100 });
    await delay(2000);
    const autocompleteItems = await page.$$('.ui-autocomplete:visible li');
    if (autocompleteItems.length > 0) {
      await autocompleteItems[0].click();
    }
  }
  await delay(2000);
  const confirmBtn = await page.$('button[name="action_confirm"]');
  if (confirmBtn) {
    await confirmBtn.click();
  }
  await delay(3000);
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '06-confirmar-orcamento.png'), fullPage: true });
  
  // 07 - Pedido Confirmado
  console.log('07 - Pedido Confirmado...');
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '07-pedido-confirmado.png'), fullPage: true });
  
  // 08 - Acessar Transferencia
  console.log('08 - Acessar Transferencia...');
  const deliveryBtn = await page.$('button[name="action_view_delivery"]');
  if (deliveryBtn) {
    await deliveryBtn.click();
    await delay(3000);
  }
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '08-acessar-transferencia.png'), fullPage: true });
  
  // 09 - Validar Transferencia
  console.log('09 - Validar Transferencia...');
  const validateBtn = await page.$('button[name="button_validate"]');
  if (validateBtn) {
    await validateBtn.click();
    await delay(3000);
  }
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '09-validar-transferencia.png'), fullPage: true });
  
  // 10 - Criar Fatura
  console.log('10 - Criar Fatura...');
  await page.goto(`${BASE_URL}/web#action=sale.action_sale_order`, { waitUntil: 'networkidle2', timeout: 60000 });
  await delay(3000);
  await page.click('.o_list_button_add');
  await delay(3000);
  const partnerInput5 = await page.$('input[name="partner_id"]');
  if (partnerInput5) {
    await partnerInput5.click({ clickCount: 3 });
    await partnerInput5.type('Customer', { delay: 100 });
    await delay(2000);
    const autocompleteItems = await page.$$('.ui-autocomplete:visible li');
    if (autocompleteItems.length > 0) {
      await autocompleteItems[0].click();
    }
  }
  await delay(2000);
  const addLineBtn4 = await page.$('.o_field_x2many_list_row_add a');
  if (addLineBtn4) {
    await addLineBtn4.click();
  }
  await delay(2000);
  const productInput3 = await page.$('.o_selected_row input[name="product_id"]');
  if (productInput3) {
    await productInput3.type('Product', { delay: 100 });
    await delay(2000);
    const autocompleteItems = await page.$$('.ui-autocomplete:visible li');
    if (autocompleteItems.length > 0) {
      await autocompleteItems[0].click();
    }
  }
  await delay(2000);
  const confirmBtn2 = await page.$('button[name="action_confirm"]');
  if (confirmBtn2) {
    await confirmBtn2.click();
  }
  await delay(3000);
  const createInvoiceBtn = await page.$('button[name="action_create_invoice"]');
  if (createInvoiceBtn) {
    await createInvoiceBtn.click();
  }
  await delay(3000);
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '10-criar-fatura.png'), fullPage: true });
  
  // 11 - Fatura Criada
  console.log('11 - Fatura Criada...');
  const viewInvoiceBtn = await page.$('button[name="action_view_invoice"]');
  if (viewInvoiceBtn) {
    await viewInvoiceBtn.click();
    await delay(3000);
  }
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '11-fatura-criada.png'), fullPage: true });
  
  // 12 - Confirmar Fatura
  console.log('12 - Confirmar Fatura...');
  const postBtn = await page.$('button[name="action_post"]');
  if (postBtn) {
    await postBtn.click();
    await delay(3000);
  }
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '12-confirmar-fatura.png'), fullPage: true });
  
  // 13 - Registrar Pagamento
  console.log('13 - Registrar Pagamento...');
  const registerPaymentBtn = await page.$('button[name="action_register_payment"]');
  if (registerPaymentBtn) {
    await registerPaymentBtn.click();
    await delay(3000);
  }
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '13-registrar-pagamento.png'), fullPage: true });
  
  // 14 - Pagamento Confirmado
  console.log('14 - Pagamento Confirmado...');
  const createPaymentBtn = await page.$('button[name="action_create_payment"]');
  if (createPaymentBtn) {
    await createPaymentBtn.click();
    await delay(3000);
  }
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '14-pagamento-confirmado.png'), fullPage: true });
  
  console.log('Screenshots do fluxo de vendas concluidos!');
  
  await browser.close();
}

takeScreenshots().catch(console.error);
