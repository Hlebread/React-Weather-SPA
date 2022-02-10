export default interface IButton {
  label: string;
  type?: "button" | "submit" | "reset" | undefined;
  isDisabled?: boolean;
}
