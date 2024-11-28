import Image from "next/image";
import copyright from "../../public/hero/copyright.png";
import logo from "../../public/navbar/logo.png";
import React from "react";

export default function Footer(){
    return(
        <div>
            <div className="flex justify-center items-center text-[13px] overflow-hidden gap-1">
                <p>copyright</p>
                <Image src={copyright} alt="copyRight" className="h-3 w-3"/>
                <p>2024</p>
                <Image src={logo} alt="theLogo" className="h-3 w-7"/>
                <p className={'whitespace-nowrap'}>All Rights Reserved</p>
            </div>
        </div>
    );
}