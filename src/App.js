import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation';
import 'antd/dist/antd.css'
import Footer from './Components/Footer';
import RoutesTree from './Components/RoutesTree';

function App() {
  return (
    <div className="App">
      <Navigation />
      <RoutesTree />
      <Footer />
    </div>
  );
}

export default App;
