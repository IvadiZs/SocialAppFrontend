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
            {
              Title: "Link no1",
              Link: "https://link1.com/"
            },
            {
              Title: "Link no2",
              Link: "https://link2.com/"
            },
            {
              Title: "Link no3",
              Link: "https://link3.com/"
            },
            {
              Title: "Link no4",
              Link: "https://link4.com/"
            },
            {
              Title: "Link no5",
              Link: "https://link5.com/"
            },
            {
              Title: "Link no6",
              Link: "https://link6.com/"
            },
            {
              Title: "Link no7",
              Link: "https://link7.com/"
            },
            {
              Title: "Link no8",
              Link: "https://link8.com/"
            },
            {
              Title: "Link no9",
              Link: "https://link9.com/"
            },
            {
              Title: "Link no10",
              Link: "https://link10.com/"
            },
            {
              Title: "Link no11",
              Link: "https://link11.com/"
            },
            {
              Title: "Link no12",
              Link: "https://link12.com/"
            },
            {
              Title: "Link no13",
              Link: "https://link13.com/"
            }
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
                            <h1>{links[linkIndex].Title}</h1>
                            <a href = {links[linkIndex].Link}>{links[linkIndex].Link}</a>
                        </>
                    )}
                </div>

                {/*I.*/}
                <div>
                    {(links.length > linkIndex + 1) && (
                        <>
                            <h1>{links[linkIndex + 1].Title}</h1>
                            <a href = {links[linkIndex + 1].Link}>{links[linkIndex + 1].Link}</a>
                        </>
                    )}
                </div>

                {/*I.*/}
                <div>
                    {(links.length > linkIndex + 2) && (
                        <>
                            <h1>{links[linkIndex + 2].Title}</h1>
                            <a href = {links[linkIndex + 2].Link}>{links[linkIndex + 2].Link}</a>
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
                            <h1>{links[linkIndex + 3].Title}</h1>
                            <a href = {links[linkIndex + 3].Link}>{links[linkIndex + 3].Link}</a>
                        </>
                    )}
                </div>

                {/*I.*/}
                <div>
                    {(links.length > linkIndex + 4) && (
                        <>
                            <h1>{links[linkIndex + 4].Title}</h1>
                            <a href = {links[linkIndex + 4].Link}>{links[linkIndex + 4].Link}</a>
                        </>
                    )}
                </div>

                {/*I.*/}
                <div>
                    {(links.length > linkIndex + 5) && (
                        <>
                            <h1>{links[linkIndex + 5].Title}</h1>
                            <a href = {links[linkIndex + 5].Link}>{links[linkIndex + 5].Link}</a>
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
                            <h1>{links[linkIndex + 6].Title}</h1>
                            <a href = {links[linkIndex + 6].Link}>{links[linkIndex + 6].Link}</a>
                        </>
                    )}
                </div>

                {/*I.*/}
                <div>
                    {(links.length > linkIndex + 7) && (
                        <>
                            <h1>{links[linkIndex + 7].Title}</h1>
                            <a href = {links[linkIndex + 7].Link}>{links[linkIndex + 7].Link}</a>
                        </>
                    )}
                </div>

                {/*I.*/}
                <div>
                    {(links.length > linkIndex + 8) && (
                        <>
                            <h1>{links[linkIndex + 8].Title}</h1>
                            <a href = {links[linkIndex + 8].Link}>{links[linkIndex + 8].Link}</a>
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