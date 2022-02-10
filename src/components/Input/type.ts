import { FormikValues } from "formik";

export default interface IInput {
  id: string;
  type?: string;
  placeholder?: string;
  invalidMessage?: string;
  value: string;
  onChange?: (value: FormikValues) => void;
}
