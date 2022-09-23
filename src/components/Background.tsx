import React, { useEffect } from "react";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { BinButton } from './BinButton';
import { Book } from "./Book";
import {ButtonInColum} from './ButtonInColum';
import { Test } from "./Test";
import './App.css'
import { Headline } from "./Headline";

export interface BackgroundProps {

}

export const Background: FC<BackgroundProps> = (props: BackgroundProps) => {
    const [count, setCount] = useState(0);
    const[books, setBooks] = useState([]);

    const nameAdd = "Add to box";
    const nameDelete = "Remove from box";

    useEffect(() => {
      fetch("http://localhost:8080/bookOokShop/books", {
        method: "GET",
        headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:8080/bookOokShop/books',
        'Access-Control-Request-Method': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
      })
      .then(res => {
        return res.json();
      }).then(data => {
        setBooks(data);
        console.log(data)
      });
    }/*mozna dodac []*/);

    // useEffect(() => {
    //   fetch("http://localhost:8080/student/all", {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': 'http://localhost:8080/student'
    //   },
    //   method: "GET",
    // })
    //   .then(res => {
    //     return res.json();
    //   }).then(data => {
    //     setStudent(data);
    //   });
    // }/*mozna dodac []*/);

    return (
        <div className="block">
            <div className="headline">
                <div className="buttonInHeadline" >
                    <Link className="linkToMyAccount" to ="/my_account">My Profile</Link>
                </div>
                <BinButton count={count}/>
                <Headline/>
            </div>
            <div className="mainPage">
                <div className="column">
                    <ButtonInColum name={nameAdd} onClick={() => { setCount(count + 1); } }/>
                    <ButtonInColum name={nameDelete} onClick={() => { setCount(count - 1); } }/>
                </div>
                <div className="block_book">
                  {books.map(book => (
                    <Book book={book}/>
                  ))}
                </div>
            </div>
        </div>
      ); 
}
