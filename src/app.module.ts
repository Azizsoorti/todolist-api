import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule , ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { TodoModule } from './todo/todo.module';
import { AuthModule } from './auth/auth.module';

// FIND ALL USERS
// ADD USER
// DELETE USER


// ADD TODO BASED ON USER ID
// FIND ALL BASED ON USER ID (NOT COMPLETED)
// FIND ALL COMPLETED TODOS BASED ON USER ID (COMPLETED)
// MARK TODO AS COMPLETED BASED ON TODO ID
//DELETE TODO BASED ON TODO ID
@Module({

  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'todorole',
      password: '9492',
      database: 'tododb',
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true,
      logging: true
  
    }),
  
  UserModule,
  TodoModule,
  AuthModule
  ],


//   imports: [
//   ConfigModule.forRoot({isGlobal : true , envFilePath : [".local.env"]}),
//   TypeOrmModule.forRootAsync({
//     imports : [ConfigModule],
//     inject : [ConfigService],
//     useFactory : (ConfigService : ConfigService) => ({
//       type : "postgres",
//       host : ConfigService.get("DATABASE_HOST"),
//       port : ConfigService.get<number>("DATABASE_PORT"),
//       username : ConfigService.get("DATABASE_USERNAME"),
//       password : ConfigService.get("DATABASE_PASSWORD"),
//       synchronize : ConfigService.get<boolean>("DATABASE_SYNK"),
//       logging : ConfigService.get<boolean>("DATABASE_LOGGING"),
//       database : ConfigService.get("DATABASE_NAME"),
// entities : [__dirname + "/**/*.entity{.ts,.js}"]
// }),
//   }),
//   UserModule,
//   TodoModule,
// AuthModule
//   ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
