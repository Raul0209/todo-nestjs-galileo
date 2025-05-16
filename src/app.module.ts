import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthMiddleware } from './middleware/auth.middleware';
import { TasksController } from './controllers/tasks.controller';
import { TasksService } from './services/tasks.service';
import { GoalsController } from './controllers/goals.controller';
import { GoalsService } from './services/goals-service';

@Module({
  imports: [],
  controllers: [AppController, TasksController, GoalsController],
  providers: [AppService, TasksService, GoalsService],
})
export class AppModule {

    configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*');
  }

}
