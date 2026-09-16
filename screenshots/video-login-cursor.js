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

// Funcao para mover o mouse suavemente
async function moveMouse(page, x, y, steps = 10) {
  for (let i = 1; i <= steps; i++) {
    const currentX = (await page.evaluate(() => window.__mouseX || 0)) || 960;
    const currentY = (await page.evaluate(() => window.__mouseY || 0)) || 540;
    
    const newX = currentX + (x - currentX) * (i / steps);
    const newY = currentY + (y - currentY) * (i / steps);
    
    await page.evaluate((mx, my) => {
      window.__mouseX = mx;
      window.__mouseY = my;
      
      // Criar ou atualizar cursor personalizado
      let cursor = document.getElementById('custom-cursor');
      if (!cursor) {
        cursor = document.createElement('div');
        cursor.id = 'custom-cursor';
        cursor.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000" stroke="#fff" stroke-width="1"><path d="M4 4l7.07 17 2.51-7.39L21 11.07z"/></svg>';
        cursor.style.cssText = 'position:fixed;pointer-events:none;z-index:99999;transition:none;filter:drop-shadow(2px 2px 2px rgba(0,0,0,0.5))';
        document.body.appendChild(cursor);
      }
      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
    }, newX, newY);
    
    await delay(16); // ~60fps
  }
}

// Funcao para mostrar clique
async function showClick(page) {
  await page.evaluate(() => {
    const x = window.__mouseX || 960;
    const y = window.__mouseY || 540;
    
    const click = document.createElement('div');
    click.style.cssText = `
      position: fixed;
      left: ${x - 20}px;
      top: ${y - 20}px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: rgba(113, 75, 103, 0.5);
      border: 3px solid #714B67;
      pointer-events: none;
      z-index: 99998;
      animation: clickPulse 0.5s ease-out forwards;
    `;
    
    // Adicionar animacao se nao existir
    if (!document.getElementById('click-animation')) {
      const style = document.createElement('style');
      style.id = 'click-animation';
      style.textContent = `
        @keyframes clickPulse {
          0% { transform: scale(0.5); opacity: 1; }
          100% { transform: scale(2); opacity: 0; }
        }
      `;
      document.head.appendChild(style);
    }
    
    document.body.appendChild(click);
    setTimeout(() => click.remove(), 500);
  });
}

(async () => {
  console.log('Iniciando gravacao de video com cursor...');
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1920,1080'],
    defaultViewport: { width: 1920, height: 1080 }
  });

  const page = await browser.newPage();
  let frameCount = 0;
  
  // Inicializar posicao do mouse
  await page.evaluate(() => {
    window.__mouseX = 960;
    window.__mouseY = 540;
  });
  
  // Funcao para capturar frame
  async function captureFrame(name, frames = 3) {
    for (let i = 0; i < frames; i++) {
      frameCount++;
      const frameNum = String(frameCount).padStart(4, '0');
      await page.screenshot({ 
        path: path.join(FRAMES_DIR, `frame_${frameNum}.png`),
        fullPage: false
      });
    }
    console.log(`  ${name}`);
  }

  // 1. Acessar pagina de login
  console.log('1. Acessando pagina de login...');
  await page.goto(`${BASE_URL}/web/login`, { waitUntil: 'networkidle2', timeout: 60000 });
  await delay(1000);
  
  // Mover mouse para o campo de login
  await moveMouse(page, 960, 400, 20);
  await captureFrame('Mouse movendo para login', 10);
  
  // 2. Clicar no campo de login
  await showClick(page);
  await captureFrame('Clicando no campo login', 8);
  
  // 3. Preencher login
  console.log('2. Preenchendo login...');
  await page.type('#login', 'admin', { delay: 80 });
  await delay(300);
  await captureFrame('Login sendo digitado', 15);
  
  // 4. Mover mouse para campo de senha
  await moveMouse(page, 960, 450, 15);
  await captureFrame('Mouse movendo para senha', 8);
  
  // 5. Clicar no campo de senha
  await showClick(page);
  await captureFrame('Clicando no campo senha', 8);
  
  // 6. Preencher senha
  console.log('3. Preenchendo senha...');
  await page.type('#password', 'admin', { delay: 80 });
  await delay(300);
  await captureFrame('Senha sendo digitada', 15);
  
  // 7. Mover mouse para botao de login
  console.log('4. Movendo para botao de login...');
  await moveMouse(page, 960, 520, 20);
  await captureFrame('Mouse sobre botao login', 10);
  
  // 8. Clicar no botao de login
  await showClick(page);
  await captureFrame('Clicando no botao login', 8);
  
  // 9. Clicar de verdade no botao
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 60000 }),
    page.click('button[type="submit"]')
  ]);
  
  // 10. Aguardar dashboard carregar
  console.log('5. Aguardando dashboard...');
  await delay(1000);
  
  // Mover mouse para o centro
  await moveMouse(page, 960, 540, 15);
  await captureFrame('Dashboard carregando', 10);
  
  await delay(2000);
  await moveMouse(page, 400, 300, 20);
  await captureFrame('Dashboard carregado', 15);
  
  await delay(1000);
  await moveMouse(page, 800, 400, 15);
  await captureFrame('Explorando dashboard', 10);
  
  // 11. Tirar screenshot final do dashboard
  console.log('6. Dashboard carregado!');
  await page.screenshot({ path: path.join(OUTPUT_DIR, 'dashboard-final.png'), fullPage: true });
  
  await browser.close();
  
  console.log(`\nTotal de frames: ${frameCount}`);
  console.log('Duracao estimada: ~' + (frameCount / 15).toFixed(1) + ' segundos (15fps)');
  console.log('\nProximo passo: executar ffmpeg para converter frames em video');
})();
