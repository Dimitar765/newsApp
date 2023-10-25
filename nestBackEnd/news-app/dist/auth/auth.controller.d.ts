import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    findAll(): string;
    findOne(id: string): string;
}
