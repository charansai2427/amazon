import './index.css'
import Login from "./components/login";
import Startpage from "./components/startpage";
import Register from "./components/register";
import MovieDetails from "./components/movieDetails";
import Subscription from "./components/payment"
import PrimeHome from './components/primeHome';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/App.css";
import Watchlist from './components/watchlist';



function App() {

  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Startpage />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/wishlist",
      element: <Watchlist/>
    },
{
path:"/payment",
element:<Subscription/>
},
    {
      path: "/primepage",
      element: <PrimeHome />,
    },
    {
      path: "/details/:id",
      element: <MovieDetails />
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
