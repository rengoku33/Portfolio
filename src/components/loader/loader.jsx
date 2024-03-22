import React from "react";
//import {ReactComponent as WitcherLogo} from "../../assets/the-witcher-001.svg"
import WitcherLogo from "../logo/witcher.svg";
import "./loader.css"

const Loader = () => {
    return(
        <div className="loader">
            <div className="svg-wrapper">
                <WitcherLogo />
            </div>
        </div>
    )
}

export default Loader;