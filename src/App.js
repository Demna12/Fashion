import Promo from './components/Promo/Promo';
import Header from './components/header/Header';
import Brands from './components/brands/Brands';
import Arrivals from './components/arrivals/Arrivals';
import Payday from './components/payday/Payday';
import Favourite from './components/favourite/Favourite';

function App() {
    return (
        <div className="App">
            <Header />
            <Promo />
            <Brands />
            <Arrivals/>
            <Payday/>
            <Favourite/>
        </div>
    );
}

export default App;
