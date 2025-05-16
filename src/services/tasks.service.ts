import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks: any = [];

  getTasks() {
    return this.tasks;
  }

  addTask(task:any) {
    this.tasks.push(task);
    return { message: 'Tarea agregada' };
  }

  removeTask(id: number) {
    this.tasks = this.tasks.filter((_, index) => index !== id);
    return { message: 'Tarea eliminada' };
  }
}
