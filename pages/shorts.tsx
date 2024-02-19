import Seo from '@/components/Seo';
import CardShorts from './card/shorts';
import SummaryShorts from './summary/shorts';
import PreviewShorts from './preview/shorts';

const Shorts = () => {
  const timestamp = Date.now();
  return (
    <>
      <Seo
        pageTitle="데브런닷스튜디오 숏뷰뉴스 DEV1L.studio short.view.news"
        pageDescription="유튜브 및 네이버 뉴스의 기사를 요약하고 큐레이터의 코멘트를 보여주는 서비스입니다."
        pageImg={`https://dev1stud.io/images/og-shorts.png?ts=${timestamp}`}
      />
      <CardShorts />
      <SummaryShorts />
      <PreviewShorts />
    </>
  );
};

export default Shorts;
