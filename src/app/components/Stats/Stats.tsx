import Image from 'next/image'
import Link from 'next/link'
import GoToArrow from '../GoToArrow/GoToArrow'

const Stats = () => {
  return (
    <div>
      <h2>Nortera in numbers</h2>
      <Image
        width={800}
        height={800}
        alt="betteraves"
        src="https://www.datocms-assets.com/85733/1681248525-betteraves-1-1-1.jpg?ixlib=js-3.8.0&auto=format&w=100 100w,
https://www.datocms-assets.com/85733/1681248525-betteraves-1-1-1.jpg?ixlib=js-3.8.0&auto=format&w=300 300w,
https://www.datocms-assets.com/85733/1681248525-betteraves-1-1-1.jpg?ixlib=js-3.8.0&auto=format&w=600 600w,
https://www.datocms-assets.com/85733/1681248525-betteraves-1-1-1.jpg?ixlib=js-3.8.0&auto=format&w=900 900w,
https://www.datocms-assets.com/85733/1681248525-betteraves-1-1-1.jpg?ixlib=js-3.8.0&auto=format&w=1200 1200w,
https://www.datocms-assets.com/85733/1681248525-betteraves-1-1-1.jpg?ixlib=js-3.8.0&auto=format&w=1500 1500w,
https://www.datocms-assets.com/85733/1681248525-betteraves-1-1-1.jpg?ixlib=js-3.8.0&auto=format&w=1800 1800w"
      />
      <p>
        With facilities in Canada and the United States, Nortera processes and
        markets over 450,000 tons of frozen and canned vegetables per year
      </p>

      <div>
        <p>800</p>
        <p>agricultural partners</p>
      </div>

      <div>
        <p>120500</p>
        <p>acres of land cultivated</p>
      </div>

      <div>
        <p>13</p>
        <p>plants in north america</p>
      </div>

      <Link href="#" className="group">
        <GoToArrow />
        Learn about our approach
      </Link>
    </div>
  )
}

export default Stats
