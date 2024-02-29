import React from 'react'

import './MainInput.scss'
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import { PASSWORD, SEARCH, SECONDARY_INPUT } from '../../config/constants';
import { FiSearch } from 'react-icons/fi';


export default function MainInput(props) {

  const [focused, setFocused] = React.useState(false);
  const [showPwd, setShowPwd] = React.useState(false);

  const getType = () => {
    if(props.type === PASSWORD) return showPwd ? 'text' : props.type;
    else if(props.type === SEARCH) return 'text';
    return props.type ?? 'text';
  }

  return (
    <div className={`input-container ${props.className}`}>
      { props.fieldName && 
        <label className='fieldName'>{props.fieldName}</label> 
      }
      <div 
      className={
        'input-wrapper ' + 
        (props.style ? `input-wrapper-${props.style} ` : 'input-wrapper-primary ') +
        (focused ? `input-wrapper-${props.style ?? 'primary'}-focused ` : '')
      }>
        { props.type === SEARCH &&
          <button disabled={props.value === ''} className='input-search-icon' onClick={() => props.onSearch()}>
            <FiSearch size="22" color='var(--medium-gray)'/>
          </button>
        }
        <input
        type={getType()}
        value={props.value}
        name={props.name}
        disabled={props.disabled}
        placeholder={props.placeholder}
        required={props.required}
        minLength={props.minLength}
        maxLength={props.maxLength}
        spellCheck={false}
        onChange={(ev) => props.onChange(ev.target.value)}
        autoCapitalize='off'
        autoCorrect='off'
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}>
        </input>
        { props.type === PASSWORD &&
          <button className="iconButton showPwdButton" onClick={() => setShowPwd(!showPwd)}>
            { props.type === PASSWORD && showPwd &&
              <IoEyeOffOutline size="18"/>
            }
            { props.type === PASSWORD && !showPwd &&
              <IoEyeOutline size="18"/>
            }
          </button>
        }
      </div>
      { props.error && props.errorMessage && 
        <label className='errorMessage'>{props.errorMessage}</label> 
      }
    </div>
  )
}
