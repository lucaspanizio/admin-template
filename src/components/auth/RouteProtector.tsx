import React, { ReactElement } from "react";
import Script from "next/script";
import Image from "next/image";
import route from "next/router";
import Loading from "../../../public/images/loading.gif";
import useAuth from "@/data/hook/useAuth";
import { useAppData } from "@/data/hook/useAppData";

export function RouteProtector(props: ReactElement) {
  const { user, isLoading } = useAuth();
  const { theme } = useAppData();

  if (!isLoading && user?.email) {
    return (
      <>
        <Script
          id="script-id"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `if(!document.cookie?.includes("admin-template-auth")) {
                      window.location.href = "/auth"
                    }`,
          }}
        />
        {props}
      </>
    );
  } else if (isLoading) {
    return (
      <div
        className={`
        flex flex-col justify-center items-center 
        h-screen w-screen ${
          theme === "dark"
            ? "bg-gray-800 text-white"
            : "bg-gray-300  text-gray-800"
        }`}
      >
        <Image
          src={Loading}
          width={100}
          height={100}
          alt="Carregando..."
          priority
        />
        <div className={`font-semibold text-lg`}>Carregando...</div>
      </div>
    );
  } else {
    route.push("/auth");
    return null;
  }
}
