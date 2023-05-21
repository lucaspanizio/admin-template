import React, { ReactNode } from "react";
import { SideNav } from "./SideNav";
import { Navbar } from "./Navbar";
import { Content } from "./Content";
import { useAppData } from "../../data/hook/useAppData";
import { RouteProtector } from "../auth/RouteProtector";

interface ILayout {
  title: string;
  caption: string;
  children?: ReactNode;
}

export default function Layout({ title, caption, children }: ILayout) {
  const { theme } = useAppData();

  return RouteProtector(
    <div className={`${theme} flex h-screen w-screen`}>
      <SideNav />
      <div
        className={`
        flex flex-col w-full p-7
        bg-gray-300 dark:bg-gray-800
      `}
      >
        <Navbar title={title} caption={caption} />
        <Content>{children}</Content>
      </div>
    </div>
  );
}
