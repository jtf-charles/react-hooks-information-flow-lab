import React from "react";

function Header( {onDarkModeClick, checkMode} ){


    return (
        <header>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>
            {checkMode ? "Light": "Dark" } Mode
            </button>
        </header>
    )
}

export default Header;