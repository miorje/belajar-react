import {action, createStore} from "easy-peasy";
import {capsulesModel as capsules, ICapsulesModel} from "@/src/store/model/capsule";

export interface IStoreModel{
    capsules: ICapsulesModel;
}

export const store = createStore<IStoreModel>({capsules})