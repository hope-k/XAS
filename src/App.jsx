import {
  createBrowserRouter,
  Routes,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import ErrorBoundary from "./components/errorHandler/ErrorBoundary";
import "./App.css";
import { Footer } from "./components/footer/Footer";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);

  return (
    <ErrorBoundary>
      <RouterProvider router={router}>
        <Routes />
      </RouterProvider>
    </ErrorBoundary>
  );
}

export default App;
