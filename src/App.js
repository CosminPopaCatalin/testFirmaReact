import logo from './logo.svg';
import './App.css';
import SignatureCanvas from 'react-signature-canvas'

function App() {
  return (
    <div className="App">
      <h1>TEST FIRMA ITC SOLUTIONS</h1>
      <SignatureCanvas penColor='green'
    canvasProps={{width: 700, height: 300, className: 'sigCanvas'}} />
    </div>
  );
}

export default App;
