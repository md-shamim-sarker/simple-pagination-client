import {createBrowserRouter} from "react-router-dom";
import AddProducts from "../components/AddProducts/AddProducts";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Products from "../components/Products/Products";
import Main from "../layouts/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Products></Products>
            },
            {
                path: "/add-products",
                element: <AddProducts></AddProducts>
            }
        ],
        errorElement: <ErrorPage></ErrorPage>
    }
]);

export default router;