import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  password: string;
  @IsString()
  @IsOptional()
  firstName?: string;
  @IsString() //mora da se stavi IsString inaku ne zapisuva vo baza
  @IsOptional()
  lastName?: string;
}
