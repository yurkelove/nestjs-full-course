import { Injectable } from '@nestjs/common';

@Injectable()
export class MovieTestService {
  async test() {
    return { message: 'Hello' };
  }
}
