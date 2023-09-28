import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from '../services';
import { createUserDto } from '../dtos';
import { AuthGuard } from '../guard/auth.guard';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ){}
    @Post("/register")
    async register(@Body() user: createUserDto) {
        return this.authService.create(user)
    }

    @Post("/login")
    async login(@Body() user: createUserDto) {
        return this.authService.login(user)
    }

    @UseGuards(AuthGuard)
    @Get("/allusers")
    async findAll() {
        return this.authService.findAll()
    }
}
