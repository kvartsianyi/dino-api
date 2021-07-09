import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findUsers(): void {
  }

  @Get(':id')
  findUser(): void {
  }

  @Post()
  createUser(): void {

  }

  @Patch(':id')
  updateUser(): void {

  }

  @Delete(':id')
  deleteUser(): void {

  }
}
