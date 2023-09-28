import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRespository } from '../../user/repositories';
import { UserService } from '../..//user/services';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userRespository: UserRespository,
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  findAll() {
    return this.userRespository.findAll();
  }

  async create(user: any) {
    const data = await this.userService.createUser(user);
    return data;
  }

  async login(user: any) {
    const userValidate = await this.userService.login(user);
    if (!userValidate) {
      throw new UnauthorizedException();
    }
    const {id, email } = userValidate
    const payload = { id, email };
    const token = await this.jwtService.signAsync(payload);
    return {...userValidate, token};
  }
}
