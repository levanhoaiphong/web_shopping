import { Body, Controller, Get, HttpException, InternalServerErrorException, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("/login")
  async loginCustomer (@Body() body) {
    try {
      return this.authService.loginCustomer(body)
    } catch (exception) {
      if (exception.status != 500)
        throw new HttpException(exception.response, exception.status)

      throw new InternalServerErrorException("Internal Server Error ")
    }
  }

  @Post("/register")
  async registerCustomer(@Body() body) {
    try {
      return this.authService.registerCustomer(body)
    } catch (exception) {
      if (exception.status != 500)
        throw new HttpException(exception.response, exception.status)

      throw new InternalServerErrorException("Internal Server Error ")
    }
  }
  
}
