import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  displayName: Yup.string(),
  photoURL: Yup.string(),
  password: Yup.string()
    .min(6, "Password is too short - should be 6 chars minimum")
    .max(16, "Password is too long - should be 16 chars maximum")
    .matches(
      /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/g,
      "Password should match (A-z, 0-9)"
    ),
});

export default validationSchema;
