const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const BASE_URL = 'http://localhost:14069';
const SCREENSHOTS_DIR = path.join(__dirname, 'cypress/screenshots');

['00-login','01-dashboard','02-purchase','03-inventory','04-invoicing'].forEach(dir => {
  const p = path.join(SCREENSHOTS_DIR, dir);
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
});

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function dismissError(page) {
  const okBtn = await page.$('.modal-footer button.btn-primary');
  if (okBtn) {
    await okBtn.click();
    await delay(1000);
  }
}

async function navigateToMenu(page, appName, subMenuName) {
  // Click the app in bottom bar
  const menuItems = await page.$$('.o_menu_brand, .oe_menu_leaf, .dropdown-item');
  for (const item of menuItems) {
    const text = await page.evaluate(el => el.textContent.trim(), item);
    if (text === appName) {
      await item.click();
      await delay(2000);
      break;
    }
  }

  if (subMenuName) {
    const subItems = await page.$$('.o_menu_entry a, .oe_secondary_menu a');
    for (const item of subItems) {
      const text = await page.evaluate(el => el.textContent.trim(), item);
      if (text === subMenuName) {
        await item.click();
        await delay(3000);
        break;
      }
    }
  }
}

async function takeScreenshots() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1920,1080'],
    defaultViewport: { width: 1920, height: 1080 }
  });

  const page = await browser.newPage();
  page.on('dialog', async dialog => { await dialog.dismiss(); });

  console.log('Fazendo login...');
  await page.goto(`${BASE_URL}/web/login`, { waitUntil: 'networkidle2', timeout: 60000 });
  await delay(2000);
  await page.type('#login', 'admin');
  await page.type('#password', 'admin');
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 60000 }),
    page.click('button[type="submit"]')
  ]);
  await delay(5000);
  console.log('Login realizado!');

  // Dashboard
  console.log('01 - Dashboard...');
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '01-dashboard', '01-dashboard.png'), fullPage: true });
  console.log('OK');

  // Purchase - navegar pelo menu
  console.log('02 - Purchase via menu...');
  await navigateToMenu(page, 'Purchase');
  await delay(3000);
  await dismissError(page);
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '02-purchase', '01-tela-inicial.png'), fullPage: true });

  const createBtn = await page.$('.o_list_button_add');
  if (createBtn) {
    await createBtn.click();
    await delay(3000);
    await dismissError(page);
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '02-purchase', '02-criar-pedido.png'), fullPage: true });
    console.log('OK (com criar)');
  } else {
    console.log('OK (sem botao criar)');
  }

  // Voltar ao dashboard
  await page.goto(`${BASE_URL}/web#action=base.action_client_bottom_menu`, { waitUntil: 'networkidle2', timeout: 60000 });
  await delay(3000);

  // Inventory - navegar pelo menu
  console.log('03 - Inventory via menu...');
  await navigateToMenu(page, 'Inventory');
  await delay(3000);
  await dismissError(page);
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '03-inventory', '01-tela-inicial.png'), fullPage: true });

  const createInvBtn = await page.$('.o_list_button_add');
  if (createInvBtn) {
    await createInvBtn.click();
    await delay(3000);
    await dismissError(page);
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '03-inventory', '02-criar-transferencia.png'), fullPage: true });
    console.log('OK (com criar)');
  } else {
    console.log('OK (sem botao criar)');
  }

  // Voltar ao dashboard
  await page.goto(`${BASE_URL}/web#action=base.action_client_bottom_menu`, { waitUntil: 'networkidle2', timeout: 60000 });
  await delay(3000);

  // Invoicing - navegar pelo menu
  console.log('04 - Invoicing via menu...');
  await navigateToMenu(page, 'Invoicing');
  await delay(3000);
  await dismissError(page);
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '04-invoicing', '01-tela-inicial.png'), fullPage: true });

  const createInvBtn2 = await page.$('.o_list_button_add');
  if (createInvBtn2) {
    await createInvBtn2.click();
    await delay(3000);
    await dismissError(page);
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '04-invoicing', '02-criar-fatura.png'), fullPage: true });
    console.log('OK (com criar)');
  } else {
    console.log('OK (sem botao criar)');
  }

  console.log('Screenshots concluidos!');
  await browser.close();
}

takeScreenshots().catch(console.error);
