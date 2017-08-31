import React from 'react';
import { Input } from './Input';

export const MiddleMan = (props) => {
    return (
      <div style={{width: '100%', textAlign: 'center', marginTop: 100}}>
        <h1>{props.text}</h1>
        <Input onChange={props.onChange} value={props.text}/>
      </div>
    );
}
