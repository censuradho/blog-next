import Image from "next/image";

import styles from './styles.module.css'
import Link from "next/link";
import { paths } from "@/constants/paths";
import { TextInput } from "@/components/forms";

export function Header () {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <Link href={paths.home} aria-label="Voltar para o início">
          <Image 
            src="/logo.webp"
            alt="Logo"
            width={40}
            height={40}
            className={styles.header__logo}
          />
        </Link>
        <form className={styles.header__search_form}>
          <TextInput 
            placeholder="Pesquisar..."
            rightIcon={{
              name: 'search'
            }}
          />
        </form>
      </div>
    </header>
  )
}