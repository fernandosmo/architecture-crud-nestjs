import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  birthdate: Date;

  @Prop()
  avatarUrl?: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: new Date() })
  createdAt: Date;

  @Prop()
  updatedAt?: Date | null;
}

export const UserSchema = SchemaFactory.createForClass(User);
