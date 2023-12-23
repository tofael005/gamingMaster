import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />
    }
])
export default router;