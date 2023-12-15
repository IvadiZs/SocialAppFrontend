import React, { useState, useEffect } from 'react';

export function MainPage() {
    const [images, setImages] = useState([]);
    const [forum, setForum] = useState([]);
    const [links, setLinks] = useState([]);
    const [imageIndex, setImageIndex] = useState(0);
    const [forumIndex, setForumIndex] = useState(0);
    const [linkIndex, setLinkIndex] = useState(0);

    const changeImageIndex = (operation) => {
        if (operation === "decrement") {
            setImageIndex(imageIndex - 3);
        } else if (operation === "increment"){
            setImageIndex(imageIndex + 3);
        }
    }

    const changeForumIndex = (operation) => {
        if (operation === "decrement") {
            setForumIndex(forumIndex - 3);
        } else if (operation === "increment"){
            setForumIndex(forumIndex + 3);
        }
    }

    const changeLinkIndex = (operation) => {
        if (operation === "decrement") {
            setLinkIndex(linkIndex - 3);
        } else if (operation === "increment"){
            setLinkIndex(linkIndex + 3);
        }
    }

    {/*Tesztadatok - törölhetőek, a működés tesztelése végett lettek létrehozáva
      (Akárcsak a patkány gif-fes mappa)*/}

    useEffect(() => {
        setImages([
            require(`./Tesztadatok-torolheto/rat1.gif`),
            require(`./Tesztadatok-torolheto/rat2.gif`),
            require(`./Tesztadatok-torolheto/rat3.gif`),
            require(`./Tesztadatok-torolheto/rat4.gif`),
            require(`./Tesztadatok-torolheto/rat5.gif`),
        ]);

        setForum([
            {
                Title: "Cím1",
                Content: "Ez a cím1 szövege"
            },
            {
                Title: "Cím2",
                Content: "Ez a cím2 szövege"
            },
            {
                Title: "Cím3",
                Content: "Ez a cím3 szövege"
            },
            {
                Title: "Cím4",
                Content: "Ez a cím4 szövege"
            },
            {
                Title: "Cím5",
                Content: "Ez a cím5 szövege"
            },
        ]);

        setLinks([
            "https://link1.com/",
            "https://link2.com/",
            "https://link3.com/",
            "https://link4.com/",
            "https://link5.com/",
        ]);

    }, [])

    {/*Tesztadatok vége*/}

    return (
        <div>
            <div>
                {/* 1. blokk: Média tartalmak */}
                <div style={{ 
                    display: "flex" 
                    }}>
                    {/*Vissza gomb*/}
                    <div>
                        {(imageIndex !== 0) && (
                            <button onClick={() => changeImageIndex("decrement")}>
                                {"<<"}
                            </button>
                        )}
                    </div>

                    {/*Első poszt*/}
                    <div>
                        {images.length > imageIndex && (
                            <>
                            <img
                                src={images[imageIndex]}
                                style={{
                                width: "20vh",
                                height: "20vh"
                                }}
                                alt={`image-${imageIndex + 1}`}
                            />
                            <h1>{imageIndex + 1}.</h1>
                            </>
                        )} 
                    </div>

                    {/*Második poszt*/}
                    <div>
                    {images.length > imageIndex + 1 && (
                            <>
                            <img
                                src={images[imageIndex + 1]}
                                style={{
                                width: "20vh",
                                height: "20vh"
                                }}
                                alt={`image-${imageIndex + 2}`}
                            />
                            <h1>{imageIndex + 2}.</h1>
                            </>
                        )} 
                    </div>

                    {/*Harmadik poszt*/}
                    <div>
                    {images.length > imageIndex + 2 && (
                            <>
                            <img
                                src={images[imageIndex + 2]}
                                style={{
                                width: "20vh",
                                height: "20vh"
                                }}
                                alt={`image-${imageIndex + 3}`}
                            />
                            <h1>{imageIndex + 3}.</h1>
                            </>
                        )} 
                    </div>
                    {/*Tovább gomb*/}
                    <div>
                        {(images.length > imageIndex + 2) && (
                            <button onClick={() => changeImageIndex("increment")}>
                                {">>"}
                            </button>
                        )}
                    </div>
                </div>

                {/* 2. blokk: Fórum posztok */}
                <div style={{ 
                    display: "flex"
                    }}>

                    {/*Vissza gomb*/}
                    <div>
                    {(forumIndex !== 0) && (
                            <button onClick={() => changeForumIndex("decrement")}>
                                {"<<"}
                            </button>
                        )}
                    </div>

                    {/*Első poszt*/}
                    <div>
                        {forumIndex < forum.length &&
                            <>
                                <h1>{forum[forumIndex].Title}</h1>
                                <p>{forum[forumIndex].Content}</p>
                            </>
                        }
                    </div>

                    {/*Második poszt*/}
                    <div>
                        {forumIndex + 1 < forum.length &&
                            <>
                                <h1>{forum[forumIndex + 1].Title}</h1>
                                <p>{forum[forumIndex + 1].Content}</p>
                            </>
                        }
                    </div>

                    {/*Harmadik poszt*/}
                    <div>
                        {forumIndex + 2 < forum.length &&
                            <>
                                <h1>{forum[forumIndex + 2].Title}</h1>
                                <p>{forum[forumIndex + 2].Content}</p>
                            </>
                        }
                    </div>

                    {/*Tovább gomb*/}
                    <div>
                        {(forum.length > forumIndex + 2) && (
                            <button onClick={() => changeForumIndex("increment")}>
                                {">>"}
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* 3. blokk: Linkek */}
            <div style={{ display: 
                "flex"
                }}>

                {/*Vissza gomb*/}
                <div>
                    {(linkIndex !== 0) && (
                        <button onClick={() => changeLinkIndex("decrement")}>
                            {"<<"}
                        </button>
                    )}
                </div>

                {/*Első link*/}
                <div>
                    {(links.length > linkIndex) && (
                        <>
                            <a href = {links[linkIndex]}>{links[linkIndex]}</a>
                        </>
                    )}
                </div>
                
                {/*Második link*/}
                <div>
                    {(links.length > linkIndex + 1) && (
                        <>
                            <a href = {links[linkIndex + 1]}>{links[linkIndex + 1]}</a>
                        </>
                    )}
                </div>
                
                {/*Harmadik link*/}
                <div>
                    {(links.length > linkIndex + 2) && (
                        <>
                            <a href = {links[linkIndex + 2]}>{links[linkIndex + 2]}</a>
                        </>
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
        </div>
    );
}
