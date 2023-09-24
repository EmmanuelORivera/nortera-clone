'use client'

import { useRef } from 'react'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

const Nortera = ({ className, id }: { id: string; className?: string }) => {
  // Intersection Observer only checks if isIntersecting the <svg> tag not the inners <ploygon> or <path>
  // so thats why it is needed to add the styles with a ref for every single letter.

  const refA = useRef<SVGPathElement | null>(null)
  const refR = useRef<SVGPathElement | null>(null)
  const refE = useRef<SVGPolygonElement | null>(null)
  const refT = useRef<SVGPolygonElement | null>(null)
  const refRD = useRef<SVGPathElement | null>(null)
  const refO = useRef<SVGPathElement | null>(null)
  const refN = useRef<SVGPolygonElement | null>(null)

  // The id is needed to make different observers on the same page
  useIntersectionObserver(`#nortera-${id}`, (target: Element) => {
    if (
      refA.current &&
      refR.current &&
      refE.current &&
      refT.current &&
      refRD.current &&
      refO.current &&
      refN.current
    ) {
      refA.current.classList.add('animate-showsUp')
      refR.current.classList.add('animate-showsUp')
      refE.current.classList.add('animate-showsUp')
      refT.current.classList.add('animate-showsUp')
      refRD.current.classList.add('animate-showsDown')
      refO.current.classList.add('animate-showsDown')
      refN.current.classList.add('animate-showsDown')
    }
  })
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1392 233"
      aria-hidden="true"
      id={`nortera-${id}`}
      className={`${className} overflow-visible`}
    >
      <path
        ref={refA}
        d="M1305.3,4.1H1268l0,0l-86.7,225.5h42.5l20.7-54.9h84l21,54.9h42.5L1305.3,4.1z M1255.1,136.6l31.6-88.2
		l31.3,88.2H1255.1z"
        fill="currentColor"
        className="opacity-0"
      ></path>
      <path
        ref={refR}
        d="M1163.3,185.4c-1.5-26.5-3-54-28.8-64h0c21.5-9.4,31.9-32.6,31.9-54.9c0-38.2-29.7-62.4-66.8-62.4h-97.6
		v225.5h37.4v-94.5h38.7c35.7,0,42.6,11.3,45,45.6c0.2,3.7,0.4,7,0.6,10.1v0c0.7,13.7,1.2,23.3,6.1,38.8h42.3
		C1165.2,218.4,1164.2,202.1,1163.3,185.4z M1090.8,102.4h-51.3v-66h51.3c21.8,0,38.5,9.3,38.5,33.3
		C1129.3,93.8,1112.8,102.4,1090.8,102.4z"
        fill="currentColor"
        className="opacity-0"
      ></path>
      <polygon
        ref={refE}
        points="824.7,229.6 974,229.6 974,193.3 861.2,193.3 861.2,132.9 967.3,132.9 967.3,98 861.2,98 861.2,40.6 
		974,40.6 974,4.1 824.7,4.1 824.7,229.6 "
        fill="currentColor"
        className="opacity-0"
      ></polygon>
      <polygon
        ref={refT}
        points="615,40.6 615,4.1 806.1,4.1 806.1,40.6 729.3,40.6 729.3,229.6 692.8,229.6 692.8,40.6 "
        fill="currentColor"
        className="opacity-0"
      ></polygon>
      <path
        ref={refRD}
        d="M602.7,185.4c-1.5-26.5-3-54-28.8-64c21.5-9.4,31.9-32.6,31.9-54.9l0,0c0-38.2-29.7-62.4-66.8-62.4h-97.6
		v225.5h37.4v-94.5h38.7c35.7,0,42.6,11.3,45,45.6c0.2,3.7,0.4,7,0.6,10.1v0l0,0c0.7,13.7,1.2,23.3,6.1,38.8h42.3
		C604.6,218.4,603.6,202.1,602.7,185.4z M530.2,102.4h-51.3v-66h51.3c21.8,0,38.5,9.3,38.5,33.3
		C568.7,93.8,552.2,102.4,530.2,102.4z"
        fill="currentColor"
        className="opacity-0"
      ></path>
      <path
        ref={refO}
        d="M312.3,1c-65.4,0-107.4,53.8-107.4,116.4c0,62.6,42.3,115.4,107.4,115.4c65.1,0,107.4-53.2,107.4-115.4
			C419.7,55.1,377.7,1,312.3,1z M312.3,194.7c-44.4,0-68.5-36.7-68.5-77.8c0-41.2,24.2-77.8,68.5-77.8c44.4,0,68.5,36.7,68.5,77.8
			C380.8,158,356.7,194.7,312.3,194.7z"
        fill="currentColor"
        className="opacity-0"
      ></path>
      <polygon
        ref={refN}
        points="147.3,177.3 45,4.1 0,4.1 0,229.6 35.8,229.6 35.8,62 135,229.6 183.2,229.6 183.2,4.1 147.3,4.1 "
        fill="currentColor"
        className="opacity-0"
      ></polygon>
    </svg>
  )
}

export default Nortera
