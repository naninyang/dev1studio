import Seo from '@/components/Seo';
import SummaryCondition from './summary/condition';
import CardCondition from './card/condition';
import PreviewCondition from './preview/condition';

const Condition = () => {
  const timestamp = Date.now();
  return (
    <>
      <Seo
        pageTitle="데브런닷스튜디오 컨디션스튜디오 DEV1L.studio condition studio"
        pageDescription="condition studio - 날씨의 모든것"
        pageImg={`https://dev1stud.io/images/og-condition.webp?ts=${timestamp}`}
      />
      <CardCondition />
      <SummaryCondition />
      <PreviewCondition />
    </>
  );
};

export default Condition;
