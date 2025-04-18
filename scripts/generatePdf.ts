const { PDFDocument } = require('pdf-lib');
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

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
const SCREEN_METATAG_PATH = './public/portfolio_screen_chloe.pdf';

const PRINT_API_URL = `https://www.dev1stud.io/preview?version=print`;
const PRINT_OUTPUT_PATH = path.join(__dirname, '../public/portfolio_print_chloe.pdf');
const PRINT_METATAG_PATH = './public/portfolio_print_chloe.pdf';

const RESUME_API_URL = `https://www.dev1stud.io/profile/resume`;
const RESUME_OUTPUT_PATH = path.join(__dirname, '../public/resume_chloe.pdf');
const RESUME_METATAG_PATH = './public/resume_chloe.pdf';

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

async function updatePortfolioScreenMetadata() {
  const file = fs.readFileSync(SCREEN_OUTPUT_PATH);
  const pdfDoc = await PDFDocument.load(file);

  pdfDoc.setTitle('고아리 포트폴리오 (화면용)');
  pdfDoc.setAuthor('고아리');
  pdfDoc.setCreator('고아리');
  pdfDoc.setProducer('Generated by DEV1L.studio PDF Automator');

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(SCREEN_METATAG_PATH, pdfBytes);

  console.log('✅ 메타데이터 (screen) 수정 완료');
}

async function updatePortfolioPrintMetadata() {
  const file = fs.readFileSync(PRINT_OUTPUT_PATH);
  const pdfDoc = await PDFDocument.load(file);

  pdfDoc.setTitle('고아리 포트폴리오 (프린트용)');
  pdfDoc.setAuthor('고아리');
  pdfDoc.setCreator('고아리');
  pdfDoc.setProducer('Generated by DEV1L.studio PDF Automator');

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(PRINT_METATAG_PATH, pdfBytes);

  console.log('✅ 메타데이터 (print) 수정 완료');
}

async function updateResumeMetadata() {
  const file = fs.readFileSync(RESUME_OUTPUT_PATH);
  const pdfDoc = await PDFDocument.load(file);

  pdfDoc.setTitle('고아리 이력서');
  pdfDoc.setAuthor('고아리');
  pdfDoc.setCreator('고아리');
  pdfDoc.setProducer('Generated by DEV1L.studio PDF Automator');

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(RESUME_METATAG_PATH, pdfBytes);

  console.log('✅ 메타데이터 (resume) 수정 완료');
}

async function updateMetadateAll() {
  try {
    await updatePortfolioScreenMetadata();
    await updatePortfolioPrintMetadata();
    await updateResumeMetadata();
  } catch (err) {
    console.error('❌ PDF 메타데이터 수정 중 오류 발생:', err);
  }
}

async function runAll() {
  await generateAll();
  await updateMetadateAll();
}

runAll().catch((err) => {
  console.error('❌ 전체 실행 중 오류 발생:', err);
});
