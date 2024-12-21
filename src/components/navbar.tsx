import Link from "next/link"
import Image from "next/image"
import styles from "./styles/navbar.module.css"

export default function NavBar() {
    return (
        <div className={styles.container}>
            <div className={styles.navlogo}>
                <h3>Custom-CSS</h3>
            </div>
            <div className={styles.navitems}>
                <div className={styles.navLinks}>
                    <ul>
                        <Link href='/'><li><p>Home</p></li></Link>
                        <Link href='/about'><li><p>About</p></li></Link>
                        <Link href='/contact'><li><p>Contact</p></li></Link>
                    </ul>
                </div>
            </div>
            <div className={styles.navbtns}>
                <div className={styles.navlogin}>
                    <a href="#">Login</a>
                </div>
                <div className={styles.navJoins}>
                    <button><p>JOIN US</p></button>

                </div>
            </div>

            <Image className={styles.navimg} src="/hamburger.svg" alt="" width={35} height={25}></Image>

        </div>
    )
}