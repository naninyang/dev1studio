import CardDevelog from './card/develog';
import PreviewDevelog from './preview/develog';
import SummaryDevelog from './summary/develog';

const Develog = () => {
  return (
    <>
      <CardDevelog />
      <SummaryDevelog />
      <PreviewDevelog />
    </>
  );
};

export default Develog;
