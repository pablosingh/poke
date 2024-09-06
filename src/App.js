import { BrowserRouter as Router } from 'react-router-dom';

// ===================== Components =====================
import Head from './components/Head';
import Body from './components/Body';

// ===================== Redux =====================
import { Provider } from 'react-redux';
import store from './redux/store';

// ===================== Styles ======================
import s from'./App.module.css';
import styled from 'styled-components';
import image from './img/azul.jpeg';

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fondo>
          <div className={s.App}>
            <Head/>
            <Body/>
          </div>
        </Fondo>
      </Router>
    </Provider>
  );
}

const Fondo = styled.div`
  min-height: 100vh;
  max-width: 100vw;
    &::before{
        content: '';
        position: fixed;
        top: 15vh;
        min-width: 100vw;
        min-height: 100vh;
        background-repeat: repeat-y;
        background: url(${image});
        opacity: 0.9;
        z-index: -1;
    }
`;
