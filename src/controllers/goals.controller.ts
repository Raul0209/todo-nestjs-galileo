import { Controller, Get, Post, Delete, Body, Query, BadRequestException, Param } from '@nestjs/common';
import { GoalsService } from 'src/services/goals-service';

@Controller()
export class GoalsController {
  constructor(private readonly goalsService: GoalsService) {}

  @Get('getGoals')
  getGoals() {
    return this.goalsService.getGoals();
  }

  @Post('addGoal')
  addGoal(@Body() task: any) {
    if (!task || !task.title || !task.dueDate) {
      throw new BadRequestException('Faltan parámetros obligatorios: title y dueDate');
    }
    return this.goalsService.addGoal(task);
  }

  @Delete('removeGoal/:id')
  removeGoal(@Param('id') id: string) {
    return this.goalsService.removeGoal(id);
  }
}
