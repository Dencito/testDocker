import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities';
import { Repository } from 'typeorm';

@Injectable()
export class UserRespository {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findOneById(id: number) {
    const criterialOptions = {
      where: { id },
    };
    return this.usersRepository.findOne(criterialOptions);
  }

  async findOneByEmail(email) {
    const criterialOptions = {
      where: { email },
    };
    const data = await this.usersRepository.findOne(criterialOptions);
    return data;
  }

  findAll() {
    return this.usersRepository.find();
  }

  async createUser(user: any) {
    const userFound: any = await this.findOneByEmail(user.email);
    if (userFound) {
      throw new HttpException(
        { message: 'El correo ya existe', error: '1' },
        404,
      );
    }
    const data = await this.usersRepository.insert(user);
    return this.findOneById(data.identifiers[0].id);
  }

  async login(user: any) {
    return this.findOneByEmail(user.email);
  }
}
