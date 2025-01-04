import React, { useState } from "react";
import "./glassesTemplate.scss";
import glasses from "./dataGlasses.json";

export const GlassesTemplate = () => {
    const [url, setUrl] = useState("");

    const handleClick = (url) => {
        setUrl(url);
    };

    return (
        <div className="home-template">
            <div className="container mx-auto py-7">
                <div className="model max-w-2xl mx-auto flex justify-between gap-10">
                    <div className="left">
                        <img
                            src="./images/glasses/model.jpg"
                            alt="model left"
                        />
                        <div className="glass">
                            <img
                                src="./images/glasses/v1.png"
                                alt="glasses item"
                            />
                        </div>
                        <div className="description">
                            <div className="name">GUCCI G8850U</div>
                            <p>
                                Light pink square lenses define these
                                sunglasses, ending with amother of pearl effect
                                tip.
                            </p>
                        </div>
                    </div>
                    <div className="right">
                        <img
                            src="./images/glasses/model.jpg"
                            alt="model left"
                        />
                        <div className="glass">
                            {url && (
                                <img
                                    src={`./images/${url}`}
                                    alt="glasses item"
                                />
                            )}
                        </div>
                    </div>
                </div>
                <div className="glasses max-w-2xl mx-auto grid grid-cols-5 gap-7 mt-10">
                    {glasses.map((item) => {
                        return (
                            <div className="glasses__item" key={item.id}>
                                <img
                                    src={`./images/${item.url}`}
                                    alt={item.name}
                                    onClick={() => {
                                        handleClick(`${item.url}`);
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
