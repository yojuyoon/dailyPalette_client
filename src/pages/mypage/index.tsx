import Link from "next/link";
import Button from "@/components/Button";
import Nav from "@/components/Nav";
import { cn, convertProfileToColor } from "@/lib/utils";
import { userAtom } from "@/store";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Calendar from "@/components/mypage/Calendar";
import YearCalendar from "@/components/mypage/YearCalendar";

function MyPage() {
  const [user] = useAtom(userAtom);

  const router = useRouter();

  const [selectedType, setSelectedType] = useState("months");
  const colors = convertProfileToColor(user.name);

  useEffect(() => {
    if (!user.access_token) {
      router.push("/");
    }
  }, [router, user.access_token]);

  return (
    <Fragment>
      <Nav />
      <div className="flex flex-col items-center py-40 font-questrial px-16">
        <div
          className={cn("bg-gradient-to-r h-80 w-80 rounded-full")}
          style={{
            background: `linear-gradient(${colors.from}, ${colors.to})`,
          }}
        />
        <span className="text-[22px] pt-10">Hi, {user.name}</span>

        <div className="bg-[#FFFBF7] p-10 rounded-full flex justify-between gap-20 mt-20 relative">
          <Button
            onClick={() => setSelectedType("year")}
            className={cn("py-6 px-20 rounded-[4px]")}
          >
            <>
              <div
                className={cn(
                  "z-10 w-63 md:w-70",
                  selectedType === "year" ? "text-white" : "text-darkGray"
                )}
              >
                Year
              </div>
            </>
          </Button>
          <Button
            onClick={() => setSelectedType("months")}
            className={cn("py-6 px-20 rounded-[4px]")}
          >
            <>
              <div
                className={cn(
                  "z-10 w-63 md:w-70",
                  selectedType === "months" ? "text-white" : "text-darkGray"
                )}
              >
                Months
              </div>
            </>
          </Button>
          <motion.div
            layout
            className={cn(
              "absolute top-8 bg-btnPrimary w-103 md:w-110 h-40 rounded-full",
              selectedType === "months" ? "right-10" : "left-10"
            )}
            layoutId="underline"
          />
        </div>

        <div className="bg-bgBeige rounded-tr-[30px] rounded-tl-[30px] py-20 px-14 w-full mt-20 flex flex-col items-center">
          {/* calendar body */}
          <div className="mb-10 w-full">
            {selectedType === "year" ? <YearCalendar /> : <Calendar />}
          </div>
          <Link
            className="w-full h-55 items-center flex justify-center bg-bgPrimary border border-darkGray rounded-full"
            href={"/writing"}
          >
            Start Writing
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default MyPage;
