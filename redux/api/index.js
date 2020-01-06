
import axios from 'axios';

// const BASE_ADDR = 'http://37.152.190.92/test/api';
const BASE_ADDR = 'https://datadays.sharif.edu/api';
const TERMS = `${BASE_ADDR}/terms`;

export const BASE = 'https://datadays.sharif.edu';

export function termsAPI() {
  return axios.get(TERMS);
}

export default BASE_ADDR;
