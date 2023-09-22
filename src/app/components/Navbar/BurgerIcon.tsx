'use client'
const BurgerIcon = ({
  isOpen,
  setIsOpen,
  setNavigationModalAnimation,
}: {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  setNavigationModalAnimation: React.Dispatch<React.SetStateAction<string>>
}) => {
  const buttonBackground = isOpen ? 'bg-[#dbe7e8]' : 'bg-white'
  const firstLineAnimation = isOpen
    ? 'animate-burgerFirstLine'
    : 'animate-burgerFirstLineClosed'

  const middleLineAnimation = isOpen
    ? 'animate-burgerMiddleLine'
    : 'animate-burgerMiddleLineClosed'

  const lastLineAnimation = isOpen
    ? 'animate-burgerLastLine'
    : 'animate-burgerLastLineClosed'

  const handleClick = () => {
    if (isOpen) {
      setNavigationModalAnimation('animate-hideFromLeft')
    } else {
      setNavigationModalAnimation('animate-showsFromRight')
    }
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }
  return (
    <button
      onClick={handleClick}
      className={`${buttonBackground}  h-10 w-10 rounded-full flex items-center justify-center`}
    >
      <span role="button" aria-label="Burger Icon" className="w-4 h-4">
        <span
          data-testid="burger-line"
          className={`block h-[1px] w-full bg-custom-green my-1 rounded ${firstLineAnimation}`}
        ></span>
        <span
          data-testid="burger-line"
          className={`block h-[1px] w-full bg-custom-green my-1 rounded ${middleLineAnimation}`}
        ></span>
        <span
          data-testid="burger-line"
          className={`block h-[1px] w-full bg-custom-green my-1 rounded ${lastLineAnimation}`}
        ></span>
      </span>
    </button>
  )
}

export default BurgerIcon
