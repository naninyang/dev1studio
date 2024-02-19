import Seo from '@/components/Seo';
import CardMemorial from './card/memorial';
import SummaryMemorial from './summary/memorial';
import PreviewMemorial from './preview/memorial';

const Memorial = () => {
  const timestamp = Date.now();
  return (
    <>
      <Seo
        pageTitle="데브런닷스튜디오 기억뉴스상자 DEV1L.studio memorial.newsbox"
        pageDescription="유튜브 및 네이버 뉴스의 긴 기사를 요약하고 큐레이터의 코멘트를 보여주는 서비스입니다."
        pageImg={`https://dev1stud.io/images/og-memorial.webp?ts=${timestamp}`}
      />
      <CardMemorial />
      <SummaryMemorial />
      <PreviewMemorial />
    </>
  );
};

export default Memorial;
