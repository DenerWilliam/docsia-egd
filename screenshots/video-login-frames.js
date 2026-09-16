const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const BASE_URL = 'http://localhost:14069';
const FRAMES_DIR = path.join(__dirname, 'temp-frames');
const OUTPUT_DIR = path.join(__dirname, 'videos');

if (!fs.existsSync(FRAMES_DIR)) fs.mkdirSync(FRAMES_DIR, { recursive: true });
if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

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
  let frameCount = 0;
  
  // Funcao para capturar frame
  async function captureFrame(name) {
    frameCount++;
    const frameNum = String(frameCount).padStart(4, '0');
    await page.screenshot({ 
      path: path.join(FRAMES_DIR, `frame_${frameNum}.png`),
      fullPage: false
    });
    console.log(`  Frame ${frameNum}: ${name}`);
  }

  // 1. Acessar pagina de login
  console.log('1. Acessando pagina de login...');
  await page.goto(`${BASE_URL}/web/login`, { waitUntil: 'networkidle2', timeout: 60000 });
  await delay(1000);
  await captureFrame('Pagina de login');
  
  // 2. Preencher login
  console.log('2. Preenchendo login...');
  await page.type('#login', 'admin', { delay: 100 });
  await delay(500);
  await captureFrame('Login preenchido');
  
  // 3. Preencher senha
  console.log('3. Preenchendo senha...');
  await page.type('#password', 'admin', { delay: 100 });
  await delay(500);
  await captureFrame('Senha preenchida');
  
  // 4. Clicar no botao de login
  console.log('4. Clicando no botao de login...');
  await captureFrame('Antes de clicar login');
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 60000 }),
    page.click('button[type="submit"]')
  ]);
  
  // 5. Aguardar dashboard carregar
  console.log('5. Aguardando dashboard...');
  await delay(1000);
  await captureFrame('Carregando dashboard');
  
  await delay(2000);
  await captureFrame('Dashboard carregando');
  
  await delay(2000);
  await captureFrame('Dashboard pronto');
  
  // 6. Tirar screenshot final do dashboard
  console.log('6. Dashboard carregado!');
  await page.screenshot({ path: path.join(OUTPUT_DIR, 'dashboard-final.png'), fullPage: true });
  
  await browser.close();
  
  console.log(`Total de frames: ${frameCount}`);
  console.log('Frames salvos em:', FRAMES_DIR);
  console.log('Proximo passo: executar ffmpeg para converter frames em video');
})();
