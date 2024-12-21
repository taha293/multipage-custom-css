import Link from "next/link"
import styles from "./styles/style.module.css"

export default function Homehero() {
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.section}>
                    <h5>Welcome</h5>
                    <h1>Selling on the internet like a pro</h1>
                    <h4>We know how large objects will act, but things on a
                        small scale just do not act that way.</h4>
                    <div className={styles.btns}>
                        <Link href='/contact'> <button className={styles.btn1}>
                            Contact US
                        </button></Link>
                        <Link href='/about'> <button className={styles.btn2}>
                            About US
                        </button></Link>
                    </div>
                </div>
            </div>

        </div>
    )
}