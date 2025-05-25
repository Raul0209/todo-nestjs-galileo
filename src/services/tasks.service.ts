import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from 'src/schemas/tasks.schema';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  async getTasks() {
    return this.taskModel.find().exec();
  }

  async addTask(task: { title: string; dueDate: string }) {
    const newTask = new this.taskModel(task);
    return newTask.save();
  }

  async removeTask(id: string) {
  const deleted = await this.taskModel.findByIdAndDelete(id).exec();
  if (!deleted) {
    throw new NotFoundException(`No se encontró la meta con id: ${id}`);
  }
  return { message: 'Tarea eliminada correctamente' };
  }
}
