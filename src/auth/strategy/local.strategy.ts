import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable , UnauthorizedException} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/entities/user.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private userService: UserService) {
        super({ 
            usernameField : 'email',
            passwordField: 'password',
         });
    }
    async validate(email: string, password: string): Promise<User> {
        const user = await this.userService.findUserByEmail(email);
        if (user && await bcrypt.compare(password, user.password)) {
            return user;
        } else {
            throw new UnauthorizedException('Invalid email or password.');
        }
    }

}