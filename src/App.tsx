import React from 'react';
import logo from './logo.svg';
import './App.module.sass';
import {Button} from './ui/button/button'
import {Input} from "./ui/input/input";
import {inspect} from "util";
import styles from './App.module.sass'

function App() {
  return (
      <div className={styles.App}>
        <Input label={'Login'} name={'login'} />
        <Input label={'Password'} name={'password'} />
        <Button text={'Sign In'} />
      </div>
  );
}

export default App;
