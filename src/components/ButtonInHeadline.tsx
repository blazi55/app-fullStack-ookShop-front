import React, {FC} from "react";
import './App.css';

export interface ButtonInHeadlineProps {
    name: string;
    onClick: () => void;
}

export const ButtonInHeadline: FC<ButtonInHeadlineProps> = (props: ButtonInHeadlineProps) => {

    return (
        <>
            <div className="buttonInHeadline" onClick={props.onClick}>
                {props.name}
            </div>
        </>
      ); 
}