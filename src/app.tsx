import { createSignal } from 'solid-js';
import './app.css';

export default function App() {
  return (<>
    <aside>

      <section>
        <h1>Jack Stoller</h1>

        <p>
          I'm a software engineer...
        </p>
      </section>

      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <footer>
        <p>© {new Date().getFullYear()} Jack Stoller</p>
        <p>Published 2024-11-29</p>
      </footer>
    </aside>

    <main>

    </main>
  </>);
}
