import { Controller, Get, Post, Delete, Body, Query } from '@nestjs/common';
import { GoalsService } from 'src/services/goals-service';

@Controller()
export class GoalsController {
  constructor(private readonly goalsService: GoalsService) {}

  @Get('getGoals')
  getTasks() {
    return this.goalsService.getGoal();
  }

  @Post('addGoal')
  addTask(@Body() task: any) {
    return this.goalsService.addGoal(task);
  }

  @Delete('removeGoal')
  removeTask(@Query('id') id: string) {
    return this.goalsService.removeGoal(Number(id));
  }
}
