import { FormActionTypes, FormState, SET_FORM_DATA } from './types';

const initialState: FormState = {
  name: '',
  number: '',
  companyName: '',
  email: '',
  selectedService: '',
  projectBudget: '',
};

const formReducer = (state = initialState, action: FormActionTypes): FormState => {
  switch (action.type) {
    case SET_FORM_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default formReducer;
