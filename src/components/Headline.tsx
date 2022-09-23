import { FC } from "react";
import { BinButton } from "./BinButton";
import './App.css'
import { TextField, Button, Paper } from "@mui/material";
import {useState, useEffect} from 'react';

export interface HeadlineProps {

}

export const Headline: FC<HeadlineProps> = (props: HeadlineProps) => {
    const[name, setName] = useState('')
    const[price, setPrice] = useState('')
    const papierStyle = {padding:'50px 20px', width: 600, margin: "20px auto"}
    const textStyle = {margin: "10px"}

    const onSave = (e: any) => {
        e.preventDefault()
        const studentSave = {name, price}
        console.log(studentSave)
        fetch("http://localhost:8080/bookOokShop/book", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': 'http://localhost:8080/bookOokShop/book'
            },
            body: JSON.stringify(studentSave)
        }).then(() => {
            console.log("Added")
        })
    }

    return (
        <div className="headline">
            <Paper elevation={3} style={papierStyle}>
                <div>Create new Book</div>
                <TextField id="outlined-basic" label="Book Name" variant="outlined" value={name} 
                onChange={(e) => setName(e.target.value)} style={textStyle}/>
                <TextField id="outlined-basic" label="Book price" variant="outlined" value={price}
                onChange={(e) => setPrice(e.target.value)} style={textStyle}/>
                <Button variant="outlined" onClick={onSave} style={textStyle}> Submit </Button>
            </Paper>
        </div>
    );
}