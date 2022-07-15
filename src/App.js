import './App.css';
import { MisRutas } from './router/MisRutas';
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className='layout'>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Mª Carmen Arias - Desarrolladora</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <meta name="Personal web as a developer portfolio" content="Portfolio" />
        </Helmet>
      <MisRutas />
    </div>
  );
}

export default App;
