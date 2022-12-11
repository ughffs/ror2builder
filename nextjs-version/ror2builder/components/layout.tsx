import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

export type LayoutProps = {
    children?: React.ReactNode;
    home: boolean;
};

const Layout = (props: LayoutProps) => {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Item builder for Risk of Rain 2!"
                />
            </Head>

            <header className={styles.header}>
                Risk of Rain 2 Builder
            </header>

            <main>{props.children}</main>

            {!props.home && (
                <div className={styles.backToHome}>
                    <Link href="/">← Back to home</Link>
                </div>
            )}

        </div>
    );
};

export default Layout;
