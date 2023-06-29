import Image from 'next/image';
import styles from 'src/styles/Home.module.css';
import '../app/globals.css'; 

export default function Home() {
  const products = [{id: 1,name: 7}, {id: 2,name: 3}, {id: 3,name: 15},
                     {id: 4,name: 1}, {id: 5,name: 11}, {id: 6,name: 9} ];
  return (
    
    <div className={styles.container}>
      <main className={styles.main}>
        <h4 className={styles.title}>
          Sorting Algorithms
        </h4>
        <br></br>
        <div className={styles.dflex}>
                {products && products.length>0 && 
                products
                .sort((a, b) => a.name - b.name)
                .map(products => (
                      <p key={products.id}> 
                        {products.name},
                      </p> 
                ))}
        </div>
      </main>






      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}