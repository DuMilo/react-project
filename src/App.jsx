import { Header } from './components/Header';
import './global.css';
import styles from './App.module.css';

export function App() {
  
  return (
    <div>
      <Header />

        <div className={styles.wrapper}>
          <aside>
            sidebar<br></br>
            tres
          </aside>
          <main>aqui é o main</main>
        </div>
    </div>
  )
}