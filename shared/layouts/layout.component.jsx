import Link from "next/link";
import CardNew from "../components/cardNew/index";
import styles from './index.module.scss'

const Layout = ({children}) => {
    return (  
        <div className={styles.container}>
            <header>
                <nav className={styles.nav}>
                    <Link href="/">
                        <a className={styles.logo}>Hacker News</a>
                    </Link>
                    <Link href="#">
                        <a>New</a>
                    </Link>
                    <Link href="#">
                        <a>Past</a>
                    </Link>
                    <Link href="#">
                        <a>Comments</a>
                    </Link>
                </nav>
            </header>
            <main>
              {children}
            </main>
            <footer>
            </footer>
        </div>
    );
}
 
export default Layout;