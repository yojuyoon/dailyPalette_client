import React from "react";
import {
  ValidationRule,
  UseFormReturn,
  DeepMap,
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";

interface InputProps<TFormValues extends FieldValues>
  extends Partial<UseFormReturn<TFormValues>> {
  inputKey: Path<TFormValues>;
  inputClassName?: string;
  labelClassName?: string;
  label?: string;
  rules?: RegisterOptions<TFormValues, Path<TFormValues>>;
  type?: "text" | "email" | "number" | "password";
  errors?: Partial<DeepMap<TFormValues, FieldError>>;
  placeholder?: string;
}

function Input<TFormValues extends FieldValues>({
  labelClassName,
  inputClassName,
  label,
  type = "text",
  errors,
  inputKey,
  ...props
}: InputProps<TFormValues>) {
  const { register, rules, ...inputProps } = props;
  const errorMessages = errors
    ? (errors[inputKey as keyof typeof errors] as FieldError | undefined)
    : undefined;
  const hasError = !!(errors && errorMessages);

  return (
    <>
      <label className={labelClassName}>
        {label}
        <input
          {...props}
          className={inputClassName}
          type={type}
          {...inputProps}
          {...(register && register(inputKey, rules))}
        />
      </label>
      {hasError && (
        <p className={errorTextStyle}>
          {hasError && <p>{errorMessages?.message}</p>}
        </p>
      )}
    </>
  );
}

export default Input;

export const errorTextStyle = "text-error";
