import { Document } from "mongoose";

export interface ICat extends Document {
    name: string;
    breed: string;
    description: string;
    kidsFriendly: boolean;
    apartmentFriendly: boolean;
    lifeSpan: number;
    age: number;
    energyLevel: string;
    image: string;
    weight: number;
    color: string;
    createdAt?: Date;
    updatedAt?: Date;
}