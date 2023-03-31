import { Provider } from 'react-redux';
import './App.css';
import Home from './pages/home';
import store from './redux/store/store';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FavouritePage from './components/favouritePage';
import { QueryClient, QueryClientProvider } from 'react-query';


const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element:
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>,
  },
  {
    path: "/favourite",
    element:
      <QueryClientProvider client={queryClient}>
        <FavouritePage />
      </QueryClientProvider>,
  },
])

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
