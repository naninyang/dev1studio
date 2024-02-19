import Seo from '@/components/Seo';
import CardNol2tr from './card/nol2tr';
import SummaryNol2tr from './summary/nol2tr';
import PreviewNol2tr from './preview/nol2tr';

const Nol2tr = () => {
  const timestamp = Date.now();
  return (
    <>
      <Seo
        pageTitle="데브런닷스튜디오 웨버 DEV1L.studio nol2tr"
        pageDescription="버스정보와 날씨정보를 알려드려요"
        pageImg={`https://dev1stud.io/images/og-nol2tr.webp?ts=${timestamp}`}
      />
      <CardNol2tr />
      <SummaryNol2tr />
      <PreviewNol2tr />
    </>
  );
};

export default Nol2tr;
