import { INestApplication } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';

const mockedUser = {
  username: 'Jhon',
  email: 'jhon@gmail.com',
  password: 'jhon123',
};

describe('Auth Service', () => {
  let app: INestApplication;
  let authService: AuthService;
});
