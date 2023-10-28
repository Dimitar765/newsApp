import { Module } from '@nestjs/common';
import { FetchFeedsService } from './fetch-feeds.service';
import { FetchFeedsController } from './fetch-feeds.controller';

@Module({
  providers: [FetchFeedsService],
  controllers: [FetchFeedsController]
})
export class FetchFeedsModule {}
