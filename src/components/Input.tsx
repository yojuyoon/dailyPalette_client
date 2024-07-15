import React from "react";
import {
  UseFormReturn,
  DeepMap,
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";

interface InputProps<TInputValues extends FieldValues>
  extends Partial<UseFormReturn<TInputValues>> {
  inputKey: Path<TInputValues>;
  inputClassName?: string;
  labelClassName?: string;
  label?: string;
  rules?: RegisterOptions<TInputValues, Path<TInputValues>>;
  type?: "text" | "email" | "number" | "password";
  errors?: Partial<DeepMap<TInputValues, FieldError>>;
  placeholder?: string;
}

function Input<TInputValues extends FieldValues>({
  labelClassName,
  inputClassName,
  label,
  type = "text",
  errors,
  inputKey,
  ...props
}: InputProps<TInputValues>) {
  const { register, rules } = props;
  const errorMessages = errors
    ? (errors[inputKey as keyof typeof errors] as FieldError | null)
    : null;
  const hasError = !!(errors && errorMessages);

  return (
    <>
      <label className={labelClassName}>
        {label}
        <input
          {...props}
          className={inputClassName}
          type={type}
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
