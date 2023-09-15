import AboutCompany from './components/AboutCompany/AboutCompany'
import BusinessInfo from './components/BusinessInfo/BusinessInfo'
import Hero from './components/Hero/Hero'
import ImageSlider from './components/ImageSlider/ImageSlider'
import Mosaic from './components/Mosaic/Mosaic'
import Stats from './components/Stats/Stats'

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Mosaic />
      <AboutCompany />
      <ImageSlider />
      <BusinessInfo />
      <Stats />
    </main>
  )
}
