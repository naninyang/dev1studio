import Seo from '@/components/Seo';
import CardSemoview from './card/semoview';
import SummarySemoview from './summary/semoview';
import PreviewSemoview from './preview/semoview';

const Semoview = () => {
  const timestamp = Date.now();
  return (
    <>
      <Seo
        pageTitle="데브런닷스튜디오 세모뷰 DEV1L.studio semoview"
        pageDescription="세상의 모든 리뷰 - 세모뷰"
        pageImg={`https://dev1stud.io/images/og-semoview.webp?ts=${timestamp}`}
      />
      <CardSemoview />
      <SummarySemoview />
      <PreviewSemoview />
    </>
  );
};

export default Semoview;
