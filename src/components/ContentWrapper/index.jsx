import styles from './index.module.scss'

const ContentWrapper = ({
    children
  }) => {
  return (
    <div
        className={styles.container}
    >
      {children}
    </div>
  )
}

export default ContentWrapper