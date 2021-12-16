import {action, thunk, computed, thunkOn, actionOn, Action, ActionOn} from "easy-peasy";
import {ISpaceXResponse} from "@/src/hooks/useCapsules";

export interface ICapsulesModel{
    favorites: ISpaceXResponse[];
    lastUpdated: string;
    setFavorite: Action<ICapsulesModel,ISpaceXResponse>,
    onSetFavorite: ActionOn<ICapsulesModel>
}

export const capsulesModel :ICapsulesModel = {
    favorites: [],
    lastUpdated: "",

    setFavorite: action((state, payload) => {
        state.favorites.push(payload)
    }),

    onSetFavorite: actionOn(
        (localActions) => localActions.setFavorite,
        (state) => {
            state.lastUpdated = new Date().toDateString();
        }
    ),
};