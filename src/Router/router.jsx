import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home";
import Error from "../components/Error";
import About from "../Pages/About/About";
import Portfolio from "../Pages/Portfolio/Portfolio";
import News from "../Pages/News/News";
import Contact from "../Log/Contact";
import AllGame from "../components/TendingGame/AllGame";
import ProjectAll from "../components/Project/ProjectAll";
import ReadOne from "../Pages/Portfolio/ReadOne";
import ReadTwo from "../Pages/Portfolio/ReadTwo";
import ReadThree from "../Pages/Portfolio/ReadThree";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <Error />,
        children: ([
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/portfolio",
                element: <Portfolio />
            },
            {
                path: "/news",
                element: <News />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/allGame",
                element: <AllGame />
            },
            {
                path: "/projectAll",
                element: <ProjectAll />
            },
            {
                path: "/reed-more1",
                element: <ReadOne />
            },
            {
                path: "/reed-more2",
                element: <ReadTwo />
            },
            {
                path: "/reed-more3",
                element: <ReadThree />
            }
        ])
    }

])
export default router;