import styles from './ContentWindow.module.css'
import PalInput from '../PalInput/PalInput'

const ContentWindow = () => {
    
    return (
        <div className={styles.contentWindow}>
            <h1 className={styles.title}>
                Word
                <br />
                Palindrome
            </h1>
            <PalInput />
        </div>
    )
}

export default ContentWindow