import AboutCompany from './components/AboutCompany/AboutCompany'
import Hero from './components/Hero/Hero'
import ImageSlider from './components/ImageSlider/ImageSlider'
import Mosaic from './components/Mosaic/Mosaic'

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Mosaic />
      <AboutCompany />
      <ImageSlider />
    </main>
  )
}
