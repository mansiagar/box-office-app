const BASE_URL = 'https://api.tvmaze.com';

const apiGet = async queryString => {
  const response = await fetch(`${BASE_URL}${queryString}`);
  //`https://www.tvmaze.com/search/shows?q=${searchStr}`
  const body = await response.json();

  return body;
};

export const searchForShows = query => apiGet(`/search/shows?q=${query}`);

export const searchForPeople = query => apiGet(`/search/people?q=${query}`);

export const getShowById = showId =>
  apiGet(`/shows/${showId}?embed[]=seasons&embed[]=cast`);

export const getShowByIds = async showIds => {
  const promises = showIds.map(showId => apiGet(`/shows/${showId}`));

  return Promise.all(promises);
};
