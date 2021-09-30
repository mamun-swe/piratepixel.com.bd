import React from 'react';
import './style.scss';

// Basic Container
const Basic = (props) => {
    return (
        <div className={props.className ? props.className + " container" : "container"}>
            {props.children}
        </div>
    );
}

// Fluid Container
const Fluid = (props) => {
    return (
        <div className={props.className ? props.className + " container-fluid" : "container-fluid"}>
            {props.children}
        </div>
    );
}

// Row
const Row = (props) => {
    return (
        <div className={props.className ? props.className + " row" : "row"}>
            {props.children}
        </div>
    );
}

// Column
const Column = (props) => {
    return (
        <div className={props.className ? props.className + " col-12" : "col-12"}>
            {props.children}
        </div>
    )
}

export const Container = { Basic, Fluid, Row, Column }