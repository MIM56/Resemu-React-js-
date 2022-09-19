import Link from "next/link";
import React from "react";

import { MdExpandMore } from "react-icons/md";

const Me = () => {
  return (
    <div id="me" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
          me
        </h2>

        <div className="shadow-xl shadow-blue-300 my-8 px-8">
          <p className="py-4 max-w-3xl mx-auto">
            Nama Saya Mohamad Irfan Maulana Lahir Di Jakarta 27 Febuari 1999,
            Saya Lulusan Institut Teknologi Budi Utomo Jakarta Falkutas
            Teknologi Industri Jurusan Teknik Informatika (S1) Dengan Gelar
            (S.T.) Saya Akan Bekerja Dengan Menjunjung Nilai Kejujuran,
            Berintegritas Dan Profesional, Displin Serta Bertanggung Jawab Dalam
            Melaksanakan Pekerjaan Dengan Baik, Saya Akan Bekerja Sesuai SOP dan
            Menaati Segala Peraturan Perusahaan Yang Berlaku Baik Team Work dan
            Individu.
          </p>
          <p className="py-4 max-w-3xl mx-auto">
            Pengalaman Kerja : PT MEGA AUTO FINANCE Position Sebagai Creadit
            Marketing Officer 2017-2018, PT ISS INDONESIA Position Relivier Di
            Area PT HM SAMPOERNA.Tbk 2018-2019, PT DUTA SELARAS SOLUSIINDO
            Position Teknisi Instalasi Fiber Optic 2020-2021, PT BENUA INTEGRASI
            GLOBAL Position Programmer Unity 3D 2022.
          </p>
          <p className="py-4 max-w-3xl mx-auto">
            Keahlian Pemprogramman: PHP , C++ ,C#, HTML, CSS, JAVASCRIPT,
            Python, JAVA . Framewrok :React Js, React Native, Bootstrap,
            Tailwind Css, Laravel, Code Igniter, Angular Cli , Flutter , Android
            Studio, Game Engine Unity 3D.
          </p>
        </div>

        <div className="flex items-center justify-center gap-10">
          <Link href="/resume.pdf" download={true}>
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              resume
              <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>

          <Link href="/#portfolio">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              my portfolio
              <span className="-rotate-90 duration-100 ease-in group-hover:-rotate-180">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Me;
