import { SET_FORM_DATA, FormActionTypes } from './types';

export const setFormData = (formData: {
  name: string;
  number: string;
  companyName: string;
  email: string;
  selectedService: string;
  projectBudget: string;
}): FormActionTypes => ({
  type: SET_FORM_DATA,
  payload: formData,
});
