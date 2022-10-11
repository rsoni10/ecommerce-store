
import './App.css';
import { BrowserRouter as Router, useRoutes} from 'react-router-dom';
import Header from './container/Header';
import ProductListing from './container/ProductListing';
import ProductDetail from './container/ProductDetail';
const MyRoutes =  () =>{
  const routes = useRoutes([
  {path:"/" , element:<ProductListing/>},
  {path:"/product/:productId" , element:<ProductDetail/>}
  ])
  return routes
}
function App() {
  return (
    <div className="App">
     <h1>app page</h1>
     <Header/>
     <Router>
      <MyRoutes/>
     </Router>
    </div>
  );
}

export default App;
