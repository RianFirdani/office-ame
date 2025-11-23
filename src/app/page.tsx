import BenefitsSections from "@/components/BenefitsSections";
import Header from "@/components/Header";
import Navbar from "@/components/navbar";
import CitiesSection from "@/features/cities/sections/citiesSection";
import FreshSpaceSection from "@/features/offices/sections/FreshSpaceSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Header/>
      <CitiesSection/>
      <BenefitsSections/>
      <FreshSpaceSection/>
    </>

  );
}
