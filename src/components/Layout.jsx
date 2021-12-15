import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation/Navigation";
import "./style.css"

export const Layout = () => {

    return (
        <>
            <Navigation />
            <div className='container'>
                <Outlet />
            </div>  
        </>
       
    )
}