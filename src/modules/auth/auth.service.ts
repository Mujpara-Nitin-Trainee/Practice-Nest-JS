import { Injectable, InternalServerErrorException, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "../user/user.service";
import * as argon2 from "argon2";
@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService) { }

  async signIn(email: string, password: string): Promise<{ access_token: string }> {
    try {

      const result = await this.userService.findUser(email);

      if (argon2.verify(result.password, password + result.salt)) {

        const payload = { user: result };

        return { access_token: await this.jwtService.signAsync(payload) }

      } else {
        console.log("Inside AuthServices");
        throw new UnauthorizedException();
      }

    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

}