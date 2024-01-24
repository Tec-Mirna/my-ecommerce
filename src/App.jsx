import { RouterProvider } from "react-router"
import { createBrowserRouter } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { LoginPage } from "./pages/LoginPage"
import { ProductPage } from "./pages/ProductPage"
import {NotFoundPage} from "./pages/NotFoundPage"

function App() {

  const routes = createBrowserRouter([
    {path: '/', element: <HomePage/>},
    {path: '/login', element: <LoginPage/>},
    {path: '/auth/products', element: <ProductPage />},
    {path: '*', element: <NotFoundPage/>}

  ])
  
  return (
    <>
    {/*Indica que App que ya no servirá como renderziador principal */}
    <RouterProvider router={routes}/>
    </>
  )
}

export default App
