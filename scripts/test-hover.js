const puppeteer = require('puppeteer-core');
const path = require('path');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function run() {
  const browser = await puppeteer.launch({ executablePath: chromePath, headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1100 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(r => setTimeout(r, 1000));
  
  const cards = await page.$$('.portfolio-card');
  if (cards.length > 0) {
    await cards[0].hover();
    console.log('Hovering over card 0 for 3 seconds...');
    await new Promise(r => setTimeout(r, 3500));
    await page.screenshot({ path: path.resolve(__dirname, '../public/assets/img/hover_scrolling_test.png') });
    console.log('Saved hover screenshot!');
  }
  await browser.close();
}
run().catch(console.error);
