import mongoose, { Schema } from "mongoose";
import type { ICat } from "../types/cats.types.ts";

const catSchema = new Schema<ICat>(
  {
    name: {
      type: String,
      required: true,
    },
    breed: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    kidsFriendly: {
      type: Boolean,
      required: true,
      default: true,
    },
    apartmentFriendly: {
      type: Boolean,
      required: true,
      default: true,
    },
    lifeSpan: {
      type: Number,
      required: true,
    },
    age: {
      type: Number,
      required: true,
      default: 1,
    },
    energyLevel: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const CatModel = mongoose.model<ICat>("Cat", catSchema);

export default CatModel;