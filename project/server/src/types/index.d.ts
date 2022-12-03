import { User } from 'src/entities/user.entity';

declare global {
  namespace Nest {
    interface Request {
      user?: Record<User>
    }
  }
}