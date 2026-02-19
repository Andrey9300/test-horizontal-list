import cn from 'classnames'
import { useState, useEffect, useRef } from 'react'
import { TContent } from '@/store/features/content/content'
import styles from './contentList.module.css'

type TContentList = {
  items: TContent[]
}

export const ContentList = ({ items }: TContentList) => {
  const itemRefs = useRef<HTMLDivElement[] | null>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!itemRefs.current) {
      return
    }

    itemRefs.current[0]?.focus()
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => Math.min(prev + 1, items.length - 1))
      }

      if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => Math.max(prev - 1, 0))
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [items.length])

  useEffect(() => {
    const el = itemRefs.current?.[currentIndex]

    if (!el) {
      return
    }

    el.scrollIntoView({
      behavior: 'smooth',
      inline: 'start',
      block: 'nearest',
    })

    el.focus()
  }, [currentIndex])


  return (
    <div className={styles.carousel}>
      {items.map(({ title, images }, index) => (
        <div
          key={index}
          // @ts-ignore
          ref={(el) => (itemRefs.current[index] = el)}
          tabIndex={0}
          className={cn(styles.item, {
            [styles.active]: index === currentIndex,
          })}
        >
          <img
            src={images.artwork_portrait}
            alt={title}
            title={title}
            className={styles.item}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  )
}
