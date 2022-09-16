import { FC } from "react";
import { Link } from "react-router-dom";
import { Background } from "./Background";
import './App.css'

export interface SecondPageProps {
    
}

export const SecondPage: FC<SecondPageProps> = (props: SecondPageProps) => {
  
  return (
    <div className="myButtonLogin">
      <Link className="link" to ="/main_page">Main Page</Link>
    </div>
  );
}