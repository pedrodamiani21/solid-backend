import jwt from 'jsonwebtoken';
import { UserRepository } from '../../../repositories/UserRepository';
import { AuthValidationService } from './AuthUserValidationService';
import authConfig from "../../../config/auth";
interface AuthUserRequest {
  email: string;
  password: string;
  companyId: number;
}

type AuthUserResponse = { token: string };

export class AuthUserUseCase {
  private secretKey = authConfig.secret;

  constructor(private userRepository: UserRepository) {
    AuthValidationService.userRepository = userRepository;
  }

  async execute({ email, password }: AuthUserRequest): Promise<AuthUserResponse> {
    await AuthValidationService.validateCredentials(email, password);
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new Error('Authentication failed');
    }


    const token = jwt.sign({ id: user.id, email: user.email, companyId: user.companyId }, this.secretKey, { expiresIn: '24h' });
    return { token };
  }
}
