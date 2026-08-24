const puppeteer = require('puppeteer-core');
const path = require('path');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function run() {
  const browser = await puppeteer.launch({ executablePath: chromePath, headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1100 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(r => setTimeout(r, 2000)); // wait for swiper to mount
  
  const el = await page.$('#testimonials');
  if (el) {
    const outPath = path.resolve(__dirname, '../public/assets/img/testimonials_preview_result.png');
    await el.screenshot({ path: outPath });
    console.log('Testimonials preview captured successfully to:', outPath);
  } else {
    console.log('Could not find #testimonials');
  }
  await browser.close();
}
run().catch(console.error);
