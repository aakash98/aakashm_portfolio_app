import styles from 'src/styles/Home.module.css';
import Link from "next/link";
import Image from 'next/image';
import '../app/globals.css';


export default function Movies() { 
     return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h4 className={styles.title}>
                Latest Movies Today
                </h4>

            </main>
        </div>
  );
}