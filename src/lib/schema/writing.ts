import * as yup from "yup";

export const writingSchema = yup.object({
  title: yup.string().required(),
  content: yup.string(),
  date: yup.date().required(),
});
