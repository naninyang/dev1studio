const puppeteer = require('puppeteer');
const path = require('path');

type ConsoleMessageType =
  | 'log'
  | 'debug'
  | 'info'
  | 'error'
  | 'warn'
  | 'dir'
  | 'dirxml'
  | 'table'
  | 'trace'
  | 'clear'
  | 'startGroup'
  | 'startGroupCollapsed'
  | 'endGroup'
  | 'assert'
  | 'profile'
  | 'profileEnd'
  | 'count'
  | 'timeEnd'
  | 'verbose';

type ConsoleMessage = {
  type(): ConsoleMessageType;
  text(): string;
};

const SCREEN_API_URL = `https://www.dev1stud.io/preview?version=screen`;
const SCREEN_OUTPUT_PATH = path.join(__dirname, '../public/portfolio_screen_chloe.pdf');

const PRINT_API_URL = `https://www.dev1stud.io/preview?version=print`;
const PRINT_OUTPUT_PATH = path.join(__dirname, '../public/portfolio_print_chloe.pdf');

const RESUME_API_URL = `https://www.dev1stud.io/profile/resume`;
const RESUME_OUTPUT_PATH = path.join(__dirname, '../public/resume_chloe.pdf');

async function generatePortfolioScreen() {
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

async function generatePortfolioPrint() {
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

async function generateResume() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();

  const apiLoadPromise: Promise<void> = new Promise((resolve) => {
    page.on('console', (msg: ConsoleMessage) => {
      if (msg.type() === 'log' && msg.text().includes('api-loaded')) {
        resolve();
      }
    });
  });

  console.log('📄 preview 페이지 (resume) 렌더링 중...');
  await page.goto(RESUME_API_URL, { waitUntil: 'networkidle0' });

  console.log('📡 API 로딩 신호 대기 중...');
  await apiLoadPromise;

  console.log('✅ API 불러오기 완료 감지됨, PDF 생성 시작');

  console.log('🖨 PDF (resume) 생성 중...');
  await page.pdf({
    path: RESUME_OUTPUT_PATH,
    format: 'A4',
    printBackground: false,
    landscape: false,
  });

  await browser.close();

  console.log(`✅ PDF (resume) 생성 완료: ${RESUME_OUTPUT_PATH}`);
}

async function generateAll() {
  try {
    await generatePortfolioScreen();
    await generatePortfolioPrint();
    await generateResume();
  } catch (err) {
    console.error('❌ PDF 생성 중 오류 발생:', err);
  }
}

generateAll();
