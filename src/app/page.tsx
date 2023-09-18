import HomePageIntersectionObserver from './HomePageIntersectionObserver'
import AboutCompany from './components/AboutCompany/AboutCompany'
import BusinessInfo from './components/BusinessInfo/BusinessInfo'
import Hero from './components/Hero/Hero'
import ImageSlider from './components/ImageSlider/ImageSlider'
import JoinOurTeam from './components/JoinOurTeam/JoinOurTeam'
import Mosaic from './components/Mosaic/Mosaic'
import Stats from './components/Stats/Stats'

export default function Home() {
  return (
    <main className="">
      <div className="px-[8.832px]">
        <HomePageIntersectionObserver />
        <Hero />
        <Mosaic />
        <AboutCompany />
        <ImageSlider />
        <BusinessInfo />
        <Stats />
      </div>
      <JoinOurTeam />
    </main>
  )
}
