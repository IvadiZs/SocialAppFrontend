import React, { useState, useEffect } from 'react';

export function LinkPostList() {

    const [links, setLinks] = useState([]);
    const [linkIndex, setLinkIndex] = useState(0);

    const changeLinkIndex = (operation) => {
        if (operation === "decrement") {
            setLinkIndex(linkIndex - 9);
        } else if (operation === "increment"){
            setLinkIndex(linkIndex + 9);
        }
    }

    useEffect(() => {
        setLinks([
            "https://link1.com/",
            "https://link2.com/",
            "https://link3.com/",
            "https://link4.com/",
            "https://link5.com/",
            "https://link6.com/",
            "https://link7.com/",
            "https://link8.com/",
            "https://link9.com/",
            "https://link10.com/",
            "https://link11.com/",
            "https://link12.com/",
            "https://link13.com/",
        ]);
    }, []);

    return(
        <div>
            {/*Első sor*/}
            <div style = {{
                display: "flex"
            }}>
                {/*I.*/}
                <div>
                    {(links.length > linkIndex) && (
                        <>
                            <a href = {links[linkIndex]}>{links[linkIndex]}</a>
                        </>
                    )}
                </div>

                {/*I.*/}
                <div>
                    {(links.length > linkIndex + 1) && (
                        <>
                            <a href = {links[linkIndex + 1]}>{links[linkIndex + 1]}</a>
                        </>
                    )}
                </div>

                {/*I.*/}
                <div>
                    {(links.length > linkIndex + 2) && (
                        <>
                            <a href = {links[linkIndex + 2]}>{links[linkIndex + 2]}</a>
                        </>
                    )}
                </div>
            </div>

            {/*Második sor*/}
            <div style = {{
                display: "flex"
            }}>
                {/*I.*/}
                <div>
                    {(links.length > linkIndex + 3) && (
                        <>
                            <a href = {links[linkIndex + 3]}>{links[linkIndex + 3]}</a>
                        </>
                    )}
                </div>

                {/*I.*/}
                <div>
                    {(links.length > linkIndex + 4) && (
                        <>
                            <a href = {links[linkIndex + 4]}>{links[linkIndex + 4]}</a>
                        </>
                    )}
                </div>

                {/*I.*/}
                <div>
                    {(links.length > linkIndex + 5) && (
                        <>
                            <a href = {links[linkIndex + 5]}>{links[linkIndex + 5]}</a>
                        </>
                    )}
                </div>
            </div>

            {/*Harmadik sor*/}
            <div style = {{
                display: "flex"
            }}>
                {/*I.*/}
                <div>
                    {(links.length > linkIndex + 6) && (
                        <>
                            <a href = {links[linkIndex + 6]}>{links[linkIndex + 6]}</a>
                        </>
                    )}
                </div>

                {/*I.*/}
                <div>
                    {(links.length > linkIndex + 7) && (
                        <>
                            <a href = {links[linkIndex + 7]}>{links[linkIndex + 7]}</a>
                        </>
                    )}
                </div>

                {/*I.*/}
                <div>
                    {(links.length > linkIndex + 8) && (
                        <>
                            <a href = {links[linkIndex + 8]}>{links[linkIndex + 8]}</a>
                        </>
                    )}
                </div>
            </div>

            {/*Vissza gomb*/}
            <div>
                {(linkIndex !== 0) && (
                    <button onClick={() => changeLinkIndex("decrement")}>
                        {"<<"}
                    </button>
                )}
            </div>

            {/*Tovább gomb*/}
            <div>
                {(links.length > linkIndex + 2) && (
                    <button onClick={() => changeLinkIndex("increment")}>
                        {">>"}
                    </button>
                )}
            </div>
        </div>
    );
}