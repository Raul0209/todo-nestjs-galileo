import { Controller, Get, Post, Delete, Body, Query, BadRequestException } from '@nestjs/common';
import { GoalsService } from 'src/services/goals-service';

@Controller()
export class GoalsController {
  constructor(private readonly goalsService: GoalsService) {}

  @Get('getGoals')
  getTasks() {
    return this.goalsService.getGoal();
  }

  @Post('addTask')
  addTask(@Body() task: any) {
    if (!task || !task.title || !task.dueDate) {
      throw new BadRequestException('Faltan parámetros obligatorios: title y dueDate');
    }
    return this.goalsService.addGoal(task);
  }

  @Delete('removeGoal')
  removeGoal(@Query('id') id: string) {
    const index = Number(id);
    if (isNaN(index)) {
      throw new BadRequestException('El parámetro id debe ser un número');
    }
    return this.goalsService.removeGoal(index);
  }
}
