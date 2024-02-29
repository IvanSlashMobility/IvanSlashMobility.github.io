import React from 'react';

import './MainButton.scss';


export default function MainButton(props) {

  return (
    <button
      disabled={props.disabled}

      className={
        'main-button ' +
        (props.type ? `${props.type}-button ` : 'primary-button ') +
        (props.disabled ? 'disabled-button ' : '') +
        props.className
      }
      style={props.style}
      onClick={props.onClick}>
      {props.icon && props.iconFirst &&
        <div className='button-icon button-icon-left'>
          {props.icon}
        </div>
      }
      <span>{props.children}</span>
      {props.icon && !props.iconFirst &&
        <div className='button-icon button-icon-right'>
          {props.icon}
        </div>
      }
    </button>
  )
}
