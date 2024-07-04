import Button from "@/components/Button";
import React, { Fragment } from "react";
import { useRouter } from "next/router";

function Writing() {
  const router = useRouter();
  return (
    <Fragment>
      <header className="flex justify-between itmes-cente font-questrial px-8 py-10 md:px-40">
        <Button
          onClick={() => {
            // fix previous router path
            router.push("/mypage");
          }}
          className="text-[24px]"
        >
          Close
        </Button>
        <Button onClick={() => {}} className="text-[24px] hover:text-textFocus">
          Next
        </Button>
      </header>
      <form className="px-16 md:px-40">
        <input
          type="text"
          placeholder="Title..."
          className="font-questrial w-full h-60 bg-transparent border-b border-b-gray-500"
        />
        <textarea
          placeholder="content..."
          className="w-full mt-10 bg-transparent h-[calc(100svh-120px)] font-questrial"
        />
      </form>
    </Fragment>
  );
}

export default Writing;
