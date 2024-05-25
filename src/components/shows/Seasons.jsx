const Seasons = ({ seasons }) => {
  return (
    <div>
      <p>Seasons in total: {seasons.length} </p>
      <p>
        Episode in total :{' '}
        {seasons.reduce((sum, season) => sum + season.episoderOrder, 0)}
      </p>
    </div>
  );
};

export default Seasons;
