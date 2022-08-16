import styles from './PalInput.module.css'
import { useState } from 'react'

const PalInput = (props) => {

    const [inputValue, setInputValue] = useState('')

    const noNumber = (value) => {

        if (!isNaN(Number(value)) && value.split('').length > 0) {
            return
        }
        setInputValue(value)
    }

    const palindrome = (word) => {
        if (word.split('').length < 1) {
            return
        }
        if (word.toLowerCase() === word.toLowerCase().split('').reverse().join('')) {
            return ` is a Palindrome`
        } else {
            return ` is not a Palindrome`
        }
    }

    return (
        <>
            <input onChange={(e) => noNumber(e.target.value)} value={inputValue} className={styles.palInput} placeholder='Enter a word'></input>
            <p className={styles.palOutput}>{inputValue}{palindrome(inputValue)}</p>
        </>
    )

}

export default PalInput


