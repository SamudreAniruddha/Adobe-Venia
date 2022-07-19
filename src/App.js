
import HeaderComponent from './components/Header/HeaderComponent';
import FooterComponent from './components/Footer/FooterComponent';
import './App.scss';

function App(props) {
  return (
    <div className='container'>
       <HeaderComponent />
      {props.children}
      <FooterComponent />
    </div>
  );
}

export default App;
