import { userAtom } from "@/store";
import { useAtom } from "jotai";
import Link from "next/link";
import React from "react";

function Footer() {
  const [user] = useAtom(userAtom);
  return (
    <footer className="font-questrial text-[26px] border-t border-borderBlack">
      <div className="px-8 py-10 md:px-40 flex itmes-center justify-between">
        <div>DailyPalette</div>
        <Link href={user.access_token ? "/mypage" : "/auth"}>
          Go to my palette
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
