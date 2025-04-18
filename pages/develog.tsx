import Seo from '@/components/Seo';
import CardDevelog from './card/develog';
import SummaryDevelog from './summary/develog';
import PreviewDevelog from './preview/develog';

const Develog = () => {
  const timestamp = Date.now();
  return (
    <>
      <Seo
        pageTitle="데브런닷스튜디오 디벨로그 DEV1L.studio develog"
        pageDescription="웹퍼블리셔로서 프론트엔드 개발하면서 힘들었던 부분들에 대해서 글과 코드로 풀어봅니다."
        pageImg={`https://dev1stud.io/images/og-develog.webp?ts=${timestamp}`}
      />
      <CardDevelog />
      <SummaryDevelog />
      <PreviewDevelog />
    </>
  );
};

export default Develog;
