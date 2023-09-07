import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule , ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
  ConfigModule.forRoot({isGlobal : true , envFilePath : [".local.env"]}),
  TypeOrmModule.forRootAsync({
    imports : [ConfigModule],
    inject : [ConfigService],
    useFactory : (ConfigService : ConfigService) => ({
      type : "postgres",
      host : ConfigService.get("DATABASE_HOST"),
      port : ConfigService.get<number>("DATABASE_PORT"),
      username : ConfigService.get("DATABASE_USERNAME"),
      password : ConfigService.get("DATABASE_PASSWORD"),
      synchronize : ConfigService.get<boolean>("DATABASE_SYNK"),
      logging : ConfigService.get<boolean>("DATABASE_LOGGING"),
      database : ConfigService.get("DATABASE_NAME"),
entities : [__dirname + "/**/*.entity{.ts,.js}"]
}),
  }),
  UserModule,
  TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
