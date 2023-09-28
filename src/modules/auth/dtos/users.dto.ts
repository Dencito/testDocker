import { IsString, IsEmail, IsEmpty } from 'class-validator';

export class createUserDto {
  @IsEmail()
  @IsEmpty()
  @IsString()
  email: string;

  @IsEmpty()
  @IsString()
  password: string;
}