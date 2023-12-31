import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/" data-testid="logo">
      <svg
        data-testid="navbar-svg"
        width="20"
        height="20"
        viewBox="0 0 82 82"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="-logo ui-fragments-svg"
      >
        <path
          d="M2 66.5879C2 58.5299 8.49047 52.0001 16.5 52.0001C24.5095 52.0001 31 58.5299 31 66.5879V80.0001H2V66.5879V66.5879Z"
          fill="#F4B006"
        ></path>
        <path
          d="M82 15.5001C82 24.0625 75.0624 31.0001 66.5 31.0001C57.9376 31.0001 51 24.0625 51 15.5001C51 6.93771 57.9376 0.00012207 66.5 0.00012207C75.0624 0.00012207 82 6.93771 82 15.5001Z"
          fill="#4C9E50"
        ></path>
        <path
          d="M79.8293 73.433V80.0001H73.2621C62.8958 80.0001 52.9636 75.8861 45.6257 68.5591L13.441 36.3746C6.114 29.0476 2 19.1046 2 8.73825V2.17108H8.56721C18.9336 2.17108 28.8658 6.28506 36.2037 13.6121L68.3883 45.7966C75.7154 53.1236 79.8293 63.0666 79.8293 73.433Z"
          fill="#1B3D38"
        ></path>
      </svg>
    </Link>
  )
}

export default Logo
