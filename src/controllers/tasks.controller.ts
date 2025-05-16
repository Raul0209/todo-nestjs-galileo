import { Controller, Get, Post, Delete, Body, Query } from '@nestjs/common';
import { TasksService } from 'src/services/tasks.service';

@Controller()
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get('getTasks')
  getTasks() {
    return this.tasksService.getTasks();
  }

  @Post('addTask')
  addTask(@Body() task: any) {
    return this.tasksService.addTask(task);
  }

  @Delete('removeTask')
  removeTask(@Query('id') id: string) {
    return this.tasksService.removeTask(Number(id));
  }
}
