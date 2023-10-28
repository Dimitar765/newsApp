import { Controller, Get, Param } from '@nestjs/common';
import { ServeNewsService } from './serve-news.service';

@Controller('news')
export class ServeNewsController {
  constructor(private readonly news: ServeNewsService) { }

  @Get()
  getArticles() {
    return this.news.fetchDb();
  }

  @Get('/:id')
  getArticleById(@Param('id') id: number) {
    return this.news.getArticleById(id);
  }
}
