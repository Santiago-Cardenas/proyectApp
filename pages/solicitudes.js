import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
      <div className={styles.container}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>
        <main>
        
            <div className={styles.title}>
                Solicitudes de estudiantes
            </div>

       
  
        </main>
        </div>
  )
}