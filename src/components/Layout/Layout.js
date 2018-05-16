import React from "react";
import "./Layout.css";

const Layout = (props) => {
    return (
        <div className="layout">
            <div>Toolbar, SideDrawer, Backdrop</div>
            <main className="layout__content">
                {props.children}
            </main>
        </div>
    )
}

export default Layout;