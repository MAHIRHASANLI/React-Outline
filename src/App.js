import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes/ROUTES";
import { BasketContextProvider } from "./pages/globalCompanent/BasketContext";
// import { BasketContextProvider } from "./pages/globalCompanent/BasketContext";


const routes = createBrowserRouter(ROUTES)

function App() {
  return (
    <BasketContextProvider>
      <RouterProvider router={routes}/>
    </BasketContextProvider>
  );
}

export default App;
