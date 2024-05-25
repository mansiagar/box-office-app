const ShowCard = ({ name, image, id, summary, onStarMeClick, isStarred }) => {
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
        <a href={`/show/${id}`} target="blank " rel="norefeere">
          Read More
        </a>
        <button type="button " onClick={() => onStarMeClick(id)}>
          {isStarred ? 'Unstar Me' : 'Star ME'}
        </button>
      </div>
    </div>
  );
};
export default ShowCard;
