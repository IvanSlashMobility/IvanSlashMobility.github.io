import React from 'react';

import './MainSlider.scss';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';


export default function MainSlider(props) {
  return(
    <div className='container container-alignCenter slider-container'>
      { props.label && props.value && 
        <div className='rowContainer rowContainer-spaceBetween slider-label'>
          <span>{props.label}:</span>
          <span className='slider-label-value' style={{color: props.color ?? 'var(--primary)'}}>{props.value}</span>
        </div>
      }
      <div className={`slider-wrapper ${props.className}`}>
        <Slider
          disabled={props.disabled}
          className='slider'
          min={props.min ?? 0}
          max={props.max ?? 100}
          value={props.value}
          handleStyle={{
            opacity: 0
          }}
          trackStyle={{
            height: 6,
            backgroundColor: props.color ?? 'var(--primary)',
          }}
          railStyle={{
            height: 6,
            backgroundColor: 'var(--white)',
          }}
        />
        <div className='rowContainer rowContainer-spaceBetween slider-separators'>
          <div className='slider-separators-separator'/>
          <div className='slider-separators-separator'/>
          <div className='slider-separators-separator'/>
        </div>
      </div>
      <div className='rowContainer rowContainer-spaceBetween slider-numbers'>
        <div className='slider-numbers-min'>{props.min ?? 0}</div>
        <div className='slider-numbers-mid'>{(props.max && props.min) ? (props.max - props.min)/2 : 50}</div>
        <div className='slider-numbers-max'>{props.max ?? 100}</div>
      </div>
    </div>
  )
}
