import Seo from '@/components/Seo';
import CardJejeup from './card/jejeup';
import SummaryJejeup from './summary/jejeup';
import PreviewJejeup from './preview/jejeup';

const Jejeup = () => {
  const timestamp = Date.now();
  return (
    <>
      <Seo
        pageTitle="데브런닷스튜디오 웨버 DEV1L.studio jejeup"
        pageDescription="버스정보와 날씨정보를 알려드려요"
        pageImg={`https://dev1stud.io/images/og-jejeup.webp?ts=${timestamp}`}
      />
      <CardJejeup />
      <SummaryJejeup />
      <PreviewJejeup />
    </>
  );
};

export default Jejeup;
