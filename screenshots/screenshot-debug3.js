const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const BASE_URL = 'http://localhost:14069';
const DIR = path.join(__dirname, 'cypress/screenshots/debug');

if (!fs.existsSync(DIR)) fs.mkdirSync(DIR, { recursive: true });

async function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1920,1080'],
    defaultViewport: { width: 1920, height: 1080 }
  });

  const page = await browser.newPage();
  page.on('dialog', async d => await d.dismiss().catch(() => {}));

  // Login
  await page.goto(`${BASE_URL}/web/login`, { waitUntil: 'networkidle2' });
  await delay(1000);
  await page.type('#login', 'admin');
  await page.type('#password', 'admin');
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle2' }),
    page.click('button[type="submit"]')
  ]);
  await delay(5000);

  // Testar Purchase via menu_id
  console.log('Testando Purchase via menu_id=219...');
  await page.goto(`${BASE_URL}/web#menu_id=219&model=purchase.order&view_type=list`, { waitUntil: 'networkidle2' });
  await delay(5000);
  
  // Capturar conteudo da pagina
  const pageContent = await page.evaluate(() => {
    return {
      body: document.body.innerText.substring(0, 1000),
      hasError: !!document.querySelector('.o_error_detail'),
      hasTable: !!document.querySelector('table'),
      hasListView: !!document.querySelector('.o_list_view'),
      hasKanbanView: !!document.querySelector('.o_kanban_view'),
      hasFormView: !!document.querySelector('.o_form_view'),
      hasPivotView: !!document.querySelector('.o_pivot_view'),
      hasGraphView: !!document.querySelector('.o_graph_view'),
      allClasses: Array.from(document.querySelectorAll('[class]')).map(el => el.className).filter(c => c.includes('o_')).slice(0, 20)
    };
  });
  
  console.log('Page content:', JSON.stringify(pageContent, null, 2));
  
  // Salvar HTML
  const html = await page.content();
  fs.writeFileSync(path.join(DIR, 'purchase-debug3.html'), html);
  
  // Screenshot
  await page.screenshot({ path: path.join(DIR, 'purchase-debug3.png'), fullPage: true });
  
  console.log('Done!');
  await browser.close();
})();
