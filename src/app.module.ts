import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosModule } from './todos/todo.module'; // Check this path
import { UsersModule } from './users/users.module'; // Check this path
import { Todo } from './todos/todo.entity';
import { User } from './users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'new_password',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
      entities:[User,Todo],
    }),
    TodosModule,
    UsersModule,
  ],
})
export class AppModule {}
