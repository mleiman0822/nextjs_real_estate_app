import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
      headers: {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': "e090f56f39msh61a55188cd3c11cp1c1697jsn7031f3b0b762" ,
      },
    });
      
    return data;
  }