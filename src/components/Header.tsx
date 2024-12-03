import React from "react";
import Image from "next/image";
import "@/styles/Header.scss";
import Link from "next/link";
const Header = () => {
  return (
    <header className="header">
      <div className="container header_container">
        <Link href="/" className="logo">
          <Image src="/qrlogo.png" width={70} height={70} alt="logo"></Image>
        </Link>
        <b>Генератор QR кода онлайн</b>
      </div>
    </header>
  );
};

export default Header;
