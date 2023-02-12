import React from "react";
import {useNavigate} from "react-router";

export const HomePage = () =>{
    const navigate = useNavigate()

    return(
        <div className="text-center">
            <button
            onClick={() =>navigate("/gamelist")}
            >

            </button>
        </div>
    )
}