import React from "react";
import { Title } from "./Title";
import { ButtonToogleTheme } from "./ButtonToogleTheme";
import { Avatar } from "./Avatar";

interface INav {
  title: string;
  caption: string;
}

export const Navbar: React.FC<INav> = ({ title, caption }) => {
  return (
    <div className={`flex`}>
      <Title title={title} caption={caption} />
      <div className={`flex flex-grow justify-end items-center`}>
        <ButtonToogleTheme />
        <Avatar />
      </div>
    </div>
  );
};
