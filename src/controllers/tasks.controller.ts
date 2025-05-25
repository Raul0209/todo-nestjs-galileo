import { Controller, Get, Post, Delete, Body, Query, BadRequestException } from '@nestjs/common';
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

  @Delete('removeTask')
  removeTask(@Query('id') id: string) {
    const index = Number(id);
    if (isNaN(index)) {
      throw new BadRequestException('El parámetro id debe ser un número');
    }
    return this.tasksService.removeTask(index);
  }
}
