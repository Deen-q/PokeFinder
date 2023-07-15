import axios from 'axios';

const fetchDataAndLog = async () => {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/445");
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export default fetchDataAndLog;
