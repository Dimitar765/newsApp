import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ServeNewsService {
  constructor(private readonly prismaService: PrismaService) { }

  async fetchDb() {
    return await this.prismaService.article.findMany({
      orderBy: {
        id: 'desc',
      },
    });
  }

  async getArticleById(id: number) {
    return await this.prismaService.article.findFirst({
      where: {
        id: +id,
      },
    });
  }
}
