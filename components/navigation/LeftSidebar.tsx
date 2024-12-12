"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";
import ROUTES from "@/constant/routes";

import NavLinks from "./navbar/NavLinks";

const LeftSidebar = () => {
  return (
    <>
      <section className="background-light900_dark200 scrollbar-none sticky left-0 top-0 z-40 flex h-screen flex-col justify-between gap-6 overflow-y-auto px-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden">
        <div className="flex flex-col gap-6">
          <NavLinks />
        </div>
        <div className="mt-auto flex flex-col gap-6 pb-6">
          <Link href={ROUTES.SIGN_IN}>
            <Button className="body-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <Image
                src="/icons/account.svg"
                width={23}
                height={23}
                alt="sign in"
                className="invert-colors lg:hidden"
              />
              <span className="primary-text-gradient max-lg:hidden">
                Sign In
              </span>
            </Button>
          </Link>
          <Link href={ROUTES.SIGN_UP}>
            <Button className="body-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none">
              <Image
                src="/icons/sign-up.svg"
                width={23}
                height={23}
                alt="sign in"
                className="invert-colors lg:hidden"
              />
              <span className="max-lg:hidden">Sign Up</span>
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default LeftSidebar;
