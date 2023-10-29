import axios from 'axios';

const defaultConfig = {
  baseURL: 'https://api.chucknorris.io',
};

const DEFAULT_API_INSTANCE = axios.create(defaultConfig);

export default DEFAULT_API_INSTANCE;
