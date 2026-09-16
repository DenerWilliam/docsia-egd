const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const BASE_URL = 'http://localhost:14069';
const SCREENSHOTS_DIR = path.join(__dirname, 'cypress/screenshots/00-test');

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
  
  // 01 - Login Page
  console.log('01 - Login Page...');
  await page.goto(`${BASE_URL}/web/login`, { waitUntil: 'networkidle2', timeout: 60000 });
  await delay(2000);
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '01-login-page.png'), fullPage: true });
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
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '02-apos-login.png'), fullPage: true });
  console.log('Screenshot 02 salvo!');
  
  // 03 - Tela Inicial Vendas
  console.log('03 - Tela Inicial Vendas...');
  await page.goto(`${BASE_URL}/web#action=sale.action_sale_order`, { waitUntil: 'networkidle2', timeout: 60000 });
  await delay(5000);
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '03-tela-inicial-vendas.png'), fullPage: true });
  console.log('Screenshot 03 salvo!');
  
  // 04 - Verificar estrutura da pagina
  console.log('04 - Verificando estrutura...');
  const pageContent = await page.content();
  fs.writeFileSync(path.join(SCREENSHOTS_DIR, 'page-content.html'), pageContent);
  console.log('Conteudo da pagina salvo em page-content.html');
  
  // Verificar botoes disponiveis
  const buttons = await page.$$eval('button', btns => btns.map(b => ({
    text: b.textContent.trim(),
    class: b.className,
    name: b.getAttribute('name')
  })));
  console.log('Botoes encontrados:', JSON.stringify(buttons, null, 2));
  
  await browser.close();
  console.log('Teste concluido!');
}

takeScreenshots().catch(console.error);
