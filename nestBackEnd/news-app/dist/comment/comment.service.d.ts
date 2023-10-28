import { PrismaService } from 'src/prisma/prisma.service';
import { CommentDto } from './dto/comment.dto';
export declare class CommentService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    postComment(dto: CommentDto): Promise<void>;
}
