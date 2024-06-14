import {
  faGoogle,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faDiamond, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const Footer = () => {
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
  return (
    <footer className="footer section bg-marronFonce text-white overflow-hidden">
      <div className="container px-5 sm:px-0  flex flex-col gap-[40px]">
        <div className="w-full flex flex-col text-[20px] sm:flex items-center sm:gap-[20px] justify-center sm:text-[35px] font-[600] capitalize">
          <FontAwesomeIcon className="flex" icon={faDiamond} />
          diamond hotel
        </div>
        <div className="content flex sm:flex-row sm:flex-nowrap justify-between flex-wrap gap-5 text-[15px]">
          <div className="contact_block footer_block">
            <div className="block_title">contact us</div>
            <div className="block_content">
              <div className="chield">
                <div className="label">phone</div>
                <div className="value">+225 0574775889</div>
              </div>
              <div className="chield">
                <div className="label">email</div>
                <div className="value">IAhotel@gmail.com</div>
              </div>
              <div className="chield">
                <div className="label">location</div>
                <div className="value text-[14px]">
                  hotel in Lorem ipsum dolor sit amet.
                </div>
              </div>
              <div className="flex gap-[12px]">
                <FontAwesomeIcon className="icon" icon={faFacebook} />
                <FontAwesomeIcon className="icon" icon={faInstagram} />
                <FontAwesomeIcon className="icon" icon={faTwitter} />
                <FontAwesomeIcon className="icon" icon={faGoogle} />
              </div>
            </div>
          </div>
          <div className="links_block footer_block">
            <div className="block_title">links</div>
            <div className="block_content flex flex-wrap w-full sm:w-fit">
              {links &&
                links.map((link: any, index: number) => (
                  <Link
                    key={index}
                    href={""}
                    className=" hover:text-orange-500 transition-all w-fit capitalize"
                  >
                    {link.label}
                  </Link>
                ))}
            </div>
          </div>
          <div className="write_email_block footer_block">
            <div className="block_title">newsLetter</div>
            <div className="block_content">
              <div className="call_text capitalize text-[15px]">
                we love to share new offers and <br /> exclusive promotions
              </div>
              <div className="send_input w-fit flex gap-[2px] border-2 border-solid border-white rounded-[.5rem] h-fit pr-[10px] items-center">
                <input
                  className="border-none w-[250px] h-[35px]  pl-[5px] bg-transparent"
                  type="text"
                  name=""
                  id=""
                />
                <FontAwesomeIcon className="icon" icon={faPaperPlane} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
