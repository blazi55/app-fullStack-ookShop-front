import './App.css'
import React, { useState } from "react";
import { FC } from "react";
import { Background } from "./Background";
import { Paper, TextField, Button } from '@mui/material';

export interface LoginPageProps {
    
}

export const LoginPage: FC<LoginPageProps> = (props: LoginPageProps) => {
    const papierStyle = {padding:'50px 20px', width: 600, margin: "20px auto"}
    const textStyle = {margin: "10px"}
    const[name, setName] = useState('')
    const[address, setAddress] = useState('')

    const onLogin = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const user = {name, address}
        console.log(user)
        fetch("http://localhost:8080/admin", {
        }).then(() => {
            console.log("Git :)")
        })
    }
    
  return (
    <Paper elevation={3} style={papierStyle}>
        <TextField id="outlined-basic" label="Student Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)}
        fullWidth style={textStyle}/>
        <TextField id="outlined-basic" label="Address" variant="outlined" value={address} onChange={(e) => setAddress(e.target.value)} 
        fullWidth style={textStyle}/>
        <Button variant="outlined" onClick={onLogin}> login </Button>
    </Paper>
  );
}
