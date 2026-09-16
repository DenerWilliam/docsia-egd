const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const BASE_URL = 'http://localhost:14069';
const DIR = path.join(__dirname, 'cypress/screenshots');

['00-login','01-dashboard','02-purchase','03-inventory','04-invoicing'].forEach(d => {
  const p = path.join(DIR, d);
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
});

async function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

async function waitForContent(page, timeout = 15000) {
  try {
    await page.waitForSelector('.o_list_view, .o_form_view, .o_kanban_view, .o_pivot_view, .o_graph_view, .o_calendar_view, .o_error_detail', { timeout });
  } catch(e) {}
  await delay(2000);
}

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1920,1080'],
    defaultViewport: { width: 1920, height: 1080 }
  });

  const page = await browser.newPage();
  page.on('dialog', async d => await d.dismiss().catch(() => {}));

  // Login
  console.log('Login...');
  await page.goto(`${BASE_URL}/web/login`, { waitUntil: 'networkidle2' });
  await delay(1000);
  await page.type('#login', 'admin');
  await page.type('#password', 'admin');
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle2' }),
    page.click('button[type="submit"]')
  ]);
  await delay(5000);
  console.log('OK');

  // Dashboard
  console.log('01 - Dashboard');
  await page.screenshot({ path: path.join(DIR, '01-dashboard', '01-dashboard.png'), fullPage: true });

  // Purchase - click no menu
  console.log('02 - Purchase');
  await page.goto(`${BASE_URL}/web`, { waitUntil: 'networkidle2' });
  await delay(3000);
  
  // Click no menu Purchase no bottom bar
  await page.evaluate(() => {
    const items = document.querySelectorAll('.o_app');
    for (const item of items) {
      if (item.textContent.trim().includes('Purchase') || item.getAttribute('data-menu-xmlid')?.includes('purchase')) {
        item.click();
        return true;
      }
    }
    // Fallback: click no primeiro item do menu
    const firstApp = document.querySelector('.o_app');
    if (firstApp) firstApp.click();
    return false;
  });
  await delay(3000);
  
  // Click em "Orders" no submenu
  await page.evaluate(() => {
    const links = document.querySelectorAll('.o_menu_entry a, .dropdown-item');
    for (const link of links) {
      if (link.textContent.trim() === 'Orders') {
        link.click();
        return true;
      }
    }
    return false;
  });
  await delay(5000);
  await waitForContent(page);
  await page.screenshot({ path: path.join(DIR, '02-purchase', '01-tela-inicial.png'), fullPage: true });

  // Click em "Create"
  const pb = await page.$('.o_list_button_add');
  if (pb) {
    await pb.click();
    await delay(3000);
    await page.screenshot({ path: path.join(DIR, '02-purchase', '02-criar-pedido.png'), fullPage: true });
    // Voltar
    await page.goBack();
    await delay(3000);
  }

  // Inventory
  console.log('03 - Inventory');
  await page.goto(`${BASE_URL}/web`, { waitUntil: 'networkidle2' });
  await delay(3000);
  
  await page.evaluate(() => {
    const items = document.querySelectorAll('.o_app');
    for (const item of items) {
      if (item.textContent.trim().includes('Inventory') || item.getAttribute('data-menu-xmlid')?.includes('stock')) {
        item.click();
        return true;
      }
    }
    return false;
  });
  await delay(3000);
  
  // Click em "Operations" > "Transfers" ou "All"
  await page.evaluate(() => {
    const links = document.querySelectorAll('.o_menu_entry a, .dropdown-item');
    for (const link of links) {
      const text = link.textContent.trim();
      if (text === 'Transfers' || text === 'All') {
        link.click();
        return true;
      }
    }
    return false;
  });
  await delay(5000);
  await waitForContent(page);
  await page.screenshot({ path: path.join(DIR, '03-inventory', '01-tela-inicial.png'), fullPage: true });

  const ib = await page.$('.o_list_button_add');
  if (ib) {
    await ib.click();
    await delay(3000);
    await page.screenshot({ path: path.join(DIR, '03-inventory', '02-criar-transferencia.png'), fullPage: true });
  }

  // Invoicing
  console.log('04 - Invoicing');
  await page.goto(`${BASE_URL}/web`, { waitUntil: 'networkidle2' });
  await delay(3000);
  
  await page.evaluate(() => {
    const items = document.querySelectorAll('.o_app');
    for (const item of items) {
      if (item.textContent.trim().includes('Invoicing') || item.getAttribute('data-menu-xmlid')?.includes('account')) {
        item.click();
        return true;
      }
    }
    return false;
  });
  await delay(3000);
  
  // Click em "Invoices"
  await page.evaluate(() => {
    const links = document.querySelectorAll('.o_menu_entry a, .dropdown-item');
    for (const link of links) {
      const text = link.textContent.trim();
      if (text === 'Invoices') {
        link.click();
        return true;
      }
    }
    return false;
  });
  await delay(5000);
  await waitForContent(page);
  await page.screenshot({ path: path.join(DIR, '04-invoicing', '01-tela-inicial.png'), fullPage: true });

  const ib2 = await page.$('.o_list_button_add');
  if (ib2) {
    await ib2.click();
    await delay(3000);
    await page.screenshot({ path: path.join(DIR, '04-invoicing', '02-criar-fatura.png'), fullPage: true });
  }

  // Tamanhos
  for (const dir of ['02-purchase', '03-inventory', '04-invoicing']) {
    const files = fs.readdirSync(path.join(DIR, dir));
    for (const f of files) {
      if (f.endsWith('.png')) {
        const s = fs.statSync(path.join(DIR, dir, f));
        console.log(`${dir}/${f}: ${(s.size/1024).toFixed(1)}KB`);
      }
    }
  }

  console.log('Done!');
  await browser.close();
})();
