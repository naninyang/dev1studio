import Seo from '@/components/Seo';
import CardKomponent from './card/komponent';
import SummaryKomponent from './summary/komponent';
import PreviewKomponent from './preview/komponent';

const Komponent = () => {
  const timestamp = Date.now();
  return (
    <>
      <Seo
        pageTitle="데브런닷스튜디오 콤포넌트 DEV1L.studio komponent"
        pageDescription="K-components ! O612의 ‘국문’으로 작성하는 컴포넌트"
        pageImg={`https://dev1stud.io/images/og-komponent.webp?ts=${timestamp}`}
      />
      <CardKomponent />
      <SummaryKomponent />
      <PreviewKomponent />
    </>
  );
};

export default Komponent;
