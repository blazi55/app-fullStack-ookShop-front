import './App.css'
import { FC } from "react";
import { Link } from "react-router-dom";

export interface StartPageProps {
    
}

export const StartPage: FC<StartPageProps> = (props: StartPageProps) => {

  return (
    <div className="blockStart">
      <div className="buttonLogin" >
        <Link className="link" to ="/login_page">Login</Link>
      </div>
      <div className="buttonLogin" >
        <Link className="link" to ="/main_page">Sign up</Link>
      </div>
    </div>
  );
}