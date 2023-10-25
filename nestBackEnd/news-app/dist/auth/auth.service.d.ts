import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';
export declare class AuthService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    signUp(dto: AuthDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        hash: string;
        firstName: string;
        lastName: string;
    } | {
        msg: string;
    }>;
    signIn(dto: AuthDto): Promise<number>;
    getUsers(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        hash: string;
        firstName: string;
        lastName: string;
    }[]>;
}
