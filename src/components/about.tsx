import Link from "next/link"
import styles from "./styles/style.module.css"

export default function Abouthero() {
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.section}>
                    <h5>About Page</h5>
                    <h1>Simple Tailwind About Page</h1>
                    <h4>We know how large objects will act, but things on a
                        small scale just do not act that way.</h4>
                    <div className={styles.btns}>
                       <Link href='/contact'> <button className={styles.btn1}>
                            Contact US
                        </button></Link>
                        <Link href='/'> <button className={styles.btn2}>
                           Home
                        </button></Link>
                    </div>
                </div>
            </div>
         
        </div>
    )
}