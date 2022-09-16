import { FC } from "react";
import { Link } from "react-router-dom";
import './App.css'

export interface SignUpPageProps {
    
}

export const SignUpPage: FC<SignUpPageProps> = (props: SignUpPageProps) => {

  return (
    <div className="myButtonLogin" >
      <Link className="link" to ="/main_page">Login</Link>
    </div>
  );
}