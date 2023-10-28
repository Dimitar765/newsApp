"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchFeedsService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const prisma_service_1 = require("../prisma/prisma.service");
let FetchFeedsService = class FetchFeedsService {
    constructor(prismaService) {
        this.prismaService = prismaService;
        this.fetchInterval = 15 * 60 * 1000;
        this.uniqueItems = new Set();
        this.URL = 'https://api.rss2json.com/v1/api.json?rss_url=';
    }
    async fetchData() {
        const source = 'https://www.rt.com/rss/';
        try {
            const res = await axios_1.default.get(this.URL + source);
            return res.data;
        }
        catch (error) {
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
    async saveToDb(title, description, content, imageUrl) {
        const patern = /<.*?>/g;
        description = description.replace(patern, '').replace(/\n/g, '');
        content = content.replace(patern, '');
        try {
            await this.prismaService.article.create({
                data: {
                    title,
                    description,
                    content,
                    imageUrl,
                },
            });
        }
        catch (error) {
            console.error('Error saving data to the database:', error);
            throw error;
        }
    }
    startFetch() {
        setInterval(() => {
            this.getAndSortData();
        }, this.fetchInterval);
    }
};
exports.FetchFeedsService = FetchFeedsService;
exports.FetchFeedsService = FetchFeedsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FetchFeedsService);
//# sourceMappingURL=fetch-feeds.service.js.map