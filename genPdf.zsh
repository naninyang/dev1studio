#!/bin/zsh

echo "🚀 1단계: PDF 생성 스크립트 실행 중..."
pnpm run generate:pdf

echo "✅ PDF 생성 완료"

# 경로 설정
SOURCE_DIR="./public"
TARGET_DIR="../cdn/public/dev1studios"

# 파일명 설정
SCREEN_PDF="portfolio_screen_chloe.pdf"
PRINT_PDF="portfolio_print_chloe.pdf"
RESUME_PDF="resume_chloe.pdf"

echo "📁 2단계: 타겟 디렉토리 존재 확인 및 생성..."
mkdir -p "$TARGET_DIR"

echo "📦 3단계: PDF 파일 복사 중..."
cp "$SOURCE_DIR/$SCREEN_PDF" "$TARGET_DIR/"
cp "$SOURCE_DIR/$PRINT_PDF" "$TARGET_DIR/"
cp "$SOURCE_DIR/$RESUME_PDF" "$TARGET_DIR/"

echo "🧹 4단계: 원본 PDF 파일 삭제 중..."
rm "$SOURCE_DIR/$SCREEN_PDF"
rm "$SOURCE_DIR/$PRINT_PDF"
rm "$SOURCE_DIR/$RESUME_PDF"

echo "🎉 완료: PDF 복사 및 정리 완료! -> $TARGET_DIR"
