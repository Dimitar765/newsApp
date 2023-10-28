import { Module } from '@nestjs/common';
import { ServeNewsService } from './serve-news.service';
import { ServeNewsController } from './serve-news.controller';

@Module({
  providers: [ServeNewsService],
  controllers: [ServeNewsController]
})
export class ServeNewsModule {}
