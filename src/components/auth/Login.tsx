import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../Button";
import { AuthResponse, loginByEmail } from "@/lib/api/auth";
import useRequest from "@/lib/hooks/useRequest";
import { useAtom } from "jotai";
import { userAtom } from "@/store";
import { useRouter } from "next/router";
import { errorTextStyle, labelStyle } from "@/pages/auth";
import clsx from "clsx";

type LoginInputs = {
  email: string;
  password: string;
};

function Login() {
  const router = useRouter();
  const [_loginByEmail, loading, response] =
    useRequest<AuthResponse>(loginByEmail);
  const [user, setUser] = useAtom(userAtom);

  useEffect(() => {
    if (response?.token) {
      setUser(response);
    }
  }, [response]);

  const schema = yup
    .object({
      email: yup.string().required(),
      password: yup.string().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    await _loginByEmail(data);
    router.push("/");
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
        <span className={errorTextStyle}>Email is required</span>
      )}

      <label className={clsx("mt-20", labelStyle)}>Password</label>
      <input
        {...register("password")}
        type="password"
        placeholder="Enter your password"
        className="w-full h-54 px-10 py-8 rounded-full border border-btnPrimary"
      />
      {errors.password && (
        <span className={errorTextStyle}>Password is required</span>
      )}
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
