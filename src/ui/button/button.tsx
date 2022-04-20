import React from 'react';
import {inspect} from "util";
import styles from './button.module.sass'

interface IButtonProps {
    children?: React.ReactNode;
    text: string;
    width?: string | number;
    height?: string | number;
    disabled?: boolean;
    onClick?: () => void;
    type?: 'button' | 'submit';
}

export function Button({text, children, disabled = false, height, width, onClick, type='button'}:IButtonProps) {
    return (
        <button
            type={type}
            style={{
                height: height,
                width: width
            }}
            onClick={onClick}
            disabled={disabled}
            className={styles.btn}
        >
            {text}
            {children}
        </button>
    );
}