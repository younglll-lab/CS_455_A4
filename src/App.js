import './index.css'
import Header from './FE/components/Header'
import Cards from './FE/components/Cards'
import AddCard from '../src/FE/components/AddCard'

function App() {
  return (
    <div className="App">
      <Header className="header" title='Welcome to Trading Card' />
      <Cards className='Cards'/>
      <AddCard/>
    </div>
  );
}

export default App;
