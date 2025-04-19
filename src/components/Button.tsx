import React from "react";



export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}
 
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className,...props }) => {
  return (
    <button
      className={
        "border-none pl-5 pr-5 cursor-pointer border-black rounded p-1 bg-green-200 text-black text-100   font-bold " +
        className
      }
      {...props}
      />
  );
});

Button.displayName = "Button";
export default Button;
