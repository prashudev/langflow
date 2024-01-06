import { FlowType } from "../../flow";
import { FlowState, FlowsState } from "../../tabs";

export type FlowsManagerStoreType = {
  flows: Array<FlowType>;
  currentFlow: FlowType | undefined;
  currentFlowId: string;
  setCurrentFlowId: (currentFlowId: string) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  flowsState: FlowsState;
  currentFlowState: FlowState | undefined;
  setCurrentFlowState: (state: FlowState | ((oldState: FlowState | undefined) => FlowState)) => void;
};