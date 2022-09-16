import React from "react";
import { FC } from "react"
import './App.css';

export interface BinButtonProps {
    count: number;
}

export const BinButton: FC<BinButtonProps> = (props: BinButtonProps) => {
    return (
        <div className="buttonInHeadline">
            Koszyk {props.count}
        </div>
      ); 
}