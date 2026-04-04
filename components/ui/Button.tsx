import React, { ReactNode } from "react";
export type ButtonProps = {
    children: ReactNode,
    onClick: () => void,
    className?: string
}

export const Button = React.memo(({ children, onClick, className }: ButtonProps) => {
    return <button
        className={`btn-primary ${className}`}
        onClick={onClick} >
        {children}
    </button>
}, (prev, next) => (
    prev.className === next.className &&
    prev.onClick === next.onClick
));