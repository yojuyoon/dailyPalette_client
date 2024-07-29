import React, { Dispatch, SetStateAction } from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import close from "../../../public/svgs/close.svg";
import Button from "../Button";
import Input from "../Input";

function HashtagModal({
  isOpen,
  setIsOpen,
  title,
  content,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  content?: string;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          static
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-50 font-questrial"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white/30 backdrop-blur-xl"
          />
          <div className="fixed inset-0 flex w-screen items-center justify-center">
            <DialogPanel
              as={motion.div}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="h-screen w-screen"
            >
              <div className="bg-bgPrimary p-12 relative">
                <Button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-16 left-16"
                >
                  <Image priority src={close} alt="close" />
                </Button>
                <DialogTitle className="text-xl mt-60 mb-10">
                  Finish Your Journal
                </DialogTitle>
                <Description className="text-darkGray">
                  Enhance your journal entry by adding relevant hashtags to
                  organize and highlight key themes.
                </Description>
                <div className="my-10">
                  <Input
                    inputKey="hashtag"
                    placeholder="Enter your tag e.g. #mood"
                    inputClassName="w-full h-54 px-10 py-8 bg-transparent border-b border-btnPrimary"
                  />
                  <p className="text-right w-full text-xs text-darkGray">
                    Maximum 5
                  </p>
                </div>
                <div className="flex justify-end">
                  <Button
                    onClick={() => setIsOpen(false)}
                    className="text-textFocus"
                  >
                    Add Hashtag
                  </Button>
                </div>
              </div>
              <div className="p-12">
                <DialogTitle className="text-xl mt-20">
                  Journal Preview
                </DialogTitle>
                <div className="bg-bgPrimary rounded-sm w-full p-24 overflow-y-scroll max-h-480 mt-10">
                  <h2 className="mb-16 text-lg font-bold">{title}</h2>
                  <p>{content}</p>
                </div>
              </div>
              <Button
                onClick={() => setIsOpen(false)}
                className="bg-btnPrimary text-white rounded-full w-2/3 py-6 fixed bottom-28 left-1/2 transform -translate-x-1/2"
              >
                Publish now
              </Button>
            </DialogPanel>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}

export default HashtagModal;
