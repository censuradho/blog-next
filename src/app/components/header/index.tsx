import Image from "next/image";

export function Header () {
  return (
    <header>
      <Image 
        src="/logo.webp"
        alt="Logo"
        width={40}
        height={40}
      />
    </header>
  )
}