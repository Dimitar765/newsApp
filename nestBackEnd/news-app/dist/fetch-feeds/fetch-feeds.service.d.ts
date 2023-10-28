import { PrismaService } from 'src/prisma/prisma.service';
export declare class FetchFeedsService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    private readonly fetchInterval;
    private readonly uniqueItems;
    URL: string;
    fetchData(): Promise<any>;
    getAndSortData(): Promise<void>;
    saveToDb(title: string, description: string, content: string, imageUrl: string): Promise<void>;
    startFetch(): void;
}
