import { useEffect, useRef } from 'react'
import { TContent } from '@/store/features/content/content'
import styles from './contentList.module.css'
import { ContentItem } from '@/components/ui/contentItem/ContentItem'

type TContentList = {
  items: TContent[]
}
const SCROLL_AMOUNT = 300

export const ContentList = ({ items }: TContentList) => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        containerRef.current?.scrollBy({
          left: -SCROLL_AMOUNT,
          behavior: 'smooth',
        })
      }

      if (e.key === 'ArrowLeft') {
        containerRef.current?.scrollBy({
          left: SCROLL_AMOUNT,
          behavior: 'smooth',
        })
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [items.length])

  return (
    <div className={styles.wrapper}>
      <div className={styles.carousel} ref={containerRef}>
        {items.map(({ title, images }) => (
          <ContentItem title={title} image={images.artwork_portrait} />
        ))}
      </div>
    </div>
  )
}
