import { createSignal } from 'solid-js';
import './app.css';
import { Button } from './components/input/Button';
import { Chip } from './components/input/Chip';

export default function App() {
  return (<>
    <aside>

      <section>
        <h1>Jack Stoller</h1>

        <p>
          I'm a software engineer...
        </p>

        <Button>Resume</Button>
        <Chip>three.js</Chip>
        <Chip>JavaScript</Chip>
        <Chip>Web Components</Chip>
      </section>

      <nav>
        <ul>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </nav>

      <footer>
        <p>© {new Date().getFullYear()} Jack Stoller</p>
        <p>Published 2024-11-29</p>
      </footer>
    </aside>

    <main>
      <section id='about'>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <img src='' alt='Jack Stoller' />
      </section>

      <section id='projects'>
        <h2>Projects</h2>

        <ul>
          <li>
            <h3>Project 1</h3>
            <p>
              Description of project 1
            </p>
          </li>
          <li>
            <h3>Project 2</h3>
            <p>
              Description of project 2
            </p>
          </li>
          <li>
            <h3>Project 3</h3>
            <p>
              Description of project 3
            </p>
          </li>
        </ul>
      </section>

      <section id='education'>

        <img src='' alt='University of Akron' />

        <h2>University of Akron</h2>

        <h3>Bachelor of Science in Computer Information Systems, Cybersecurity</h3>

        <h4>Minor in Computer Science</h4>
        <h4>Minor in Business Administration</h4>

        <p>Expected graduation in June 2026.</p>
      </section>

      <section id='contact'>
        <h2>Contact</h2>

        <form>
          <label>
            Name:
            <input type='text' />
          </label>
          <label>
            Email:
            <input type='email' />
          </label>
          <label>
            Message:
            <textarea></textarea>
          </label>
          <button type='submit'>Send</button>
        </form>
      </section>
    </main>
  </>);
}
