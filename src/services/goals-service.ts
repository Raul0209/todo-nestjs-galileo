import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Goal } from 'src/schemas/goals.schema';

@Injectable()
export class GoalsService {
  constructor(@InjectModel(Goal.name) private goalModel: Model<Goal>) { }

  async getGoals() {
    return this.goalModel.find().exec();
  }

  async addGoal(goal: { title: string; dueDate: string }) {
    const newGoal = new this.goalModel(goal);
    return newGoal.save();
  }

  async removeGoal(id: string) {
    const toDelete = await this.goalModel.findById(id).exec();
    if (!toDelete) {
      throw new NotFoundException(`No se encontró la meta con id: ${id}`);
    }
    await this.goalModel.findByIdAndDelete(toDelete._id)

    return { message: 'Meta eliminada correctamente' };
  }
}
