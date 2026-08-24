const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const sites = [
  {
    id: 'critel-tecnologia',
    url: 'https://critel-tecnologia.vercel.app/pt',
    filename: 'showcase-critel-tecnologia.png'
  },
  {
    id: 'zero20garage',
    url: 'https://zero20garage.com.br/',
    fallbackUrl: 'https://zero20garage.vercel.app/',
    filename: 'showcase-zero20garage.png'
  },
  {
    id: 'mao-de-cera-oficial',
    url: 'https://mao-de-cera-oficial.vercel.app/',
    filename: 'showcase-mao-de-cera-oficial.png'
  },
  {
    id: 'renata-ribeiro-neuropsico',
    url: 'https://renata-ribeiro-neuropsico.vercel.app/',
    filename: 'showcase-renata-ribeiro-neuropsico.png'
  },
  {
    id: 'bemamados',
    url: 'https://www.bemamados.com.br/',
    filename: 'showcase-bemamados.png'
  }
];

const targetDir = path.resolve(__dirname, '../public/assets/img');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 300;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight || totalHeight > 15000) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 150);
    });
  });
}

async function capture() {
  console.log('Launching Chrome...');
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 860, deviceScaleFactor: 1 });

  for (const site of sites) {
    console.log(`\n========================================`);
    console.log(`Processing: ${site.id} (${site.url})`);
    try {
      try {
        await page.goto(site.url, { waitUntil: 'networkidle2', timeout: 30000 });
      } catch (err) {
        if (site.fallbackUrl) {
          console.log(`Main URL failed, trying fallback: ${site.fallbackUrl}`);
          await page.goto(site.fallbackUrl, { waitUntil: 'networkidle2', timeout: 30000 });
        } else {
          throw err;
        }
      }

      // Wait 3s for any initial preloaders or intro animations to finish
      await new Promise(r => setTimeout(r, 3000));

      // Scroll to trigger lazy loading / animations
      console.log('Scrolling page to trigger animations...');
      await autoScroll(page);

      // Wait 2s at top for animations to settle
      await new Promise(r => setTimeout(r, 2000));

      const outPath = path.join(targetDir, site.filename);
      console.log(`Taking fullpage screenshot to ${outPath}...`);
      await page.screenshot({
        path: outPath,
        fullPage: true,
        type: 'png'
      });
      console.log(`✓ Saved ${site.filename}`);
    } catch (err) {
      console.error(`✗ Error processing ${site.id}:`, err.message);
    }
  }

  await browser.close();
  console.log('\nAll done!');
}

capture().catch(console.error);
