import Image from "next/image";
import React from "react";

import SocialAuthForm from "@/components/forms/SocialAuthForm";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex-center min-h-screen bg-auth-light bg-cover bg-center bg-no-repeat px-4 py-10 dark:bg-auth-dark">
      <section className="background-light800_dark200 light-border shadow-light100_dark100 min-w-full rounded-[10px] border px-8 py-10 shadow-md sm:min-w-[580px] sm:px-8">
        <div className="flex-between gap-2">
          <div className="space-y-2.5">
            <h2 className="h2-bold text-dark100_light900">Join DevFlow</h2>
            <p className="paragraph-regular text-dark500_light400">
              To get your question answered.
            </p>
          </div>
          <Image
            src={"/images/site-logo.svg"}
            alt="logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
        {children}
        <SocialAuthForm />
      </section>
    </main>
  );
};

export default AuthLayout;
