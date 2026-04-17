import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './layout/MainLayout.jsx';
import Home from './components/Home.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import CoffeeDetails from './components/CoffeeDetails.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import LearnMore from './components/LearnMore.jsx';
import AllCoffees from './components/AllCoffees.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch('https://espresso-emporium-coffee-store-back-six.vercel.app/coffees'),
        Component: Home
      },
      {
        path: "coffee/:id",
        loader: ({ params }) => fetch(`https://espresso-emporium-coffee-store-back-six.vercel.app/coffees/${params.id}`),
        Component: CoffeeDetails
      },
      {
        path: "addcoffee",
        Component: AddCoffee
      },
      {
        path: "updatecoffee/:id",
        loader: ({ params }) => fetch(`https://espresso-emporium-coffee-store-back-six.vercel.app/coffees/${params.id}`),
        Component: UpdateCoffee
      },
      {
        path: "learnmore",
        Component: LearnMore
      },
      {
        path: "allcoffees",
        loader: () => fetch('https://espresso-emporium-coffee-store-back-six.vercel.app/coffees'),
        Component: AllCoffees
      },
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
