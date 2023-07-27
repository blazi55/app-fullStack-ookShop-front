import {FC, useState} from "react"
import {ButtonInBook} from "./ButtonInBook";
import './App.css'

export interface BookProps {
    book: any
}

export const Book: FC<BookProps> = (props: BookProps) => {
    const [count, setCount] = useState(0);
    const nameAdd = "Add book";
    const nameDelete = "Remove book";

    return (
        <div className="bookBlock">
            {props.book.name}
            <div className="photo"></div>
            <div className="bookFloorBlock">
                <div className="book_price">
                    Cena: {props.book.price} zł
                </div>
                <div className="book_button_place">
                    <ButtonInBook name={nameAdd} onClick={() => { setCount(count + 1); } }/>
                    <ButtonInBook name={nameDelete} onClick={() => { setCount(count - 1); } }/>
                </div>
            </div>
        </div>
    )
};