import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button";
import { AuthResponse, loginByEmail } from "@/lib/api/auth";
import useRequest from "@/lib/hooks/useRequest";
import { useAtom } from "jotai";
import { userAtom } from "@/store";
import { useRouter } from "next/router";
import { labelStyle } from "@/pages/auth";
import clsx from "clsx";
import Input from "../Input";
import { loginSchema } from "@/lib/schema/auth";

type LoginInputs = {
  email: string;
  password: string;
};

function Login() {
  const router = useRouter();
  const [_loginByEmail, loading, response] =
    useRequest<AuthResponse>(loginByEmail);
  const [_, setUser] = useAtom(userAtom);

  useEffect(() => {
    if (response?.access_token) {
      setUser(response);
    }
  }, [response]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginInputs>({
    resolver: yupResolver(loginSchema),
  });
  console.log(watch());
  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    await _loginByEmail(data);
    router.push("/");
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
        inputClassName="w-full h-54 px-10 py-8 rounded-full border border-btnPrimary"
        labelClassName={labelStyle}
        register={register}
        errors={errors}
      />

      <Input
        label="Password"
        type="password"
        inputKey="password"
        placeholder="Enter your password"
        inputClassName="w-full h-54 px-10 py-8 rounded-full border border-btnPrimary"
        labelClassName={clsx("mt-15", labelStyle)}
        register={register}
        errors={errors}
      />

      <div className="flex justify-between items-center mt-10">
        <label className={labelStyle}>
          <input type="checkbox" className="mr-10" />
          Remember me
        </label>
        <Button onClick={() => {}} className={clsx("text-[15px]", labelStyle)}>
          Forgot Password?
        </Button>
      </div>
      <input
        type="submit"
        value="Login"
        className="bg-btnPrimary w-full h-50 rounded-full text-white mt-20"
      />
    </form>
  );
}

export default Login;
