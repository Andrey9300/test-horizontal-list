import styles from './contentItem.module.css'

type TContentItem = {
  title: string
  image: string
}

export const ContentItem = ({ title, image }: TContentItem) => {
  return (
      <img
        src={image}
        alt={title}
        title={title}
        className={styles.item}
        loading="lazy"
      />
  )
}