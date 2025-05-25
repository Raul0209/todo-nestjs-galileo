import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type GoalDocument = HydratedDocument<Goal>;

@Schema()
export class Goal {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  dueDate: string;
}

export const GoalSchema = SchemaFactory.createForClass(Goal);
