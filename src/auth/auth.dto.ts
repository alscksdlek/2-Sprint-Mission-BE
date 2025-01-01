import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class InputCreateUserDTO {
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  nickname: string;

  @IsOptional()
  @IsString()
  image: string;
}

export class InputSignInDTO {
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
