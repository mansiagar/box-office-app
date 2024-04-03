import { useState } from 'react';

const Home = () => {
  const [searchStr, setSearchStr] = useState('');

  const onSearchInputChange = ev => {
    setSearchStr(ev.target.value);
  };
  const onSearch = async ev => {
    ev.preventDefault();

    const response = await fetch('https://api.tvmaze.com/search/shows?q=boys');
    const body = await response.json();
    //.then(response => response.json())
    // .then(body => console.log(body));
    // https://api.tvmaze.com/search/shows?q=girls

    console.log(body);
  };
  return (
    <div>
      <form onSubmit={onSearch}>
        <input type="text" value={searchStr} onChange={onSearchInputChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
export default Home;
