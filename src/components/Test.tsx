import { FC, useState } from "react"
import { ButtonInBook } from "./ButtonInBook";
import './App.css'

export interface TestProps {
}

export const Test: FC<TestProps> = (props: TestProps) => {
    const [count, setCount] = useState(0);
    const nameAdd = "Add to box";
    const nameDelete = "Remove from box";

    return (
        <div className="bookBlockTest"> 
            <div className="photo"></div>
            <div className="bookFloorBlock">
                <ButtonInBook name={nameAdd} onClick={() => { setCount(count + 1); } }/>
                <ButtonInBook name={nameDelete} onClick={() => { setCount(count - 1); } }/>
            </div>
        </div>
    )
}