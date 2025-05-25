import { Controller, Get, Post, Delete, Body, Query, BadRequestException, Param } from '@nestjs/common';
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
    if (!task || !task.title || !task.dueDate) {
      throw new BadRequestException('Faltan parámetros obligatorios: title y dueDate');
    }
    return this.tasksService.addTask(task);
  }

  @Delete('removeTask/:id')
  removeTask(@Param('id') id: string) {
    return this.tasksService.removeTask(id);
  }
}
