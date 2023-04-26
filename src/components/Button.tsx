interface Props{
  children: string;
  onClick: () => void;
  disabled: boolean;
}

const Button = ( {children, onClick, disabled}:Props ) => {
    return <button 
        disabled={disabled} 
        onClick={onClick}
        className='p-2 m-2 rounded-3'
    >{children}</button>;
};

export default Button;
