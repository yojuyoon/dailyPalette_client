import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { useAtom } from "jotai";
import { userAtom } from "@/store";
import { isEmpty } from "lodash";

function Nav() {
  const pathname = usePathname();
  const [user] = useAtom(userAtom);
  return (
    <nav className="font-questrial text-[26px] border-b border-borderBlack">
      <div className="px-8 py-10 md:px-40 flex itmes-center justify-between">
        <Link href="/" className="hover:text-bgColor1">
          DailyPalette
        </Link>
        {pathname !== "/auth" && (
          <Link href={!isEmpty(user.token) ? "/mypage" : "/auth"}>
            {!isEmpty(user.token) ? `Hi, ${user.name}` : "Login"}
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Nav;
