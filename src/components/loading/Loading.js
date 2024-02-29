import React from 'react';
import ReactLoading from 'react-loading';

import './Loading.scss';


export default function Loading(props) {
  
  const loadingSize = props.fullscreen ? 50 : (props.size ?? 25);

  if(props.visible) {
    return (
      <div className={(props.fullscreen ? 'fullscreen-loading' : '')}>
        <ReactLoading 
        type={'spin'} 
        color={'var(--primary)'} 
        height={loadingSize} 
        width={loadingSize} />
      </div>
    )
  }
}