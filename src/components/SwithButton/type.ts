export default interface ISwitchButton {
  isToggled: boolean;
  toggle: () => void;
  label?: string;
}
