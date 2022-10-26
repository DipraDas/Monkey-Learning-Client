import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Blog from "../../Pages/Blog/Blog";
import Course from "../../Pages/Course/Course";
import Courses from "../../Pages/Courses/Courses";
import Faq from "../../Pages/Faq/Faq";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";

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
                element: <Courses></Courses>
            },
            {
                path: '/course/:id',
                element: <Course></Course>
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
        ]
    }
])