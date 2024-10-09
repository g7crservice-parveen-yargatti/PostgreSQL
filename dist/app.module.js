"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const config_1 = require("@nestjs/config");
const user_model_1 = require("./user/user.model");
const user_service_1 = require("./user/user.service");
const user_controller_1 = require("./user/user.controller");
const appConfig_service_1 = require("./config/appConfig.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env.dev',
            }),
            sequelize_1.SequelizeModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    dialect: 'postgres',
                    host: configService.get('POSTGRES_HOST'),
                    port: parseInt(configService.get('POSTGRES_PORT'), 10),
                    username: configService.get('POSTGRES_USERNAME'),
                    password: configService.get('POSTGRES_PASSWORD'),
                    database: configService.get('POSTGRES_DATABASE'),
                    autoLoadModels: true,
                    synchronize: true,
                }),
            }),
            sequelize_1.SequelizeModule.forFeature([user_model_1.User]),
        ],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService, appConfig_service_1.AppConfigService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map