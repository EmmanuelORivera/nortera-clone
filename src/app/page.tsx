import HomePageIntersectionObserver from './HomePageIntersectionObserver'
import AboutCompany from './components/AboutCompany/AboutCompany'
import BusinessInfo from './components/BusinessInfo/BusinessInfo'
import Hero from './components/Hero/Hero'
import ImageSlider from './components/ImageSlider/ImageSlider'
import JoinOurTeam from './components/JoinOurTeam/JoinOurTeam'
import Mosaic from './components/Mosaic/Mosaic'
import Stats from './components/Stats/Stats'
import Nortera from './svgComponents/Nortera'

export default function Home() {
  return (
    <main className="">
      <div className="px-[1.6667vw] md:px-[2.1333vw]">
        <HomePageIntersectionObserver />
        <Hero />
        <Mosaic />
        <AboutCompany />
        <ImageSlider />
        <BusinessInfo />
        <Stats />
      </div>
      <div className="bg-custom-green text-white px-[1.6667vw] md:px-[2.1333vw]">
        <JoinOurTeam />
        <Nortera className="mt-8 " id="2" />
      </div>
    </main>
  )
}
