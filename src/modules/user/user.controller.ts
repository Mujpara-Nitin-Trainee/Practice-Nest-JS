import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiConsumes, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { addressUser, UserDto } from './dto/user.dto';
import * as bcrypt from "bcrypt";
import * as argon2 from "argon2";
import { userAddresses } from './dto/address.dto';
import { SearchTimerInterceptor } from 'src/helpers/searchTimer';
import { AuthGuard } from '../auth/guard/auth.guard';

@ApiTags('Users')
@ApiSecurity('JWT-auth')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) { }

  @Get('userList')
  @UseGuards(AuthGuard)
  async getAll() {
    return this.userService.findAll();
  }

  @Post('register')
  @ApiConsumes('application/x-www-form-urlencoded')
  async create(@Body() users: UserDto) {
    const salt = bcrypt.genSaltSync(4);
    users.password = await argon2.hash(users.password + salt);
    const payload = { ...users, salt };
    return this.userService.create(payload);
  }

  @Post('completeRegister')
  @ApiConsumes('application/x-www-form-urlencoded')
  async createUserAddress(@Body() userDetails: userAddresses) {
    const { name, email, mobileNo, dob, address } = userDetails;
    let password = userDetails.password;

    const salt = bcrypt.genSaltSync(4);
    password = await argon2.hash(password + salt);

    return this.userService.userAddress({ name, email, mobileNo, dob, salt, password, address });

  }

  @Post('UserWithAddressId')
  @ApiConsumes('application/x-www-form-urlencoded')
  async registerUserAddress(@Body() userDetails: addressUser) {
    return this.userService.registerUserAddress(userDetails);
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  async findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  @ApiConsumes('application/x-www-form-urlencoded')
  async update(@Param('id') id: string, @Body() updateUserDto: UserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  async removeUser(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

  @UseInterceptors(SearchTimerInterceptor)
  @Get('userList/:userName')
  @UseGuards(AuthGuard)
  async searchUser(@Param('userName') name: string) {
    return this.userService.findUserByName(name);
  }
}
