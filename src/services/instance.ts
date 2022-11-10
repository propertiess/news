import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://hacker-news.firebaseio.com/v0',
  headers: {
    'Content-Type': 'application/json'
  }
});
