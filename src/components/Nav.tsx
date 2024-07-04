import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { useAtom } from "jotai";
import { userAtom } from "@/store";
import { isEmpty } from "lodash";
import { cn, convertProfileToColor } from "@/lib/utils";

function Nav() {
  const pathname = usePathname();
  const [user] = useAtom(userAtom);
  const colors = convertProfileToColor(user.name);
  console.log(user);
  return (
    <nav className="font-questrial text-[26px] border-b border-borderBlack">
      <div className="px-8 py-10 md:px-40 flex itmes-center justify-between">
        <Link href="/" className="hover:text-bgColor1 transition-all">
          DailyPalette
        </Link>
        {pathname !== "/auth" && (
          <Link href={!isEmpty(user.access_token) ? "/mypage" : "/auth"}>
            {!isEmpty(user.access_token) ? (
              <div
                className={cn("bg-gradient-to-r h-42 w-42 rounded-full")}
                style={{
                  background: `linear-gradient(${colors.from}, ${colors.to})`,
                }}
              />
            ) : (
              <span className="hover:text-bgColor1 transition-all">Login</span>
            )}
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Nav;
