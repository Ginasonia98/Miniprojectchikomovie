import Card from "./Card";
const CardList = ({popularMovies}) =>
  popularMovies.map((movie, i) => (
    <>
      <Card movie={movie} i={i} />
    </>
  ));
export default CardList;
