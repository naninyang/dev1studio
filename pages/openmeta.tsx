import Seo from '@/components/Seo';
import CardOpenmeta from './card/openmeta';
import SummaryOpenmeta from './summary/openmeta';
import PreviewOpenmeta from './preview/openmeta';

const Develog = () => {
  const timestamp = Date.now();
  return (
    <>
      <Seo
        pageTitle="데브런닷스튜디오 오픈메타 DEV1L.studio openmeta"
        pageDescription="검색하고자 하는 웹페이지의 SEO(Search Engine Optimization)에 필요한 meta 태그와 OpenGraph에 필요한 값들을 Raw Data로 보여주고, 미리보기를 지원하는 웹서비스"
        pageImg={`https://dev1stud.io/images/og-openmata.png?ts=${timestamp}`}
      />
      <CardOpenmeta />
      <SummaryOpenmeta />
      <PreviewOpenmeta />
    </>
  );
};

export default Develog;
