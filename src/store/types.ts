// store/types.ts

export const SET_FORM_DATA = 'SET_FORM_DATA';

interface SetFormDataAction {
  type: typeof SET_FORM_DATA;
  payload: {
    name: string;
    number: string;
    companyName: string;
    email: string;
    selectedService: string;
    projectBudget: string;
  };
}

export type FormActionTypes = SetFormDataAction;

export interface FormState {
  name: string;
  number: string;
  companyName: string;
  email: string;
  selectedService: string;
  projectBudget: string;
}

export interface RootState {
  form: FormState;
}
