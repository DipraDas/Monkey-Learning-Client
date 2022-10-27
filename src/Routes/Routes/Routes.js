import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Blog from "../../Pages/Blog/Blog";
import Course from "../../Pages/Course/Course";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses";
import Faq from "../../Pages/Faq/Faq";
import GetPremiumAccess from "../../Pages/GetPremiumAccess/GetPremiumAccess";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import NotFound from "../../Pages/NotFound/NotFound";
import PrivateRoutes from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://server-sigma-nine.vercel.app/courses')
            },
            {
                path: '/course',
                element: <Course></Course>,
                loader: () => fetch('https://server-sigma-nine.vercel.app/course')
            },
            {
                path: '/course/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://server-sigma-nine.vercel.app/course/${params.id}`)
            },
            {
                path: '/premiumAccess/:id',
                element: <PrivateRoutes><GetPremiumAccess></GetPremiumAccess></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://server-sigma-nine.vercel.app/course/${params.id}`)
            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
        ],
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    },
])