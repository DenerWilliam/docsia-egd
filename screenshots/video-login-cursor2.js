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
  console.log('Iniciando gravacao de video com cursor...');
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1920,1080'],
    defaultViewport: { width: 1920, height: 1080 }
  });

  const page = await browser.newPage();
  let frameCount = 0;
  
  // Injetar CSS do cursor
  await page.evaluate(() => {
    const style = document.createElement('style');
    style.textContent = `
      #custom-cursor {
        position: fixed;
        width: 24px;
        height: 24px;
        pointer-events: none;
        z-index: 999999;
        filter: drop-shadow(2px 2px 3px rgba(0,0,0,0.6));
        transition: none;
      }
      #click-ring {
        position: fixed;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 3px solid #714B67;
        background: rgba(113, 75, 103, 0.3);
        pointer-events: none;
        z-index: 999998;
        transform: translate(-50%, -50%) scale(0);
        opacity: 1;
      }
      #click-ring.active {
        animation: clickPulse 0.4s ease-out forwards;
      }
      @keyframes clickPulse {
        0% { transform: translate(-50%, -50%) scale(0.5); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(2.5); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
    
    // Criar cursor
    const cursor = document.createElement('div');
    cursor.id = 'custom-cursor';
    cursor.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M5 3l14 8-6.5 2L9 20z" fill="#000" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/>
    </svg>`;
    document.body.appendChild(cursor);
    
    // Criar acao de clique
    const ring = document.createElement('div');
    ring.id = 'click-ring';
    document.body.appendChild(ring);
  });

  // Funcao para mover cursor via CDP (posicao real do mouse)
  async function moveCursorTo(x, y, steps = 15) {
    const start = await page.evaluate(() => ({
      x: window.__cursorX || 960,
      y: window.__cursorY || 540
    }));
    
    for (let i = 1; i <= steps; i++) {
      const progress = i / steps;
      const ease = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      
      const currentX = start.x + (x - start.x) * ease;
      const currentY = start.y + (y - start.y) * ease;
      
      await page.mouse.move(currentX, currentY);
      await page.evaluate((cx, cy) => {
        window.__cursorX = cx;
        window.__cursorY = cy;
        const cursor = document.getElementById('custom-cursor');
        if (cursor) {
          cursor.style.left = (cx - 2) + 'px';
          cursor.style.top = (cy - 2) + 'px';
        }
      }, currentX, currentY);
      
      await delay(16);
    }
  }

  // Funcao para mostrar efeito de clique
  async function showClickEffect(x, y) {
    await page.evaluate((cx, cy) => {
      const ring = document.getElementById('click-ring');
      if (ring) {
        ring.style.left = cx + 'px';
        ring.style.top = cy + 'px';
        ring.classList.remove('active');
        void ring.offsetWidth; // Forcar reflow
        ring.classList.add('active');
        setTimeout(() => ring.classList.remove('active'), 400);
      }
    }, x, y);
  }

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

  // Funcao para pegar posicao real de um elemento
  async function getElementCenter(selector) {
    return await page.evaluate((sel) => {
      const el = document.querySelector(sel);
      if (!el) return null;
      const rect = el.getBoundingClientRect();
      return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
    }, selector);
  }

  // 1. Acessar pagina de login
  console.log('1. Acessando pagina de login...');
  await page.goto(`${BASE_URL}/web/login`, { waitUntil: 'networkidle2', timeout: 60000 });
  await delay(2000);
  
  // Posicionar cursor no centro
  await page.mouse.move(960, 540);
  await page.evaluate(() => {
    window.__cursorX = 960;
    window.__cursorY = 540;
    const cursor = document.getElementById('custom-cursor');
    if (cursor) { cursor.style.left = '958px'; cursor.style.top = '538px'; }
  });
  await captureFrame('Pagina de login', 10);

  // 2. Pegar posicao do campo de login e mover ate ele
  console.log('2. Movendo para campo de login...');
  const loginPos = await getElementCenter('#login');
  if (loginPos) {
    await moveCursorTo(loginPos.x, loginPos.y, 25);
    await captureFrame('Mouse sobre campo login', 10);
    
    // Clicar
    await showClickEffect(loginPos.x, loginPos.y);
    await page.mouse.click(loginPos.x, loginPos.y);
    await delay(300);
    await captureFrame('Clicou no campo login', 8);
  }

  // 3. Preencher login
  console.log('3. Preenchendo login...');
  await page.type('#login', 'admin', { delay: 80 });
  await delay(300);
  await captureFrame('Login digitado', 12);

  // 4. Pegar posicao do campo de senha
  console.log('4. Movendo para campo de senha...');
  const passPos = await getElementCenter('#password');
  if (passPos) {
    await moveCursorTo(passPos.x, passPos.y, 20);
    await captureFrame('Mouse sobre campo senha', 10);
    
    // Clicar
    await showClickEffect(passPos.x, passPos.y);
    await page.mouse.click(passPos.x, passPos.y);
    await delay(300);
    await captureFrame('Clicou no campo senha', 8);
  }

  // 5. Preencher senha
  console.log('5. Preenchendo senha...');
  await page.type('#password', 'admin', { delay: 80 });
  await delay(300);
  await captureFrame('Senha digitada', 12);

  // 6. Pegar posicao do botao de login
  console.log('6. Movendo para botao de login...');
  const btnPos = await getElementCenter('button[type="submit"]');
  if (btnPos) {
    await moveCursorTo(btnPos.x, btnPos.y, 25);
    await captureFrame('Mouse sobre botao login', 10);
    
    // Clicar
    await showClickEffect(btnPos.x, btnPos.y);
    await delay(200);
    await captureFrame('Clicou no botao', 8);
  }

  // 7. Clicar de verdade e aguardar navegacao
  console.log('7. Fazendo login...');
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 60000 }),
    page.click('button[type="submit"]')
  ]);

  // 8. Dashboard
  console.log('8. Dashboard...');
  await delay(2000);
  
  // Mover mouse para o centro do dashboard
  await moveCursorTo(960, 400, 20);
  await captureFrame('Dashboard carregando', 10);
  
  await delay(1000);
  
  // Mover para um menu
  const menuPos = await getElementCenter('.o_menu_brand');
  if (menuPos) {
    await moveCursorTo(menuPos.x, menuPos.y, 15);
    await captureFrame('Mouse sobre menu', 10);
  }
  
  await delay(500);
  await moveCursorTo(600, 500, 15);
  await captureFrame('Dashboard pronto', 10);

  await browser.close();
  
  console.log(`\nTotal de frames: ${frameCount}`);
  console.log('Duracao estimada: ~' + (frameCount / 15).toFixed(1) + ' segundos (15fps)');
})();
