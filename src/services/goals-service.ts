import { Injectable } from '@nestjs/common';

@Injectable()
export class GoalsService {
  private goals: any = [];

  getGoal() {
    return this.goals;
  }

  addGoal(task:any) {
    this.goals.push(task);
    return { message: 'Meta agregada' };
  }

  removeGoal(id: number) {
    this.goals = this.goals.filter((_, index) => index !== id);
    return { message: 'Meta eliminada' };
  }
}
