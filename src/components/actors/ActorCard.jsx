//import { Link } from 'react-router-dom';

const ActorCard = ({ name, image, gender, country, birthday, deathday }) => {
  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>

      <h1>
        {name}
        {!!gender && '($(gender))'}
      </h1>
      <p>{country ? `Comes from $(country)` : 'no cuntry knowm'}</p>
      <div>
        {!!birthday && <p>Born {birthday}</p>}
        <p>{deathday ? `Died ${deathday}` : 'Alive'}</p>
      </div>
    </div>
  );
};
export default ActorCard;
