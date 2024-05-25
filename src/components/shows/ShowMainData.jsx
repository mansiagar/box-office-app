const ShowMainData = ({ image, name, rating, summary, genres }) => {
  return (
    <div>
      <img src={image ? image.original : '/public/notfound.png'} alt={name} />
      <div>
        <h1>{name}</h1>
        <div>{rating.average || 'N/A'}</div>{' '}
        {/* n/a when rating is not htere */}
        <div dangerouslySetInnerHTML={{ __html: summary }} />{' '}
        {/* remove all html element  */}
        <div>
          Geners:
          <div>
            {genres.map(genre => (
              <span key={genre}>{genre}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowMainData;
