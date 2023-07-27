import {FC} from "react"
import './App.css';

export interface ButtonInColumProps {
    name: string;
    onClick: () => void;
}

export const ButtonInColum: FC<ButtonInColumProps> = (props: ButtonInColumProps) => {

    return (
        <>
            <div className="buttonInColumn" onClick={props.onClick}>
                {props.name}
            </div>
        </>
      ); 
}