import instance from '../axios';

import type { AxiosRequestConfig } from 'axios';

const PATH = '/user';

interface CodeData {
  email: string;
  code: string;
}

export const postSendVerifyEmailCode = (config?: AxiosRequestConfig) => {
  return instance({ url: `${PATH}/sendAuthEmail`, method: 'post', ...config });
};

export const postValidateCode = (data: CodeData) => {
  return instance({ url: `${PATH}/authCode`, method: 'post', data });
};
