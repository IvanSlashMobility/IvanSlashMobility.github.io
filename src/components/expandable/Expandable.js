import React from 'react'

import './Expandable.scss';
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";


export default function Expandable(props) {

  const [open, setOpen] = React.useState(false);

  return (
    <div className={`expandable ${props.className}`} style={props.style}>
      <div 
      className='rowContainer rowContainer-alignCenter expandable-button' 
      style={{backgroundColor: props.buttonColor, color: props.clearButton ? 'var(--white)' : 'var(--black)'}}
      onClick={() => setOpen(!open)}>
        <div className='flex-1'>{props.title}</div>
        { open ?
          <IoChevronUpOutline color='var(--dark-gray)'/> :
          <IoChevronDownOutline color='var(--dark-gray)'/>
        }
      </div>
      <div className='expandable-content' style={{maxHeight: open ? 500 : 0}}>
        <div className='expandable-content-inner'>
          {props.text}
        </div>
      </div>
    </div>
  )
}
