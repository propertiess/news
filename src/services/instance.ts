import axios from 'axios';
import { ENV } from '@/utils/constants/env.constant';

export const instance = axios.create({
  baseURL: process.env[ENV.API_BASE_URL],
  headers: {
    'Content-Type': 'application/json'
  }
});
