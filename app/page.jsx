import Image from "next/image";
import Container from "@/components/elements/Container";
import { FaCalendarDay, FaLocationDot } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import FloatingButton from "@/components/widgets/FloatingButton";

export default function Home() {
  return (
    <main className="bg-[url('/bg.png')] bg-[#FFFCEF] bg-cover min-h-screen relative">

      <Image src="/right-palms.png" alt="Background" width={256} height={726} className="absolute top-0 left-0" />
      <Image src="/left-bar.png" alt="Background" width={163} height={327} className="absolute bottom-0 right-0" />

      <Container className="py-[38px]">
        <div className="lg:w-[935px] mx-auto">
          <h2 style={{ textShadow: "1px 1px 2px white" }} className="text-center text-[20px] font-bold pt-20 text-[#3E3E3E] leading-[140%]">
            The Families of Osuji Odi Nweze of Amenu Uburu And Late Onyiba Dandy Igwe-Omoke Of Amankpuma Okposi Okwu, both in Ohaozara Local Government Area of Ebonyi State Cordially invite YOU to the traditional marriage of their children - Ms. Chidiebere Nweze & Dr. Nnaemeka Igwe-Omoke
          </h2>
        </div>

        <div className="flex items-center justify-center w-full">
          <Image src="/header2.png" alt="header" width={697} height={439} />
        </div>

        <div className="lg:w-[662px] mx-auto">
          <p className="pb-[27px] border-b border-dashed mt-[55px] text-center text-[24px] text-[#3E3E3E] ">
            <span className="font-bold">Colours of the day: </span>
            <span className="font-normal">Navy blue & Gold</span>
          </p>

          <div className="mt-[27px] flex justify-center">
            <div className="lg:flex justify-between lg:w-[662px] mx-auto lg:space-y-0 space-y-4">
              <div className="flex items-center space-x-2">
                <FaLocationDot className="text-primary text-[24px]" />
                <p className="text-[20px] text-[#3E3E3E]">
                  <span className="font-normal">
                    Joint Life Christian center
                  </span>
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <FaCalendarDay className="text-primary text-[24px]" />
                <p className="text-[20px] text-[#3E3E3E]">
                  <span className="font-normal">
                    14th Sept., 2025
                  </span>
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <IoIosTime className="text-primary text-[24px]" />
                <p className="text-[20px] text-[#3E3E3E]">
                  <span className="font-normal">
                    10am
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 lg:w-[662px] mx-auto">
            <p className="font-light text-center text-[20px] text-[#3E3E3E] leading-[140%]">
              JOINT LIFE CHRISTIAN CENTER, ADEYERI OWUYE STREET, BEHIND ZENITH BANK,
              BENSON BUS-STOP, IKORODU, LAGOS.
            </p>

            <p className="pb-[27px] border-b border-dashed mt-[15px] text-center text-[24px] text-[#3E3E3E] ">
              <span className="font-bold">Contact: </span>
              <span className="font-normal">09139388122</span>
            </p>
          </div>
        </div>
      </Container>

      <FloatingButton />
    </main>
  );
}
