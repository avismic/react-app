import React from "react";

interface Props {
  children: string;
  color?: 'primary'|'secondary'|'danger'|'success';
  onClick: () => void;
}

const SuccessButton = ({ children, onClick, color ='primary' }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default SuccessButton;
