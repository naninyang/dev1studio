import Seo from '@/components/Seo';
import CardNews from './card/news';
import PreviewNews from './preview/news';
import SummaryNews from './summary/news';

const Develog = () => {
  const timestamp = Date.now();
  return (
    <>
      <Seo
        pageTitle="데브런닷스튜디오 숏뷰 뉴스 DEV1L.studio short view news"
        pageDescription="YouTube 및 NAVER 뉴스에 업로드 된 뉴스를 요약하고 큐레이터 본인의 생각을 짧게 보여주는 서비스입니다."
        pageImg={`https://dev1stud.io/og-news.png?ts=${timestamp}`}
      />
      <CardNews />
      <SummaryNews />
      <PreviewNews />
    </>
  );
};

export default Develog;
