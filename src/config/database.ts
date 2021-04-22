import { get } from 'config';
import { Dialect } from 'sequelize/types';

interface IDatabaseConfig {
  DIALECT: Dialect,
  HOST: string,
  PORT: number,
  USERNAME: string,
  PASSWORD: string,
  DATABASE: string,
}

export const DATABASE_CONFIG: IDatabaseConfig = {
  DIALECT: 'postgres',
  HOST: get('database.host'),
  PORT: get('database.port'),
  USERNAME: get('database.username'),
  PASSWORD: get('database.password'),
  DATABASE: get('database.database')
};
