import css from './App.module.css';
import NameForm from '../NameForm';
import Calculator from '../Calculator';

function App() {

return (
  <div className={css.App}>
    <NameForm />
    <Calculator />
  </div>
);

}


export default App;
