import puppeteer from 'puppeteer';
import fs from 'fs';

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto('http://localhost:5174/fullpage', { waitUntil: 'networkidle0' });
    await page.screenshot({ path: 'screenshot.png' });
    const html = await page.content();
    fs.writeFileSync('page_content.html', html);
    console.log("Screenshot taken.");
    await browser.close();
})();
