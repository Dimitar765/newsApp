import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class FetchFeedsService {
  constructor(private readonly prismaService: PrismaService) { }
  private readonly fetchInterval = 15 * 60 * 1000;
  private readonly uniqueItems: Set<string> = new Set<string>();

  URL = 'https://api.rss2json.com/v1/api.json?rss_url=';
  async fetchData() {
    const source = 'https://www.rt.com/rss/';
    try {
      const res = await axios.get(this.URL + source);
      // console.log(res.data);
      return res.data;
    } catch (error) {
      console.log('error fetching data', error);
    }
  }

  async getAndSortData() {
    const data = await this.fetchData();

    for (const element of data.items) {
      const title = element.title;
      console.log(title);
      const description = element.description;
      const content = element.content;
      const imageUrl = element.enclosure.link;

      await this.saveToDb(title, description, content, imageUrl);

      this.uniqueItems.add(title);
    }
  }

  async saveToDb(
    title: string,
    description: string,
    content: string,
    imageUrl: string,
  ) {
    const patern = /<.*?>/g;
    description = description.replace(patern, '').replace(/\n/g, '');
    content = content.replace(patern, ''); //.replace(/\n/g, '');

    try {
      await this.prismaService.article.create({
        data: {
          title,
          description,
          content,
          imageUrl,
        },
      });
    } catch (error) {
      console.error('Error saving data to the database:', error);
      throw error;
    }
  }

  startFetch() {
    setInterval(() => {
      this.getAndSortData();
    }, this.fetchInterval);
  }
}
