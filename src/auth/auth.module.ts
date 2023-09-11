import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { LocalStrategy } from './strategy/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/jwt.strategy';
@Module({
  imports : [ PassportModule,
              UserModule,
              JwtModule.register({
        secret: 'THE_SECRET_KEY', 
        signOptions: { expiresIn: '60m' },
    }),
],
  controllers: [],
  providers: [LocalStrategy, JwtStrategy]
})
export class AuthModule {}

