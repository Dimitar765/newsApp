import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { FetchFeedsModule } from './fetch-feeds/fetch-feeds.module';
import { FetchFeedsService } from './fetch-feeds/fetch-feeds.service';
import { ServeNewsModule } from './serve-news/serve-news.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [
    AuthModule,
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    FetchFeedsModule,
    ServeNewsModule,
    CommentModule,
  ],
  controllers: [],
  providers: [FetchFeedsService],
})
export class AppModule {
  constructor(private readonly getData: FetchFeedsService) {
    this.getData.startFetch();
  }
}
