import React from "react";
import { NavItem } from "./NavItem";
import {
  HomeIcon,
  NotificationIcon,
  LogoutIcon,
  TaskBoardIcon,
  CalendarIcon,
  DashBoardIcon,
} from "../icons";
import useAuth from "@/data/hook/useAuth";
import { Logo } from "./Logo";

const SideNav: React.FC = () => {
  const { logout } = useAuth();

  return (
    <aside
      className={`
      flex flex-col 
      bg-gray-200 text-gray-700
      dark:bg-gray-900
    `}
    >
      <div
        className={`
          flex flex-col items-center justify-center
          h-20 w-20 bg-gradient-to-r from-indigo-500 to-purple-800
      `}
      >
        <Logo />
      </div>
      <ul className={`flex-grow`}>
        <NavItem url="/" text="Início" icon={HomeIcon} />
        <NavItem url="/dashboard" text="Indicadores" icon={DashBoardIcon} />
        <NavItem url="/taskboard" text="Tarefas" icon={TaskBoardIcon} />
        <NavItem url="/calendar" text="Calendário" icon={CalendarIcon} />
        <NavItem
          url="/notifications"
          text="Notificações"
          icon={NotificationIcon}
        />
      </ul>
      <ul>
        <NavItem
          text="Sair"
          icon={LogoutIcon}
          clasName={`
              text-red-600 dark:text-red-400
              hover:bg-red-400 hover:text-white
              dark:hover:text-white
            `}
          handleClick={logout}
        />
      </ul>
    </aside>
  );
};

export { SideNav };
