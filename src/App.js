import './App.css';

import Header from './component/Header';
import Posts from './component/Posts';
import User from './component/User';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Posts></Posts>
      <div>
        <User></User>
      </div>
    </div>
  );
}

export default App;
