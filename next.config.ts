import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  sassOptions: {
    api: 'modern',
    silenceDeprecations: ['legacy-js-api'],
    includePaths: [path.join(__dirname, 'styles')],
    outputStyle: process.env.NODE_ENV === 'production' ? 'compressed' : 'expanded',
    prependData: `
      @use 'designSystem.sass' as ds
      @use 'pretendard/dist/web/static/Pretendard-Black'
      @use 'pretendard/dist/web/static/Pretendard-Bold'
      @use 'pretendard/dist/web/static/Pretendard-Light'
      @use 'pretendard/dist/web/static/Pretendard-Medium'
      @use 'pretendard/dist/web/static/Pretendard-Regular'
      @use 'pretendard/dist/web/static/Pretendard-Thin'
    `,
  },
};

export default nextConfig;
