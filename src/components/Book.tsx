import { FC, useState } from "react"
import { ButtonInBook } from "./ButtonInBook";
import './App.css'

export interface BookProps {
    book: any
}

export const Book: FC<BookProps> = (props: BookProps) => {
    const [count, setCount] = useState(0);
    const nameAdd = "Add to box";
    const nameDelete = "Remove from box";

    return (
        <div className="bookBlock">
            {props.book.name}
            <div className="photo"></div>
            <div className="bookFloorBlock">
                <div>{props.book.price}</div>
                <ButtonInBook name={nameAdd} onClick={() => { setCount(count + 1); } }/>
                <ButtonInBook name={nameDelete} onClick={() => { setCount(count - 1); } }/>
            </div>
        </div>
    )
};