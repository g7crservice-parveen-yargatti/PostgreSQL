"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const appConfig_service_1 = require("./config/appConfig.service");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule), configObj = app.get(appConfig_service_1.AppConfigService), appConfig = configObj.get('app'), { port } = appConfig;
    try {
        await app.listen(port, () => {
            console.log('Server running');
        });
    }
    catch (err) {
        console.error('Unable to connect to the database:', err);
        process.exit(1);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map