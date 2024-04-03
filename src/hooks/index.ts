import { DispatchType, RootStateType } from "./../store/store";
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";

type DispatchFn = () => DispatchType;

export const useCustomDispatch: DispatchFn = useDispatch;
export const useCustomSelector: TypedUseSelectorHook<RootStateType> =
  useSelector;
