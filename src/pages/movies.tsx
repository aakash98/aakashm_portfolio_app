import styles from 'src/styles/Home.module.css';
import Link from "next/link";
import Image from 'next/image';
import MovieList from './MovieList';
import getMovies from '@/util/getMovies';
import { MoviesType } from '@/util/MovieModel';
import '../app/globals.css';


export default async function Movies() { 
    const movies: MoviesType = await getMovies();
    alert(movies);
    console.log(movies);
     return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h4 className={styles.title}>
                Latest Movies Today
                </h4>
                <div className= "my-12">
                </div>
            </main>
        </div>
  );
}