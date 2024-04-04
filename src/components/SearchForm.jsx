import { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [searchStr, setSearchStr] = useState('');
  const [searchOption, setSearchOption] = useState('shows');

  const onSearchInputChange = ev => {
    setSearchStr(ev.target.value);
  };

  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };

  const onSubmit = ev => {
    ev.preventDefault();
    const options = {
      q: searchStr,
      searchOption,
    };

    onSearch(options);
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={searchStr} onChange={onSearchInputChange} />

      <lable>
        Shows
        <input
          type="radio"
          name="search_option"
          checked={searchOption == 'shows'}
          value="shows"
          onChange={onRadioChange}
        />
      </lable>
      <lable>
        Actors
        <input
          type="radio"
          name="search_option"
          checked={searchOption == 'actors'}
          value="actors"
          onChange={onRadioChange}
        />
      </lable>

      <button type="submit">Search</button>
    </form>
  );
};
export default SearchForm;
