export class AppConfigService {
  private readonly envConfig: { [key: string]: any } = {};
  constructor() {
    this.envConfig.app = {
      port: parseInt(process.env.APP_PORT, 10) || 8080,
      environment: process.env.ENVIRONMENT,
    };
    /*database*/
    this.envConfig.db = {
      mssql: {
        dialect: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USERNAME,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DATABASE,
        autoLoadModels: true,
        synchronize: true,
      },
    };
  }
  get(key: string): any {
    return this.envConfig[key];
  }
}
