/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategy/local.startegy';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
  imports: [PassportModule, UserModule,
    JwtModule.register({
    signOptions:{expiresIn:'1h'},
    secret:"secret",//process.env.JWT_SECRET
  })],
  providers: [AuthService, AuthResolver, LocalStrategy,JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
