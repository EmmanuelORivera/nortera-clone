const BurgerIcon = () => {
  return (
    <button className="bg-white h-10 w-10 rounded-full flex items-center justify-center">
      <span role="button" aria-label="Burger Icon" className="w-4 h-5">
        <span
          data-testid="burger-line"
          className="block h-[1px] bg-custom-green my-1 rounded"
        ></span>
        <span
          data-testid="burger-line"
          className="block h-[1px] bg-custom-green my-1 rounded"
        ></span>
        <span
          data-testid="burger-line"
          className="block h-[1px] bg-custom-green my-1 rounded"
        ></span>
      </span>
    </button>
  )
}

export default BurgerIcon
