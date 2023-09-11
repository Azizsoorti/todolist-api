import { Strategy , ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable , UnauthorizedException} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/entities/user.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private userService: UserService) {
        super({ 
           jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken,
           ignoreExpiration : false,
           secretOrKey: 'THE_SECRET_KEY'
         });
    }
    async validate(payload :any){
     return {
        userId : payload.userId,
    firstName : payload.firstName,
    lastName : payload.lastName,
    email : payload.email,
    role : payload.role,
     }
    }

}