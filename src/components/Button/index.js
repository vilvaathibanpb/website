import React from 'react';

const Button = ({title, onClick}) => {
return <button onClick={onClick ? onClick : () => {}} className="rounded-md bg-secondary text-white py-5 px-20 mt-6 text-base font-bold box-border">{title}</button>
}
export default Button