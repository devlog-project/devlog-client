import instance from '../axios';

import type { AxiosRequestConfig } from 'axios';

const PATH = '/auth/login';

export const postLoginUser = (config?: AxiosRequestConfig) => {
  return instance({ url: PATH, method: 'post', ...config });
};
