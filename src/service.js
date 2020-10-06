import axios from 'axios';

const fetchDataFromAPI = async () => {
  try {
    const response = await axios.get(
      'https://reference.intellisense.io/thickenernn/v1/referencia'
    );
    const { data } = await response;
    return data;
  } catch (error) {
    return error;
  }
};

export default fetchDataFromAPI;
