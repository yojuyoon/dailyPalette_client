import Button from "@/components/Button";
import React, { Fragment, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { writingSchema } from "@/lib/schema/writing";
import Input from "@/components/Input";
import HashtagModal from "@/components/writing/HashtagModal";

type WritingType = {
  title: string;
  date: Date;
  content?: string;
};

function Writing() {
  const router = useRouter();
  const [isHashtagModalOpen, setIsHashtagModalOpen] = useState(false);

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WritingType>({
    resolver: yupResolver(writingSchema),
  });
  return (
    <Fragment>
      <header className="flex justify-between itmes-cente font-questrial px-8 py-10 md:px-40">
        <Button
          onClick={() => {
            // fix previous router path
            router.push("/mypage");
          }}
          className="text-[24px] text-darkGray"
        >
          Close
        </Button>
        <Button
          onClick={() => setIsHashtagModalOpen(true)}
          className="text-[24px] hover:text-textFocus"
        >
          Next
        </Button>
      </header>
      <form className="px-16 md:px-40">
        <Input
          placeholder="Title..."
          inputKey="title"
          register={register}
          inputClassName="font-questrial w-full h-60 bg-transparent border-b border-b-gray-500 text-2xl font-bold"
        />
        <textarea
          placeholder="content..."
          {...register("content")}
          className="w-full mt-10 bg-transparent h-[calc(100svh-120px)] font-questrial text-base"
        />
      </form>
      <HashtagModal
        isOpen={isHashtagModalOpen}
        setIsOpen={setIsHashtagModalOpen}
        title={watch("title")}
        content={watch("content")}
      />
    </Fragment>
  );
}

export default Writing;
