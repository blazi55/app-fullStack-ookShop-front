import './App.css'
import React, {FC} from "react";
import {Background} from "./Background";

export interface FirstPageProps {
    
}

export const FirstPage: FC<FirstPageProps> = (props: FirstPageProps) => {
  
  return (
    <div className="App">
      <Background/>
    </div>
  );
}
