import { Body, Controller, Post } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentDto } from './dto/comment.dto';

@Controller()
export class CommentController {
  constructor(private readonly commetService: CommentService) { }

  @Post('/news/:id/comments')
  postComment(@Body() dto: CommentDto) {
    return this.commetService.postComment(dto);
  }
}
