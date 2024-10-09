import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UserService {
  async fetchUsers() {
    try {
      console.log('Fetching users...');
      const users = await User.findAll({
        attributes: ['useName'],
      });

      return users;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }
}
