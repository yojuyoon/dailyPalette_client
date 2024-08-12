import { AuthResponse, signUpByEmail } from "@/lib/api/auth";
import useRequest from "@/lib/hooks/useRequest";
import { labelStyle } from "@/pages/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import Input from "../Input";
import { signUpschema } from "@/lib/schema/auth";
import Button from "../Button";

type SignUpInputs = {
  email: string;
  name: string;
  password: string;
};

function SignUp() {
  const [_signUpByEmail, loading, data] =
    useRequest<AuthResponse>(signUpByEmail);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInputs>({
    resolver: yupResolver(signUpschema),
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
      <Input
        label="Email"
        inputKey="email"
        placeholder="Enter your email"
        inputClassName="w-full h-54 px-16 py-8 rounded-full border border-btnPrimary"
        labelClassName={labelStyle}
        register={register}
        errors={errors}
      />
      <Input
        label="User name"
        inputKey="name"
        placeholder="Enter your User name"
        inputClassName="w-full h-54 px-16 py-8 rounded-full border border-btnPrimary"
        labelClassName={clsx("mt-20", labelStyle)}
        register={register}
        errors={errors}
      />
      <Input
        label="Password"
        type="password"
        inputKey="password"
        placeholder="Enter your password"
        inputClassName="w-full h-54 px-16 py-8 rounded-full border border-btnPrimary"
        labelClassName={clsx("mt-15", labelStyle)}
        register={register}
        errors={errors}
      />
      <Button
        type="submit"
        className="bg-btnPrimary w-full h-50 rounded-full text-white mt-20"
      >
        Sign Up
      </Button>
    </form>
  );
}

export default SignUp;
