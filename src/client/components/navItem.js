import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

export const NavItem = ({onSwitchClassNameTriple, onSwitchClassName}, path, text) => {

    return (
        <div className={onSwitchClassNameTriple("header-item", "header-item-collapsed-closed", "header-item-collapsed-open", open)}>
            <h2 className={"header-text"}>{text}</h2>
            <Link to={path} className={onSwitchClassName("header-link", "header-link-collapsed")}/>
        </div>
    );
}