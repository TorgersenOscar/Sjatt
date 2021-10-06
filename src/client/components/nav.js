import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {Link as LinkLocal} from "react-scroll";
import {NavItem} from "./navItem";
import {Hamburger} from "./svg/icons/icons";

export const Nav = () => {
    const pixelsToResize = 800;

    const [size, setSize] = useState(() => {return window.innerWidth > pixelsToResize});
    const [open, setOpen] = useState(false);
    const [scrollValue, setScrollValue] = useState("absolute")

    window.addEventListener("resize", (e) => {
        e.preventDefault();
        (window.innerWidth > pixelsToResize) ? (setSize(true)) : (setSize(false));
    })

    const switchClassName = (first, second) => {
        return (size) ? (first) : (second);
    }

    window.addEventListener("scroll", (e) => {
        e.preventDefault();
        console.log("SCROLLING");
        console.log(window.scrollY);
        (window.scrollY >= 300) ? (setScrollValue("fixed")) : (setScrollValue("absolute"));
    })

    const switchClassNameTriple = (first, second, third, factor) => {
        if (factor && !size)
        {
            return third;
        }
        else return (size) ? (first) : (second);
    }

    const openMenu = () => {
        console.log("Clicked");
        setOpen(!open);
    }

    const rotateHamburger = () => {
        if (open)
        {
            return {transform: "rotate(90deg)"}
        }
    }

    const closeHamburger = () => {
        setOpen(false);
    }

    if (size && open) setOpen(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 285,
            behavior: 'smooth',
        })
    }

    const checkScroll = () => {
        return (scrollValue === "absolute") ? ("300px") : ("0px");
    }

    return (
        <>
            <div className={"header-main"} id={"header"} style={{ position:`${scrollValue}`, marginTop:`${checkScroll()}`}}>
                <div className={"header-lines"}/>
                <div className={"container-content"}>

                    <div className={"header-inner"}>

                        <div className={"header-content"}>
                            <h1 className={"header-header"}>Sea Mongers</h1>
                            <div
                                className={switchClassName("header-hamburger-closed", "header-hamburger")}
                                onClick={() => openMenu()}>
                                <div className={"header-hamburger-icon-container"}>
                                    <div className={switchClassNameTriple("header-hamburger-icon", "header-hamburger-icon", "header-hamburger-icon-open", open) + " header-hamburger-icon-shared"}>
                                        <Hamburger
                                            color={"#323232"}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className={switchClassNameTriple("header-item-list", "header-item-list-collapsed-closed", "header-item-list-collapsed-open", open)}
                            >

                                <div className={switchClassNameTriple("header-item", "header-item-collapsed-closed", "header-item-collapsed-open", open)} onClick={() => scrollToTop()}>
                                    <h2 className={"header-text"}>Home</h2>
                                    <Link
                                        to={"/"}
                                        className={switchClassName("header-link", "header-link-collapsed")}
                                        onClick={() => closeHamburger()}
                                        draggable={false}
                                    />
                                </div>

                                <div className={switchClassNameTriple("header-item", "header-item-collapsed-closed", "header-item-collapsed-open", open)}>
                                    <h2 className={"header-text"}>Dev-Log</h2>
                                    <Link
                                        to={"/dev-log"}
                                        className={switchClassName("header-link", "header-link-collapsed")}
                                        onClick={() => closeHamburger()}
                                        draggable={false}
                                    />
                                </div>
                                <div className={switchClassNameTriple("header-item", "header-item-collapsed-closed", "header-item-collapsed-open", open)}>
                                    <h2 className={"header-text"}>About Me</h2>
                                    <Link
                                        to={"/about-me"}
                                        className={switchClassName("header-link", "header-link-collapsed")}
                                        onClick={() => closeHamburger()}
                                        draggable={false}
                                    />
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}