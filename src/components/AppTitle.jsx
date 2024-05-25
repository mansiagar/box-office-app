function AppTitle(props) {
  const {
    title = 'TV SHOW APP',
    subtitle = 'Are you looking for a movie or an actor',
  } = props; //by default title is box office
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
export default AppTitle;
