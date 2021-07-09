import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('login')
  login(): void {
  }

  @Post('registration')
  registration(): void {

  }
}

