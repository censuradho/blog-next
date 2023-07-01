import { Icon } from '@/components'
import styles from './styles.module.css'

export function Footer () {
  return (
    <footer className={styles.footer}>
      <span>Publicado com <a target="_blank" rel="noreferrer" href="https://ghost.org/">Ghost CMS</a></span>
      <a aria-label="Repositório no github" target="_blank" rel="noreferrer" href="https://github.com/censuradho/blog-next">
        <Icon name="github" />
      </a>
    </footer>
  )
}