import fetchDataFromAPI from '../service';

export const GET_DATA_RESPONSE = 'GET_DATA_RESPONSE';
export const getDataResponse = response => ({
  type: GET_DATA_RESPONSE,
  response
});

export const fetchData = () => {
  return async function (dispatch) {
    let response;
    try {
      response = await fetchDataFromAPI();
    } catch (e) {
      console.log('error:', e);
    }
    if (response) {
      const pt2scaled = response.current.data['pt2-scaled'];
      const regex = /^RD:647-(.*)$/;
      let data = {};

      if (pt2scaled) {
        data = Object.keys(pt2scaled).reduce((prev, curr) => {
          const match = curr.match(regex);
          if (match) {
            return {
              ...prev,
              [curr]: {
                ...pt2scaled[curr],
                color: '#' + Math.random().toString(16).substr(-6)
              }
            };
          }
          return { ...prev };
        }, {});
      }

      dispatch(getDataResponse(data));
    }
  };
};
