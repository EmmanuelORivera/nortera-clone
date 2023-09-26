import Link from 'next/link'
import { ReactNode } from 'react'

const StyledLink = ({
  type = 'listItem',
  className,
  href,
  children,
}: {
  type?: 'title' | 'listItem'
  className?: string
  href: string
  children: ReactNode
}) => {
  const style = type === 'title' && 'uppercase lg:text-[1.1vw] font-semibold'
  return (
    <Link href={href} className={`${className} ${style} block relative group`}>
      {children}
      <div className="absolute bg-white h-[.5px] w-full bottom-0 rounded origin-right scale-x-0 transition ease-in-out  group-hover:origin-left group-hover:scale-x-100"></div>
    </Link>
  )
}

export default StyledLink
