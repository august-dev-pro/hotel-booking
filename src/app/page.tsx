import Image from "next/image";
import piscine_pic from "@/imgs/tapeta-na-telefon-palmy-i-lezaki-nad-basenem-1.jpg";
import chambre from "@/imgs/chambre.jpg";
import chambreDouble from "@/imgs/rooms/double1.avif";
import chambreFamily from "@/imgs/rooms/family1.jpeg";
import chambreDeluxe from "@/imgs/rooms/deluxe1.jpg";
import chambreVIP from "@/imgs/rooms/VIP2.jpg";
import chambreRoyal from "@/imgs/rooms/suite1.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCar, faWifi } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const services = [
    {
      icon: <FontAwesomeIcon icon={faWifi} />,
      label: "high speed wifi",
      description:
        "Lorem ipsum dolor adipisicing elit. pariatur repellendus quod ducimus tempore dolor fugit autem numquam",
    },
    {
      icon: <FontAwesomeIcon icon={faCar} />,
      label: "private parking",
      description:
        "Lorem ipsum dolor adipisicing elit. pariatur repellendus quod ducimus tempore dolor fugit autem numquam",
    },
    {
      icon: <FontAwesomeIcon icon={faCar} />,
      label: "24/7 room service",
      description:
        "Lorem ipsum dolor adipisicing elit. pariatur repellendus quod ducimus tempore dolor fugit autem numquam",
    },
    {
      icon: <FontAwesomeIcon icon={faCar} />,
      label: "free drinks",
      description:
        "Lorem ipsum dolor adipisicing elit. pariatur repellendus quod ducimus tempore dolor fugit autem numquam",
    },
    {
      icon: <FontAwesomeIcon icon={faCar} />,
      label: "special restaurant",
      description:
        "Lorem ipsum dolor adipisicing elit. pariatur repellendus quod ducimus tempore dolor fugit autem numquam",
    },
    {
      icon: <FontAwesomeIcon icon={faCar} />,
      label: "spa center",
      description:
        "Lorem ipsum dolor adipisicing elit. pariatur repellendus quod ducimus tempore dolor fugit autem numquam",
    },
    {
      icon: <FontAwesomeIcon icon={faCar} />,
      label: "fitness center",
      description:
        "Lorem ipsum dolor adipisicing elit. pariatur repellendus quod ducimus tempore dolor fugit autem numquam",
    },
    {
      icon: <FontAwesomeIcon icon={faCar} />,
      label: "swinming pool",
      description:
        "Lorem ipsum dolor adipisicing elit. pariatur repellendus quod ducimus tempore dolor fugit autem numquam",
    },
  ];
  const rooms = [
    {
      id: 1,
      type: "single room",
      price: "100$ / night",
      imgSrc: chambre,
    },
    {
      id: 2,
      type: "double room",
      price: "150$ / night",
      imgSrc: chambreDouble,
    },
    {
      id: 3,
      type: "royal suite",
      price: "200$ / night",
      imgSrc: chambreRoyal,
    },
    {
      id: 4,
      type: "deluxe room",
      price: "250$ / night",
      imgSrc: chambreDeluxe,
    },
    {
      id: 5,
      type: "family room",
      price: "300$ / night",
      imgSrc: chambreFamily,
    },
    {
      id: 6,
      type: "VIP room",
      price: "350$ / night",
      imgSrc: chambreVIP,
    },
    // Vous pouvez ajouter d'autres chambres ici
  ];

  return (
    <main className="">
      <section className="section about_us">
        <div className="container px-5 sm:px-0">
          <div className="section_content flex flex-col gap-[30px] sm:gap-[20px] sm:grid sm:grid-cols-2 lg:items-center">
            <div className="content_pictures  w-full h-[350px] grid grid-cols-[70px_1fr]">
              <div className="fel relative">
                <div className="absolute w-[180px] top-10 border-[2px] rounded-[.5rem] overflow-hidden border-white border-solid">
                  <Image
                    src={chambre}
                    width={500}
                    height={500}
                    alt="piscine picture"
                    className=" h-full object-cover"
                  />
                </div>
              </div>
              <div className="fel w-full h-full rounded-[.5rem] overflow-hidden">
                <Image
                  src={piscine_pic}
                  width={500}
                  height={500}
                  alt="piscine picture"
                  className=" h-full object-cover"
                />
              </div>
            </div>
            <div className="des gap-[10px] max-w-[600px] flex flex-col sm:gap-[20px]">
              <div className="section_title">about us</div>
              <div className="section_sub_title">
                enjoy your vacation with us
              </div>
              <div className="description text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                blanditiis explicabo adipisci quasi, aut ipsum inventore optio
                ipsam molestiae rem assumenda sit, ducimus in maiores, labore
                similique error ex pariatur. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Tempore nulla, facilis odit
                adipisci nihil earum voluptatem! Dolore at deserunt ipsum rem
                optio, ex dolor ab magnam ut esse earum fuga.
              </div>
              <div className="flex w-full justify-end capitalize">
                <div className="action_discover flex w-fit gap-[10px] items-center px-[20px] py-[5px] border-solid border-[1px] border-marronFonce text-marronFonce rounded-[.2rem]">
                  discover more <FontAwesomeIcon icon={faArrowRight} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section services">
        <div className="container px-5 sm:px-0">
          <div className="content flex flex-col items-center gap-[50px]">
            <div className="des text-center flex flex-col gap-[10px]">
              <div className="section_title">our services</div>
              <div className="section_sub_title">
                we oofer you the best features
              </div>
            </div>
            <div className="content_items grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-[50px] w-full">
              {services.map((service: any, index: number) => (
                <div
                  className="service shadow-custom-black-medium p-[5px] rounded-[.5rem] w-full flex flex-col gap-[2px] items-center text-center transition-all cursor-pointer hover:scale-[1.04]"
                  key={index}
                >
                  <div className="w-fit text-marronFonce text-[50px]">
                    {service.icon}
                  </div>
                  <div className="label w-fit font-[500] text-[18px]">
                    {service.label}
                  </div>
                  <div className="description max-w-[250px] text-[15px] text-grayBlack">
                    {service.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section rooms">
        <div className="container px-5 sm:px-0 mx-auto">
          <div className="content flex flex-col gap-[40px]">
            <div className="des flex flex-col gap-[10px]">
              <div className="section_title">rooms & suites</div>
              <div className="section_sub_title">
                feel confortable in our rooms
              </div>
            </div>
            <div className="room-list grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-center">
              {rooms.map((room: any, index: number) => (
                <div
                  key={index}
                  style={{ backgroundImage: `url(${room.imgSrc.src})` }}
                  className={`room_field group bg-cover overflow-hidden rounded-[.5rem] border-[1px] border-solid w-full h-[300px]`}
                >
                  <div className="h-full w-full bg-marronTransparant flex flex-col justify-between">
                    <div className="book_action px-[20px] py-[3px] rounded-br-[.5rem] bg-marronBlanc text-white w-fit">
                      book now
                    </div>
                    <div className="room_des px-[12px] pb-[15px] flex flex-col gap-[10px]">
                      <div className="des_i flex justify-between items-center text-white capitalize">
                        <div className="room_type pb-[5px] border-b-[2px] border-solid">
                          {room.type}
                        </div>
                        <div className="book_price">{room.price}</div>
                      </div>
                      <div className="read_more-action w-fit px-[10px] py-[2px] border-[1px] border-solid hidden group-hover:flex cursor-pointer hover:scale-[1.04] items-center text-white text-[15px] gap-[15px]">
                        read more <FontAwesomeIcon icon={faArrowRight} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section reviews">
        <div className="container px-5 sm:px-0">
          <div className="des flex flex-col gap-[10px]">
            <div className="section_title">rooms & suites</div>
            <div className="section_sub_title">
              feel confortable in our rooms
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
