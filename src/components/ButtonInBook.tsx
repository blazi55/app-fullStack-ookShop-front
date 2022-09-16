import React from "react";
import { FC } from "react"
import './App.css';

export interface ButtonInBookProps {
    name: string;
    onClick: () => void;
}

export const ButtonInBook: FC<ButtonInBookProps> = (props: ButtonInBookProps) => {

    return (
        <>
            <div className="buttonInBook" onClick={props.onClick}>
                {props.name}
            </div>
        </>
      ); 
}