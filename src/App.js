import { Example1 } from './expamples/Example1';
import { Example2 } from './expamples/Example2';
import { Example3 } from './expamples/Example3';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="example-container">
        <Example1 />
      </div>
      <div className="example-container">
        <Example2 />
      </div>
      <div className="example-container">
        <Example3 />
      </div>
    </div>
  );
}

export default App;
