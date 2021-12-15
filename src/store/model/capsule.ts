import {action, thunk, computed, thunkOn, actionOn, Action, ActionOn} from "easy-peasy";
import {ISpaceXResponse} from "@/src/hooks/useCapsules";

export interface ICapsulesModel{
    favorite: ISpaceXResponse[];
    lastUpdated: string;
    setFavorite: Action<ICapsulesModel,ISpaceXResponse>,
    onSetFavorite: ActionOn<ICapsulesModel>
}

export const capsulesModel :ICapsulesModel = {
    favorite: [],
    lastUpdated: "",

    setFavorite: action((state, payload) => {
        state.favorite.push(payload)
    }),

    onSetFavorite: actionOn(
        (localActions) => localActions.setFavorite,
        (state) => {
            state.lastUpdated = new Date().toDateString();
        }
    ),
};