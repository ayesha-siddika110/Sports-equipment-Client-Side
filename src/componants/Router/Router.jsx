import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import MainLayout from '../../Layouts/MainLayout/MainLayout';
import Home from '../../Layouts/Home/Home';
import Login from '../../Layouts/Login/Login';
import Register from '../../Layouts/register/Register';

import PrivetRouter from '../PrivetRouter/PrivetRouter';
import AddEquipments from '../../Layouts/AddEquipents/AddEquipments';
import AllEquipments from '../../Layouts/AllEquipments/AllEquipments';

import MyEquipments from '../../Layouts/MyEquipments/MyEquipments';
import UpdateEquipment from '../../Layouts/UpdateEquipments/UpdateEquipment';
import PageError from '../pageError/PageError';
import ViewDetails from '../../Layouts/viewDetails/ViewDetails';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <PageError></PageError>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=> fetch('https://sports-equipments-server-three.vercel.app/sportsEquipments?limit=6')
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }, 
            {
                path: "/allEquipments",
                element: <AllEquipments></AllEquipments>,
                loader: ()=> fetch(`https://sports-equipments-server-three.vercel.app/sportsEquipments`)

            },
            {
                path: "/addEquipments",
                element: <PrivetRouter><AddEquipments></AddEquipments></PrivetRouter>
            },
            {
                path: "/viewDetails/:id",
                element: <PrivetRouter><ViewDetails></ViewDetails></PrivetRouter>,
                loader: ({params})=>fetch(`https://sports-equipments-server-three.vercel.app/sportsEquipments/${params.id}`)
            },
            {
                path: "/myEquipments",
                element: <PrivetRouter>
                    <MyEquipments></MyEquipments>
                </PrivetRouter>,
                loader: ()=>fetch(`https://sports-equipments-server-three.vercel.app/sportsEquipments`)
            },
            {
                path: "/updateEquipments/:id",
                element: <UpdateEquipment></UpdateEquipment>,
                loader: ({params})=>fetch(`https://sports-equipments-server-three.vercel.app/sportsEquipments/${params.id}`)
            }
        ]
    }
])

export default Router;