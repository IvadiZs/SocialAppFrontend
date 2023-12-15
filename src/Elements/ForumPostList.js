import React, { useState, useEffect } from 'react';

export function ForumPostList() {

    const [forum, setForum] = useState([]);
    const [forumIndex, setForumIndex] = useState(0);

    const changeForumIndex = (operation) => {
        if (operation === "decrement") {
            setForumIndex(forumIndex - 9);
        } else if (operation === "increment"){
            setForumIndex(forumIndex + 9);
        }
    }

    useEffect(() => {
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
            {
                Title: "Cím6",
                Content: "Ez a cím6 szövege"
            },
            {
                Title: "Cím7",
                Content: "Ez a cím7 szövege"
            },
            {
                Title: "Cím8",
                Content: "Ez a cím8 szövege"
            },
            {
                Title: "Cím9",
                Content: "Ez a cím9 szövege"
            },
            {
                Title: "Cím10",
                Content: "Ez a cím10 szövege"
            },
            {
                Title: "Cím11",
                Content: "Ez a cím11 szövege"
            },
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
                    {forumIndex < forum.length &&
                        <>
                            <h1>{forum[forumIndex].Title}</h1>
                            <p>{forum[forumIndex].Content}</p>
                        </>
                    }
                </div>

                {/*II.*/}
                <div>
                    {forumIndex + 1 < forum.length &&
                        <>
                            <h1>{forum[forumIndex + 1].Title}</h1>
                            <p>{forum[forumIndex + 1].Content}</p>
                        </>
                    }
                </div>

                {/*III.*/}
                <div>
                    {forumIndex + 2 < forum.length &&
                        <>
                            <h1>{forum[forumIndex + 2].Title}</h1>
                            <p>{forum[forumIndex + 2].Content}</p>
                        </>
                    }
                </div>
            </div>

            {/*Második sor*/}
            <div style = {{
                display: "flex"
            }}>
                {/*IV.*/}
                <div>
                    {forumIndex + 3 < forum.length &&
                        <>
                            <h1>{forum[forumIndex + 3].Title}</h1>
                            <p>{forum[forumIndex + 3].Content}</p>
                        </>
                    }
                </div>

                {/*V.*/}
                <div>
                    {forumIndex + 4 < forum.length &&
                        <>
                            <h1>{forum[forumIndex + 4].Title}</h1>
                            <p>{forum[forumIndex + 4].Content}</p>
                        </>
                    }
                </div>

                {/*VI.*/}
                <div>
                    {forumIndex + 5 < forum.length &&
                        <>
                            <h1>{forum[forumIndex + 5].Title}</h1>
                            <p>{forum[forumIndex + 5].Content}</p>
                        </>
                    }
                </div>
            </div>

            {/*Harmadik sor*/}
            <div style = {{
                display: "flex"
            }}>
                {/*VII.*/}
                <div>
                    {forumIndex + 6 < forum.length &&
                        <>
                            <h1>{forum[forumIndex + 6].Title}</h1>
                            <p>{forum[forumIndex + 6].Content}</p>
                        </>
                    }
                </div>

                {/*VIII.*/}
                <div>
                    {forumIndex + 7 < forum.length &&
                        <>
                            <h1>{forum[forumIndex + 7].Title}</h1>
                            <p>{forum[forumIndex + 7].Content}</p>
                        </>
                    }
                </div>

                {/*IX.*/}
                <div>
                    {forumIndex + 8 < forum.length &&
                        <>
                            <h1>{forum[forumIndex + 8].Title}</h1>
                            <p>{forum[forumIndex + 8].Content}</p>
                        </>
                    }
                </div>
            </div>

            {/*Vissza gomb*/}
            <div>
                {(forumIndex !== 0) && (
                    <button onClick={() => changeForumIndex("decrement")}>
                        {"<<"}
                    </button>
                )}
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
    );
}