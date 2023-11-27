import Header from "./Header";
import Cardsection from "./Cardsection";
import Boardads from './Boardads'

function Section() {
  return (
    <>
      <div className="px-[18.4rem]">
        <Header />
        <Cardsection />
        <Boardads />
      </div>
    </>
  );
}

export default Section;
