import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { FetchFeedsModule } from './fetch-feeds/fetch-feeds.module';

@Module({
  imports: [
    AuthModule,
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    FetchFeedsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
