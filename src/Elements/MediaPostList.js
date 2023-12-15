import React, { useState, useEffect } from 'react';

export function MediaPostList() {

    const [images, setImages] = useState([]);
    const [imageIndex, setImageIndex] = useState(0);

    const changeImageIndex = (operation) => {
        if (operation === "decrement") {
            setImageIndex(imageIndex - 9);
        } else if (operation === "increment"){
            setImageIndex(imageIndex + 9);
        }
    }

    {/*Teszt adatok*/}
    useEffect(() => {
        setImages([
            require(`./Tesztadatok-torolheto/rat1.gif`),
            require(`./Tesztadatok-torolheto/rat2.gif`),
            require(`./Tesztadatok-torolheto/rat3.gif`),
            require(`./Tesztadatok-torolheto/rat4.gif`),
            require(`./Tesztadatok-torolheto/rat5.gif`),
            require(`./Tesztadatok-torolheto/rat1.gif`),
            require(`./Tesztadatok-torolheto/rat2.gif`),
            require(`./Tesztadatok-torolheto/rat3.gif`),
            require(`./Tesztadatok-torolheto/rat4.gif`),
            require(`./Tesztadatok-torolheto/rat5.gif`),
            require(`./Tesztadatok-torolheto/rat1.gif`),
            require(`./Tesztadatok-torolheto/rat2.gif`),
            require(`./Tesztadatok-torolheto/rat3.gif`),
            require(`./Tesztadatok-torolheto/rat4.gif`),
            require(`./Tesztadatok-torolheto/rat5.gif`),
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

                {/*II.*/}
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

                {/*III.*/}
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
            </div>

            {/*Második sor*/}
            <div style = {{
                display: "flex"
            }}>
                {/*IV.*/}
                <div>
                    {images.length > imageIndex + 3 && (
                        <>
                        <img
                            src={images[imageIndex + 3]}
                            style={{
                            width: "20vh",
                            height: "20vh"
                            }}
                            alt={`image-${imageIndex + 4}`}
                        />
                        <h1>{imageIndex + 4}.</h1>
                        </>
                    )} 
                </div>

                {/*V.*/}
                <div>
                    {images.length > imageIndex + 4 && (
                        <>
                        <img
                            src={images[imageIndex + 4]}
                            style={{
                            width: "20vh",
                            height: "20vh"
                            }}
                            alt={`image-${imageIndex + 5}`}
                        />
                        <h1>{imageIndex + 5}.</h1>
                        </>
                    )} 
                </div>

                {/*VI.*/}
                <div>
                    {images.length > imageIndex + 5 && (
                        <>
                        <img
                            src={images[imageIndex + 5]}
                            style={{
                            width: "20vh",
                            height: "20vh"
                            }}
                            alt={`image-${imageIndex + 6}`}
                        />
                        <h1>{imageIndex + 6}.</h1>
                        </>
                    )} 
                </div>
            </div>

            {/*Harmadik sor*/}
            <div style = {{
                display: "flex"
            }}>
                {/*VII.*/}
                <div>
                    {images.length > imageIndex + 6 && (
                        <>
                        <img
                            src={images[imageIndex + 6]}
                            style={{
                            width: "20vh",
                            height: "20vh"
                            }}
                            alt={`image-${imageIndex + 7}`}
                        />
                        <h1>{imageIndex + 7}.</h1>
                        </>
                    )} 
                </div>

                {/*VIII.*/}
                <div>
                    {images.length > imageIndex + 7 && (
                        <>
                        <img
                            src={images[imageIndex + 7]}
                            style={{
                            width: "20vh",
                            height: "20vh"
                            }}
                            alt={`image-${imageIndex + 8}`}
                        />
                        <h1>{imageIndex + 8}.</h1>
                        </>
                    )} 
                </div>

                {/*IX.*/}
                <div>
                    {images.length > imageIndex + 8 && (
                        <>
                        <img
                            src={images[imageIndex + 8]}
                            style={{
                            width: "20vh",
                            height: "20vh"
                            }}
                            alt={`image-${imageIndex + 9}`}
                        />
                        <h1>{imageIndex + 9}.</h1>
                        </>
                    )} 
                </div>
            </div>

            {/*Vissza gomb*/}
            {(imageIndex !== 0) && (
                <button onClick={() => changeImageIndex("decrement")}>
                    {"<<"}
                </button>
            )}


            {/*Előre gomb*/}
            {(images.length > imageIndex + 8) && (
                <button onClick={() => changeImageIndex("increment")}>
                    {">>"}
                </button>
            )}
        </div>
    );
}