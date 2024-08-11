import { UserRepository } from '../../../repositories/UserRepository';
import bcrypt from 'bcryptjs';

export class AuthValidationService {
  static userRepository: UserRepository;

  static async validateCredentials(email: string, password: string): Promise<void> {
    const user = await this.userRepository.findByEmail(email);
    let isPasswordValid = false;
    if(user){
      isPasswordValid = await bcrypt.compare(password, user.password);
    }
    if (!user || !isPasswordValid) {
      throw new Error('Invalid email or password');
    }
  }
}
