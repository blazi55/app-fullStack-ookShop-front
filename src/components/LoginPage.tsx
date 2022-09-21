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
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    const onLogin = (e: any) => {
      e.preventDefault();

      const myHeaders = new Headers();
      myHeaders.append("Authorization", "Basic MTVibGF6aUBnbWFpbC5jb206MTIzNA==");
      myHeaders.append("Content-Type", "application/json");

      fetch('http://localhost:8080/loginPage', {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
          email,
          password,
        }),
      }).then ((respone) => 
      respone.json()
      ).then((data) => console.log(data))
      .catch((err) => {
        console.log(err);
      }) 
    }
    
  return (
    <Paper elevation={3} style={papierStyle}>
        <TextField id="outlined-basic" label="Student email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)}
        fullWidth style={textStyle}/>
        <TextField id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} 
        fullWidth style={textStyle}/>
        <Button variant="outlined" onClick={onLogin}> login </Button>
    </Paper>
  );
}
