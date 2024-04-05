import { Link } from 'react-router-dom';

const ShowCard = ({ name, image, id, summary }) => {
  const summaryStriped = summary
    ? summary.split(' ').slice(0, 10).join('').replace(/<.+?>/g, '')
    : 'No description';

  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>

      <h1>{name}</h1>
      <p>{summaryStriped}</p>
      <div>
        <Link to="/">Read More</Link>
        <button type="button ">Star me </button>
      </div>
    </div>
  );
};
export default ShowCard;
