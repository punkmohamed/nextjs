import SideBar from "@/components/sideBar/SideBar";
import React from "react";

const layout = ({ children }) => {

    return <>
        <div className="m-25">
            <SideBar className="md:w-64 xl:w-80" />
        </div>
        <div className="p-10">{children}</div>;
    </>

};

export default layout;
