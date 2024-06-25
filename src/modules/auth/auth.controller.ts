import { Body, Controller, Get, HttpCode, HttpStatus, InternalServerErrorException, Post, UseGuards } from '@nestjs/common';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { authDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guard/local.guard';
import { Public } from 'src/helpers/public.decorator';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) { }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  @ApiConsumes('application/x-www-form-urlencoded')
  // @UseGuards(LocalAuthGuard)
  async loginPage(@Body() user: authDto): Promise<{ access_token: string }> {

    try {
      const { email, password } = user;
      const result = await this.authService.signIn(email, password);

      return result;
    } catch (err) {
      throw new InternalServerErrorException();
    }

  }
}
