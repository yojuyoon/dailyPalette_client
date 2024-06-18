import clsx from "clsx";
import React from "react";

function Loading() {
  return (
    <div className="absolute inset-0 bg-dimmer z-20 flex items-center justify-center flex-col">
      <div
        className={clsx(
          "relative inline-block inner-circles-loader w-50 h-50 rounded-full bg-loader1 overflow-hidden indent-[-9999px]",
          "before:content-[''] before:absolute before:top-0 before:w-50 before:h-50 before:inline-block before:rounded-full before:left-0 before:bg-loader2 before:animate-beforeInnerCircle before:origin-[0%_50%]",
          "after:content-[''] after:absolute after:top-0 after:w-50 after:h-50 after:inline-block after:rounded-full after:right-0 after:bg-loader3 after:animate-afterInnerCircle after:origin-[100%_50%]"
        )}
      />
      <span className="font-questrial text-darkGray text-[22px] pt-20 text-center">
        Creating
        <br />
        Your Journal...
      </span>
    </div>
  );
}

export default Loading;
