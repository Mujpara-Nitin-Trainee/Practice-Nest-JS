import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { permissionMaster } from './entities/permission.entity';
import { roleMaster } from './entities/role.entity';
import { UserModule } from 'src/modules/user/user.module';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../../constant';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([roleMaster, permissionMaster]), UserModule, PassportModule.register({ defaultStrategy: 'jwt' }), JwtModule.register({ global: true, secret: jwtConstants.secret, signOptions: { expiresIn: '2h' } })],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule { }
