const puppeteer = require('puppeteer');
const path = require('path');

const SCREEN_API_URL = `http://localhost:3030/preview?version=screen`;
const SCREEN_OUTPUT_PATH = path.join(__dirname, '../public/portfolio_screen_chloe.pdf');

const PRINT_API_URL = `http://localhost:3030/preview?version=print`;
const PRINT_OUTPUT_PATH = path.join(__dirname, '../public/portfolio_print_chloe.pdf');

async function generatePdfScreen() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();

  console.log('📄 preview 페이지 (screen) 렌더링 중...');
  await page.goto(SCREEN_API_URL, { waitUntil: 'networkidle0' });

  console.log('🖨 PDF (screen) 생성 중...');
  await page.pdf({
    path: SCREEN_OUTPUT_PATH,
    format: 'A4',
    printBackground: true,
    landscape: true,
  });

  await browser.close();

  console.log(`✅ PDF (screen) 생성 완료: ${SCREEN_OUTPUT_PATH}`);
}

async function generatePdfPrint() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();

  console.log('📄 preview 페이지 (print) 렌더링 중...');
  await page.goto(PRINT_API_URL, { waitUntil: 'networkidle0' });

  console.log('🖨 PDF (print) 생성 중...');
  await page.pdf({
    path: PRINT_OUTPUT_PATH,
    format: 'A4',
    printBackground: true,
    landscape: true,
  });

  await browser.close();

  console.log(`✅ PDF (print) 생성 완료: ${PRINT_OUTPUT_PATH}`);
}

generatePdfScreen().catch((err) => {
  console.error('❌ PDF (screen) 생성 중 오류 발생:', err);
});

generatePdfPrint().catch((err) => {
  console.error('❌ PDF (print) 생성 중 오류 발생:', err);
});
