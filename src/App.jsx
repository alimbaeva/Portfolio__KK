import { useState } from 'react';
import { TopBar, News, Portfolio, Intro, Footer, Contacts, Menu } from './component';
import './App.scss';

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu
        items={[
          { name: 'home', link: 'intro' },
          { name: 'portfolio', link: 'portfolio' },
          { name: 'news', link: 'news' },
          { name: 'contacts', link: 'contacts' },

        ]}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <div className="app__sections">
        <Intro />
        <Portfolio />
        <News />
        <Contacts />
        <Footer />
      </div>
    </div>

  );
}

export default App;
