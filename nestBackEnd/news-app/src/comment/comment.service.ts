import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CommentDto } from './dto/comment.dto';

@Injectable()
export class CommentService {
  constructor(private readonly prismaService: PrismaService) { }

  async postComment(dto: CommentDto) {
    try {
      await this.prismaService.comment.create({
        data: {
          article: { connect: { id: +dto.id } },
          comment: dto.comment,
        },
      });
    } catch (error) {
      console.log('ups something went wrong', error);
      throw error;
    }
  }
}
