import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigService } from './config/appConfig.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule),
    configObj = app.get(AppConfigService),
    appConfig = configObj.get('app'),
    { port } = appConfig;

  try {
    await app.listen(port, () => {
      console.log('Server running');
    });
  } catch (err) {
    console.error('Unable to connect to the database:', err);
    process.exit(1);
  }
}

bootstrap();
