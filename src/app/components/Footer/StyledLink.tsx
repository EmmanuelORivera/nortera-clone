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
    <div>
      <Link
        href={href}
        className={`${className} ${style} inline-block relative group before:content-[''] before:absolute before:bg-white before:h-[.5px] before:w-full before:bottom-0 before:rounded before:origin-right before:scale-x-0 before:transition before:ease-in-out hover:before:origin-left hover:before:scale-x-100`}
      >
        {children}
      </Link>
    </div>
  )
}

export default StyledLink
