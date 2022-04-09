import React from "react";
import kalIcon from "~/assets/image/kal.png";

export const Logo: React.VFC = () => {
    return (
        <div>
            <img src={kalIcon} />
            <div>
                <div>Kal,</div>
                <div>It{"'"}s me! Garebare</div>
            </div>
        </div>
    );
};