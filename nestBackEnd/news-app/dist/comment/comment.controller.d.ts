import { CommentService } from './comment.service';
import { CommentDto } from './dto/comment.dto';
export declare class CommentController {
    private readonly commetService;
    constructor(commetService: CommentService);
    postComment(dto: CommentDto): Promise<void>;
}
