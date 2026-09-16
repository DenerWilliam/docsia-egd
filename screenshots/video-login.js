const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const BASE_URL = 'http://localhost:14069';
const OUTPUT_DIR = path.join(__dirname, 'videos');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
  console.log('Iniciando gravacao de video...');
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1920,1080'],
    defaultViewport: { width: 1920, height: 1080 }
  });

  const page = await browser.newPage();
  
  // Iniciar gravacao de video
  const client = await page.target().createCDPSession();
  const videoPath = path.join(OUTPUT_DIR, 'login-odoo.webm');
  
  await client.send('Page.startScreencast', {
    format: 'webm',
    quality: 80,
    maxWidth: 1920,
    maxHeight: 1080,
    everyNthFrame: 1
  });

  console.log('Gravacao iniciada...');
  
  // 1. Acessar pagina de login
  console.log('1. Acessando pagina de login...');
  await page.goto(`${BASE_URL}/web/login`, { waitUntil: 'networkidle2', timeout: 60000 });
  await delay(2000);
  
  // 2. Preencher credenciais
  console.log('2. Preenchendo credenciais...');
  await page.type('#login', 'admin');
  await delay(500);
  await page.type('#password', 'admin');
  await delay(500);
  
  // 3. Clicar no botao de login
  console.log('3. Clicando no botao de login...');
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 60000 }),
    page.click('button[type="submit"]')
  ]);
  
  // 4. Aguardar dashboard carregar
  console.log('4. Aguardando dashboard...');
  await delay(5000);
  
  // 5. Tirar screenshot do dashboard
  console.log('5. Dashboard carregado!');
  await page.screenshot({ path: path.join(OUTPUT_DIR, 'dashboard-final.png'), fullPage: true });
  
  // Parar gravacao
  await client.send('Page.stopScreencast');
  
  console.log(`Video salvo em: ${videoPath}`);
  console.log('Gravacao concluida!');
  
  await browser.close();
})();
