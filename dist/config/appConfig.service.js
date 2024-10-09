"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfigService = void 0;
class AppConfigService {
    constructor() {
        this.envConfig = {};
        this.envConfig.app = {
            port: parseInt(process.env.APP_PORT, 10) || 8080,
            environment: process.env.ENVIRONMENT,
        };
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
    get(key) {
        return this.envConfig[key];
    }
}
exports.AppConfigService = AppConfigService;
//# sourceMappingURL=appConfig.service.js.map