import React from "react";
import heroImage from "../public/assets/heroImage.png";
import { MdExpandMore } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div id="home" className="h-screen w-full text-center">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-4 flex flex-col justify-around items-center">
        <div className="w-40 h-60  mx-auto overflow-hidden rounded-xl">
          <Image src={heroImage} alt="me" />
        </div>

        <h1 className="uppercase font-bold text-cyan-700 text-3xl">
          WEB DEVELOPER & GAME DEVELOPER
        </h1>

        <p className="text-#2F4F4F-700 text-1xl max-w-sm mx-auto">
          Nama Saya Mohamad Irfan Maulana, Lulusan Teknik Informatika (S1)
          Dengan Gelar (S.T.) Pengalaman Membangun Dan Merancang Perangkat Lunak
          Saat Ini Saya Suka Bekerja Pada Pembuatan Aplikasi Web dan Game
          Menggunakan Teknologi Seperti React, Tailwind, Next JS, Angular dan
          Unity 3D.
        </p>

        <Link href="/#me">
          <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
            tahu lebih banyak
            <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
              <MdExpandMore size={25} />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
