"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { SheetClose } from "@/components/ui/sheet";
import { Sidebarlinks } from "@/constant";
import { cn } from "@/lib/utils";

const NavLinks = ({ isMobileNav = false }: { isMobileNav?: boolean }) => {
  const pathname = usePathname();
  const userId = 1;
  return (
    <>
      {Sidebarlinks.map((item) => {
        if (item.route === "/profile") {
          if (userId) item.route = `${item.route}/${userId}`;
        }

        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;

        const linkComponent = (
          <Link
            href={item.route}
            className={cn(
              isActive
                ? "primary-gradient rounded-lg text-light-900"
                : "text-dark300_light900",
              "flex item-center gap-4 bg-transparent p-4"
            )}
          >
            <Image
              src={item.imgURL}
              width={20}
              height={20}
              alt={item.label}
              className={cn({ "invert-colors": !isActive })}
            />
            <p
              className={cn(
                isActive ? "base-bold" : "base-medium",
                !isMobileNav && "max-lg:hidden"
              )}
            >
              {item.label}
            </p>
          </Link>
        );

        return isMobileNav ? (
          <SheetClose asChild key={item.label}>
            {linkComponent}
          </SheetClose>
        ) : (
          <React.Fragment key={item.label}>{linkComponent}</React.Fragment>
        );
      })}
    </>
  );
};

export default NavLinks;
