import { Controller, Post, UseGuards, Request, Body } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { UserEntity } from '../users/entities/user.entity';
import { LocalAuthGuard } from './guards/local.guard';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('signIn')
  @ApiBody({ type: CreateUserDto })
  async login(@Request() req) {
    return this.authService.signIn(req.user as UserEntity);
  }

  @Post('/signUp')
  register(@Body() dto: CreateUserDto) {
    return this.authService.signUp(dto);
  }
}
