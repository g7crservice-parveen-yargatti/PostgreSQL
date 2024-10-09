import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from './user/user.model';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { AppConfigService } from './config/appConfig.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env.dev',
    }),

    SequelizeModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        dialect: 'postgres',
        host: configService.get<string>('POSTGRES_HOST'),
        port: parseInt(configService.get<string>('POSTGRES_PORT'), 10),
        username: configService.get<string>('POSTGRES_USERNAME'),
        password: configService.get<string>('POSTGRES_PASSWORD'),
        database: configService.get<string>('POSTGRES_DATABASE'),
        autoLoadModels: true,
        synchronize: true,
      }),
    }),

    SequelizeModule.forFeature([User]),
  ],
  controllers: [UserController],
  providers: [UserService, AppConfigService],
})
export class AppModule {}
