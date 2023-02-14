import {Route, Routes} from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import PriceInfo from './PriceInfo';
import PriceSelect from './PriceSelect';
import ProductLocationSelect from './ProductLocationSelect';
import ProductLocation from './ProductLocation';
import SearchResult from './SearchResult';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/priceInfo" element={<PriceInfo/>}/>
        <Route path="/priceSelect" element={<PriceSelect/>}/>
        <Route path="/productLocationSelect" element={<ProductLocationSelect/>}/>
        <Route path="/productLocation" element={<ProductLocation/>}/>
        <Route path="/searchResult" element={<SearchResult/>}/>
      </Routes>
    </>
  );
}

export default App;
