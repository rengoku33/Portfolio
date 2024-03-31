import React from "react";
//import {ReactComponent as WitcherLogo} from "../../assets/the-witcher-001.svg"
import WitcherLogo from "../logo/witcher.svg";
import "./loader.css"

const Loader = () => {
    return (
        <div>
            <div className="loader">
                <div className="svg-wrapper">
                    <WitcherLogo />
                </div>
            </div>
            <h1 className="waitText">Rendering Components, please wait</h1>
        </div>
    )
}

/*const Loader = () => {
    return(
        <div>
            <PageHeader />
        </div>
    )
}*/

export default Loader;