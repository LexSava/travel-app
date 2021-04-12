//Async action creator for GET API Route
export const getDataFromBE = (url: string) => {
  return async (dispatch: any) => {
    try {
      const res = await fetch(url);
      const countryList = await res.json(); 
      dispatch({ type: 'GET_COUNTRY_LIST', countryList });
    } catch (err) {
      alert('API failed');
    }
  }
}
