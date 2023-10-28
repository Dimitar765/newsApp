import { IsNotEmpty, IsString } from 'class-validator';

export class CommentDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  @IsString()
  comment: string;
}
