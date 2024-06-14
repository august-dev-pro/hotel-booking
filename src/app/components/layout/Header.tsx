"use client";
import { faBars, faDiamond } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [activeLink, setActiveLink] = useState<number>(0);
  const [inner, setInner] = useState<any>({
    inner_text: "Enjoy the best moments of life",
    label: "home",
  });
  const [bgClass, setBgClass] = useState<string>("bg-transparent");
  const links = [
    {
      label: "home",
      href: "/",
      inner_text: "Enjoy the best moments of life",
      inner_sub_text: "welcome to IA-hotel",
    },
    {
      label: "about us",
      href: "/about",
    },
    {
      label: "service",
      href: "/service",
    },
    {
      label: "rooms",
      href: "/rooms",
    },
    {
      label: "blog",
      href: "/blog",
    },
    {
      label: "gallery",
      href: "/gallery",
    },
    {
      label: "contact",
      href: "/contact",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Ajustez cette valeur selon vos besoins
        setBgClass("bg-marronFonce");
      } else {
        setBgClass("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="top-header-section h-[350px] sm:h-[500px]">
      <header
        className={`header text-white py-[10px] fixed w-full transition-all duration-300 ${bgClass} z-[100]`}
      >
        <div className="container px-5 sm:px-0 mx-auto flex justify-between items-center">
          <div className="logo text-[25px] font-[600] capitalize flex gap-[10px] sm:gap-0 items-center  lg:flex sm:flex-col">
            <FontAwesomeIcon className=" text-orange-400" icon={faDiamond} />
            <div className="logo_text w-max text-[15px] ">diamond hotel</div>
          </div>
          <FontAwesomeIcon className=" text-[25px] sm:hidden" icon={faBars} />
          <nav className="nav hidden font-[300] lg:gap-[70px] sm:flex  sm:gap-[10px] ">
            <div className="link-call-actions flex  sm:gap-1 lg:gap-[30px]">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className={`link ${
                    activeLink === index ? "active-link relative h-fit " : ""
                  }
capitalize hover:bg-blackOpacity h-fit w-max px-[5px] py-[3px] sm:text-[15px]`}
                  onClick={() => {
                    setActiveLink(index);
                    setInner({
                      inner_text: link.inner_text,
                      label: link.label,
                      inner_sub_text: link.inner_sub_text,
                    });
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="reservation-action bg-orange-400 py-[7px] rounded-[0.1rem] font-medium hover:bg-orange-500 transition-all cursor-pointer h-fit sm:px-[5px] sm:text-[10px] lg:px-[20px] lg:text-[18px]">
              réservez
            </div>
          </nav>
        </div>
      </header>
      {inner && (
        <div className="inner_banner container px-5 sm:px-0 flex flex-col items-center justify-center h-full">
          {inner.inner_sub_text ? (
            <div className="text-[25px] text-white px-[20px] py-[5px] bg-black opacity-40">
              <div>{inner.inner_sub_text}</div>
            </div>
          ) : (
            <div className=" text-[20px] sm:text-[45px] font-[500] text-white capitalize">
              {inner.label}
            </div>
          )}
          <div className=" text-[20px]  sm:text-[45px] font-[500] text-white capitalize">
            {inner?.inner_text}
          </div>
        </div>
      )}
    </section>
  );
};

export default Header;
