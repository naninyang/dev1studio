import Seo from '@/components/Seo';
import CardWeabur from './card/weabur';
import SummaryWeabur from './summary/weabur';
import PreviewWeabur from './preview/weabur';

const Weabur = () => {
  const timestamp = Date.now();
  return (
    <>
      <Seo
        pageTitle="데브런닷스튜디오 웨버 DEV1L.studio weabur"
        pageDescription="버스정보와 날씨정보를 알려드려요"
        pageImg={`https://dev1stud.io/images/og-weabur.webp?ts=${timestamp}`}
      />
      <CardWeabur />
      <SummaryWeabur />
      <PreviewWeabur />
    </>
  );
};

export default Weabur;
