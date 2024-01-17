import { Header } from './components/header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Edgar Lins" 
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi tenetur, doloremque eligendi sunt eius aliquid ipsa iure, ipsum magni officia totam. Qui quisquam sunt vero pariatur tempora quos architecto consequatur!"
          />

          <Post 
            author="Gabriel Buzzi" 
            content="Um novo post muito legal"
          />
        </main>
      </div>
      
    </div>
  )
}

