import { HttpException, Injectable } from '@nestjs/common';
import { UserRespository } from '../repositories/user.respository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private userRespository: UserRespository) {}

  findAll() {
    return this.userRespository.findAll();
  }

  async createUser(user) {
    console.log(user);
    const saltOrRounds = 10;
    const hash: string = await bcrypt.hash(user.password, saltOrRounds);
    user.password = hash;
    const data = await this.userRespository.createUser(user);
    console.log(data, 'auth repository.----------------');
    return data;
  }

  async login(user: any) {
    const userFound: any = await this.userRespository.findOneByEmail(
      user.email,
    );
    console.log(userFound)
    if (!userFound) {
      throw new HttpException(
        { message: 'El correo no existe', error: '2' },
        404,
      );
    }
    const matchPassword = await bcrypt.compare(
      user.password,
      userFound.password,
    );
    if (!matchPassword) {
      throw new HttpException(
        { message: 'La contraseña no coincide', error: '3' },
        409,
      );
    }
    const {id, email} = userFound
    return {id, email}
  }
}
