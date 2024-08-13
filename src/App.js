import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client"
import { createBrowserRouter } from "react-router-dom";
import { Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <div className="container lg:px-6">
                <Outlet />
            </div>
        </div>
    );
}

const Offers = lazy(() => import("./pages/Offers"));
const Settings = lazy(() => import("./pages/Settings"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/restaurant/:id",
                element: <Restaurant />
            },
            {
                path: "/offers",
                element: <Suspense fallback={<h1>Loading...</h1>}><Offers /></Suspense>
            },
            {
                path: "/settings",
                element: <Suspense fallback={<h1>Loading...</h1>}><Settings /></Suspense>
            }
        ],
        errorElement: <Error />
    },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);