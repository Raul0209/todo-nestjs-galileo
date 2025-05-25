import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AuthMiddleware } from './middleware/auth.middleware';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './modules/tasks.module';
import { GoalsModule } from './modules/goals.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/todo-list'),
    TasksModule,
    GoalsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
    configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*');
  }

}