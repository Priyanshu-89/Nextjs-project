import Image from 'next/image'
import HeroSection from "@/app/components/section/HeroSection"
import CardSection from "@/app/components/cards/CardSection"
import GridSection from "@/app/components/gird/GridSection"
import ReviewSection from "@/app/components/review/ReviewSection"
import FooterSection from "@/app/components/footer/FooterSection"
import FetchData from "@/app/components/axios/FetchData"
import ApiData from "@/app/components/axios/ApiData"
import RandomUser from "@/app/components/axios/RandomUser"
import RandomImage from "@/app/components/axios/RandomImage"
export default function Home() {
  return (
    <>
   
    {/* <HeroSection/>
    <br></br>
   <CardSection/>
   <br></br>
   <GridSection/>
   <br></br>
   <ReviewSection/>
   <br></br>
   <FooterSection/> */}
   {/* <FetchData/> */}
   {/* <ApiData/> */}
   {/* <RandomUser/> */}
   <RandomImage/>

  
    
    </>
  )
}
