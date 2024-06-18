import { AuthResponse, signUpByEmail } from "@/lib/api/auth";
import useRequest from "@/lib/hooks/useRequest";
import { errorTextStyle, labelStyle } from "@/pages/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import { useAtom } from "jotai";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

type SignUpInputs = {
  email: string;
  name: string;
  password: string;
};

function SignUp() {
  const [_signUpByEmail, loading, data] =
    useRequest<AuthResponse>(signUpByEmail);

  const schema = yup
    .object({
      email: yup.string().required(),
      name: yup.string().required(),
      password: yup.string().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<SignUpInputs> = (data) => {
    console.log(data);
    _signUpByEmail(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full gap-y-8 mt-40 min-h-380"
    >
      <label className={labelStyle}>Email</label>
      <input
        {...register("email")}
        placeholder="Enter your email"
        className="w-full h-54 px-10 py-8 rounded-full border border-btnPrimary"
      />
      {errors.email && (
        <span className={errorTextStyle}>email is required</span>
      )}
      <label className={clsx("mt-20", labelStyle)}>User name</label>
      <input
        {...register("name")}
        placeholder="Enter your User name"
        className="w-full h-54 px-10 py-8 rounded-full border border-btnPrimary"
      />
      {errors.name && <span className={errorTextStyle}>Name is required</span>}
      <label className={clsx("mt-15", labelStyle)}>Password</label>
      <input
        {...register("password")}
        placeholder="Enter your password"
        type="password"
        className="w-full h-54 px-10 py-8 rounded-full border border-btnPrimary"
      />
      {errors.password && (
        <span className={errorTextStyle}>Password is required</span>
      )}
      <input
        type="submit"
        value="Sign Up"
        className="bg-btnPrimary w-full h-50 rounded-full text-white mt-20"
      />
    </form>
  );
}

export default SignUp;
