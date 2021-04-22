import { get } from 'config';

interface IApiConfig {
  PORT: number;
}

export const API_CONFIG: IApiConfig = {
  PORT: get('api.port'),
};
