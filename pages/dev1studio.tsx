import Seo from '@/components/Seo';
import CardDev1studio from './card/dev1studio';
import SummaryDev1studio from './summary/dev1studio';
import PreviewDev1studio from './preview/dev1studio';

const Dev1studio = () => {
  const timestamp = Date.now();
  return (
    <>
      <Seo
        pageTitle="데브런닷스튜디오 DEV1L.studio"
        pageDescription="O612가 작업했던 포트폴리오를 확인할 수 있습니다."
        pageImg={`https://dev1stud.io/images/og-dev1studio.webp?ts=${timestamp}`}
      />
      <CardDev1studio />
      <SummaryDev1studio />
      <PreviewDev1studio />
    </>
  );
};

export default Dev1studio;
