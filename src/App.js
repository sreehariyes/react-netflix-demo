
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Bannerr from './Components/Bannerr/Bannerr';
import RowPost from './Components/RowPost/RowPost';
import { action,Orginals,horror } from './Urls';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Bannerr />
      <RowPost url={action} title='NetFlix Orginals'/>
      <RowPost url={Orginals}title='Action' isSmall />
      <RowPost url={horror}title='Horror' isSmall />
    </div>
  );
}

export default App;
