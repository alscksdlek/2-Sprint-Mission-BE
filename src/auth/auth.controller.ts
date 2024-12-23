import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { InputCreateUserDTO, InputSignInDTO } from './auth.dto.js';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signUp')
  async createUser(@Body() body: InputCreateUserDTO) {
    return await this.authService.createUser(body);
  }

  @Post('signIn')
  async loginUser(@Body() body: InputSignInDTO) {
    const { email, password } = body;
    const user = await this.authService.getUser(email, password);
    const accessToken = this.authService.createToken(user.id);
    const refreshToken = this.authService.createToken(user.id, 'refresh');
    await this.authService.updateUser(user.id, { refreshToken });
    return { accessToken, refreshToken };
  }

  // @Post('refresh')
  // async refreshAccessToken(req: AuthRequest, res: Response) {
  //   if (!req.auth || !req.auth.userId) {
  //     throw new Error();
  //   }
  //   const { refreshToken } = req.cookies;
  //   const { userId } = req.auth;
  //   const accessToken = await this.authService.refreshToken(userId, refreshToken);
  //   return res.json({ accessToken });
  // }
}
