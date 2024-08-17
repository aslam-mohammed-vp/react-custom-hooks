import logo from './logo.svg';
import './App.css';
import useIsOnline from './custom-hooks/UseOnline/useOnline';

function App() {

  const isOnline = useIsOnline();
  return (
    <div className="App">
      {isOnline}
    </div>
  );
}

export default App;
