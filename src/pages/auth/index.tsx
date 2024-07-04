import Button from "@/components/Button";
import Nav from "@/components/Nav";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import React, { Fragment, useState } from "react";
import SignUp from "@/components/auth/SignUp";
import Login from "@/components/auth/Login";

function Auth() {
  const [selectedType, setSelectedType] = useState("login");

  return (
    <Fragment>
      <Nav />
      <div className="px-20 py-30 font-questrial h-100svh flex items-center justify-center">
        <div className="rounded-3xl flex flex-col items-center justify-center px-30 mt-30">
          <h3 className="text-[18px] text-center">Welcome :{")"}</h3>
          <div className="bg-[#FFFBF7] p-10 rounded-full flex justify-between gap-20 mt-20 relative">
            <Button
              onClick={() => setSelectedType("login")}
              className={clsx("py-6 px-20 rounded-[4px]")}
            >
              <>
                <div
                  className={clsx(
                    "z-10 w-63 md:w-70",
                    selectedType === "login" ? "text-white" : "text-darkGray"
                  )}
                >
                  Login
                </div>
              </>
            </Button>
            <Button
              onClick={() => setSelectedType("signUp")}
              className={clsx("py-6 px-20 rounded-[4px]")}
            >
              <>
                <div
                  className={clsx(
                    "z-10 w-63 md:w-70",
                    selectedType === "signUp" ? "text-white" : "text-darkGray"
                  )}
                >
                  Sign Up
                </div>
              </>
            </Button>
            <motion.div
              layout
              className={clsx(
                "absolute top-8 bg-btnPrimary w-103 md:w-110 h-40 rounded-full",
                selectedType === "signUp" ? "right-10" : "left-10"
              )}
              layoutId="underline"
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedType === "login" ? "login" : "signUp"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="h-500 w-full"
            >
              <p className="mt-20 text-center text-darkGray text-pretty h-48 whitespace-pre-wrap">
                {matchDescription[selectedType]}
              </p>
              {selectedType === "login" ? <Login /> : <SignUp />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Fragment>
  );
}

export default Auth;

const matchDescription: { [key: string]: string } = {
  login:
    "Welcome back!\nReady to capture your thoughts and add some color to your day?",
  signUp:
    "Join us today\nand start turning your daily moments into colorful memories.",
};

export const labelStyle = "text-darkGray";
