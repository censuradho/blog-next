'use client'

import { useEffect, useState } from "react";
import { HighlighProps } from "./types";

import hljs from 'highlight.js'

import 'highlight.js/styles/tokyo-night-dark.css';

export function Highligh (props: HighlighProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  const { innerHTML, className } = props

  useEffect(() => {
    setIsLoaded(true)
    hljs.highlightAll()

  }, [isLoaded])

  return (
    <article
      className={className} 
      dangerouslySetInnerHTML={{
        __html: innerHTML || ''
      }}
    />
  )
}