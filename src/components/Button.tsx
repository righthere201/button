import React from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Button = ({ 
  children, 
  onClick }: Props) => {

    const [color, setColor] = React.useState<string>();

    const getRandomInt = (max: number) => {
      return Math.floor(Math.random() * max);
    }

  const getColor = () => {
    const colorArray = ['primary', 'secondary',  'danger']
    setColor(colorArray[getRandomInt(3)])
  };

  return (
    <button 
    className={"btn btn-" + color} 
    onClick={() => {
      onClick();
      getColor();
    }}>
      {children}
    </button>
  );
};

export default Button;
