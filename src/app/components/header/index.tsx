'use client'

import Image from "next/image";

import styles from './styles.module.css'
import Link from "next/link";
import { paths } from "@/constants/paths";
import { TextInput } from "@/components/forms";
import { FormEvent, useState } from "react";

import q from 'querystring'

import { useRouter } from 'next/navigation'

export function Header () {
  const [search, setSearch] = useState('')

  const router = useRouter()
  
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    const query = q.stringify({
      q: search
    })

    router.push(`${paths.search}?${query}`)
  }

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
        <form onSubmit={handleSubmit} className={styles.header__search_form}>
          <TextInput 
            placeholder="Pesquisar..."
            value={search}
            onChange={event => setSearch(event.target.value)}
            rightIcon={{
              name: 'search'
            }}
          />
        </form>
      </div>
    </header>
  )
}