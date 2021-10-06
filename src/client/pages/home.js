import React from 'react';
import {Nav} from "../components/nav";
import {Arrow, Bank, Chest, Ink, Ship, Sword, Tavern, Wheel} from "../components/svg/icons/icons";
import {Link} from 'react-scroll'

export const Home = () => {


    return (
        <>
            <Nav/>
            <div className={"container-main"}>
                <div className={"container-content"}>

                    <div className={"container-content-modifier-1"}>
                        <div className={"container-inner"}>

                            {/* <div className={"content-top"}/> */}

                            <h1 className={"content-header"}>Welcome to the world of</h1>
                            <h1 className={"content-header-punchline"}>Sea Mongers</h1>
                        </div>
                        <div className={"content-line-bottom"}/>
                    </div>

                    <div className={"container-content-modifier-3"}>
                        <div className={"container-inner"}>

                            <div className={"container-grid"}>

                                <div className={"grid-item"}>
                                    <Link activeClass="active" to="Ship" spy={true} smooth={true}>
                                        <div className={"grid-item-content"}>
                                            <div className={"grid-item-arrow center"}>
                                                <Arrow
                                                    color={"#323232"}
                                                    className={"arrow"}
                                                />
                                            </div>
                                            <Ship
                                            color={"#323232"}
                                            className={"grid-item-icon"}
                                            />
                                            <h1 className={"center grid-item-text unselectable"}>Ship</h1>
                                        </div>
                                    </Link>
                                </div>
                                <div className={"grid-item"}>
                                    <Link to="Harbor" spy={true} smooth={true}>
                                        <div className={"grid-item-content"}>
                                            <div className={"grid-item-arrow center"}>
                                                <Arrow
                                                    color={"#323232"}
                                                    className={"arrow"}
                                                />
                                            </div>
                                            <Wheel
                                                color={"#323232"}
                                                className={"grid-item-icon"}
                                            />
                                            <h1 className={"center grid-item-text unselectable"}>Harbor</h1>
                                        </div>
                                    </Link>
                                </div>
                                <div className={"grid-item"}>
                                    <Link to="Armory" spy={true} smooth={true}>
                                        <div className={"grid-item-content"}>
                                            <div className={"grid-item-arrow center"}>
                                                <Arrow
                                                    color={"#323232"}
                                                    className={"arrow"}
                                                />
                                            </div>
                                            <Sword
                                                color={"#323232"}
                                                className={"grid-item-icon"}
                                            />
                                            <h1 className={"center grid-item-text unselectable"}>Armory</h1>
                                        </div>
                                    </Link>
                                </div>
                                <div className={"grid-item"}>
                                    <Link to="Merchant" spy={true} smooth={true}>
                                        <div className={"grid-item-content"}>
                                            <div className={"grid-item-arrow center"}>
                                                <Arrow
                                                    color={"#323232"}
                                                    className={"arrow"}
                                                />
                                            </div>
                                            <Chest
                                                color={"#323232"}
                                                className={"grid-item-icon"}
                                            />
                                            <h1 className={"center grid-item-text unselectable"}>Merchant</h1>
                                        </div>
                                    </Link>
                                </div>
                                <div className={"grid-item"}>
                                    <Link to="Tavern" spy={true} smooth={true}>
                                        <div className={"grid-item-content"}>
                                            <div className={"grid-item-arrow center"}>
                                                <Arrow
                                                    color={"#323232"}
                                                    className={"arrow"}
                                                />
                                            </div>
                                            <Tavern
                                                color={"#323232"}
                                                className={"grid-item-icon"}
                                            />
                                            <h1 className={"center grid-item-text unselectable"}>Tavern</h1>
                                        </div>
                                    </Link>
                                </div>
                                <div className={"grid-item"}>
                                    <Link to="Bank" spy={true} smooth={true}>
                                        <div className={"grid-item-content"}>
                                            <div className={"grid-item-arrow center"}>
                                                <Arrow
                                                    color={"#323232"}
                                                    className={"arrow"}
                                                />
                                            </div>
                                            <Bank
                                                color={"#323232"}
                                                className={"grid-item-icon"}
                                            />
                                            <h1 className={"center grid-item-text unselectable"}>Bank</h1>
                                        </div>
                                    </Link>
                                </div>
                                <div className={"grid-item"}>
                                    <Link to="Governor" spy={true} smooth={true}>
                                        <div className={"grid-item-content"}>
                                            <div className={"grid-item-arrow center"}>
                                                <Arrow
                                                    color={"#323232"}
                                                    className={"arrow"}
                                                />
                                            </div>
                                            <Ink
                                                color={"#323232"}
                                                className={"grid-item-icon"}
                                            />
                                            <h1 className={"center grid-item-text unselectable"}>Governor</h1>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={"content-guider"} id={"Ship"}/>
                        <div className={"content-line-bottom"}/>
                    </div>

                    <div className={"container-content-modifier-2"}>
                        <div className={"container-inner"}>
                            <h1 style={{
                                fontSize: "42px", paddingLeft: "25px"
                            }} className={"content-section-header-about"}>Ship</h1>
                            <div className={"content-line"}/>
                            <div style={{height: "600px"}}/>
                        </div>
                        <div className={"content-line-bottom"}/>
                    </div>

                    <div className={"container-content-modifier-2"}>
                        <div className={"content-guider"} id={"Harbor"}/>
                        <div className={"container-inner"}>
                            <h1 style={{fontSize: "42px", paddingLeft: "25px"}}>Harbor</h1>
                            <div className={"content-line"}/>
                            <div style={{height: "600px"}}/>
                        </div>
                        <div className={"content-line-bottom"}/>
                    </div>

                    <div className={"container-content-modifier-3"}>
                        <div className={"content-guider"} id={"Armory"}/>
                        <div className={"container-inner"}>
                            <h1 style={{fontSize: "42px", paddingLeft: "25px"}}>Armory</h1>
                            <div className={"content-line"}/>
                            <div style={{height: "600px"}}/>
                        </div>
                        <div className={"content-line-bottom"}/>
                    </div>

                    <div className={"container-content-modifier-2"}>
                        <div className={"content-guider"} id={"Merchant"}/>
                        <div className={"container-inner"}>
                            <h1 style={{fontSize: "42px", paddingLeft: "25px"}}>Merchant</h1>
                            <div className={"content-line"}/>
                            <div style={{height: "600px"}}/>
                        </div>
                        <div className={"content-line-bottom"}/>
                    </div>

                    <div className={"container-content-modifier-2"}>
                        <div className={"content-guider"} id={"Tavern"}/>
                        <div className={"container-inner"}>
                            <h1 style={{fontSize: "42px", paddingLeft: "25px"}}>Tavern</h1>
                            <div className={"content-line"}/>
                            <div style={{height: "600px"}}/>
                        </div>
                        <div className={"content-line-bottom"}/>
                    </div>

                    <div className={"container-content-modifier-2"}>
                        <div className={"content-guider"} id={"Bank"}/>
                        <div className={"container-inner"}>
                            <h1 style={{fontSize: "42px", paddingLeft: "25px"}}>Bank</h1>
                            <div className={"content-line"}/>
                            <div style={{height: "600px"}}/>
                        </div>
                        <div className={"content-line-bottom"}/>
                    </div>

                    <div className={"container-content-modifier-2"}>
                        <div className={"content-guider"} id={"Governor"}/>
                        <div className={"container-inner"}>
                            <h1 style={{fontSize: "42px", paddingLeft: "25px"}}>Governor</h1>
                            <div className={"content-line"}/>
                            <div style={{height: "600px"}}/>
                        </div>
                        <div className={"content-line-bottom"}/>
                    </div>

                    <div className={"container-content-modifier-3"}>
                        <div className={"container-inner"}>
                            <div style={{height:"600px"}}/>
                        </div>
                    </div>
                    {/* Next Section Here */}

                </div>
            </div>
        </>
    );
}