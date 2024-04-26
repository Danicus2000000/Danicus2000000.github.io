import './App.css';

function App() {
  return (
    <div>
    <nav class="navbar background">
        <ul class="nav-list">
            <div class="logo">
                <a
                  href="#Home">
                  <img src="../icon.ico" alt="Home Icon"/>
                  </a>
            </div>
            <li>
                <a href="#Home">Home</a>
            </li>
            <li>
                <a href="#Projects">Projects</a>
            </li>
            <li>
                <a href="mailto:testertestington940@gmail.com">Email Me</a>
            </li>
            <li>
                <a href="https://thelanbeforetimes.wordpress.com/">My Blog</a>
            </li>
        </ul>
    </nav>

    <section class="section">
        <div class="box-main">
            <div class="firstHalf">
                <h1 class="text-big">Test section header</h1>
                <p class="text-small">Test body</p>
            </div>
        </div>
    </section>
</div>
  );
}

export default App;
