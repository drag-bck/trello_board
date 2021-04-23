import React from "react";
import style from "./Header.module.scss";

const Header = ({ title }: { title: string }) => {
  return (
    <div className={style.header}>
      <header>{title}</header>
    </div>
  );
};

export default Header;
