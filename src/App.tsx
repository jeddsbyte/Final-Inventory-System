import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import Error from "./Pages/Error";
import { Dashboard } from "./Components/Dashboard/Dashboard";
import { Contact } from "./Pages/Contact";
import { Analytics } from "./Components/Dashboard/Analytics";
import Reports from "./Components/Dashboard/Reports";
import { Products } from "./Components/Dashboard/Products";
import { Suppliers } from "./Components/Dashboard/Suppliers";
import { Categories } from "./Components/Dashboard/Categories";
import { PurchaseOrders } from "./Components/Dashboard/PurchaseOrders";
import { SalesOrders } from "./Components/Dashboard/SalesOrders";
import { Features } from "./Pages/Features";
import { Register } from "./Pages/Register";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />,
    },

    {
      path: "/contact",
      element: <Contact />,
      errorElement: <Error />,
    },

    {
      path: "/features",
      element: <Features />,
      errorElement: <Error />,
    },

    {
      path: "/login",
      element: <Login />,
      errorElement: <Error />,
    },
    {
      path: "/register",
      element: <Register />,
      errorElement: <Error />,
    },

    {
      path: "/dashboard",
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      ),
      errorElement: <Error />,
      children: [
        {
          path: "analytics",
          element: <Analytics />,
        },
        {
          path: "reports",
          element: <Reports />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "suppliers",
          element: <Suppliers />,
        },
        {
          path: "categories",
          element: <Categories />,
        },
        {
          path: "purchases",
          element: <PurchaseOrders />,
        },
        {
          path: "sales",
          element: <SalesOrders />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
