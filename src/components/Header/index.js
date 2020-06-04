import React from "react";

function Header ( props )
{
    return <div className="jumbotron bg-secondary">
        <div className="display-4 text-center">
            Boondocks Memory Game
    </div>
        <p className="lead text-center">
            Click on an image to earn points, but don't click an the same image twice or GAME OVER!
    </p>
<p className="float-right score text-white"> Your Score: {props.score} | High Score: {props.highScore}</p>
    </div>;
}

export default Header;


