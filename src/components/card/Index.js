import React from 'react'
import './style.scss'

// Card simple
const Simple = (props) => {
    return (
        <div className={props.className ? props.className + " card" : "card"}>
            {props.children}
        </div>
    );
}

// Card header
const Header = (props) => {
    return (
        <div className={props.className ? props.className + " card-header" : "card-header"}>
            {props.children}
        </div>
    );
}

// Card body
const Body = (props) => {
    return (
        <div className={props.className ? props.className + " card-body" : "card-body"}>
            {props.children}
        </div>
    );
}

// Card footer
const Footer = (props) => {
    return (
        <div className={props.className ? props.className + " card-footer" : "card-footer"}>
            {props.children}
        </div>
    );
}


export const Card = { Simple, Header, Body, Footer }