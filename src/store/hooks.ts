import {createTypedHooks} from "easy-peasy";
import {IStoreModel} from "@/src/store/index";

const {useStoreActions, useStoreState, useStoreDispatch, useStore} = createTypedHooks<IStoreModel>();

export default {
    useStoreActions,
    useStore,
    useStoreDispatch,
    useStoreState
}