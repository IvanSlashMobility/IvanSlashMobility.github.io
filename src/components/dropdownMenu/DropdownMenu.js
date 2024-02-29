import React from 'react';

import { BsThreeDotsVertical } from 'react-icons/bs';
import './DropdownMenu.scss';
import { AnimatePresence, motion } from 'framer-motion';


export default function DropdownMenu(props) {

  const [open, setOpen] = React.useState(false);

  return (
    <div className='menu'>
      <AnimatePresence initial={false}>
        <button 
        className='iconButton' 
        onBlur={() => setOpen(false)}
        onClick={() => setOpen(!open)}>
          <BsThreeDotsVertical size="18" color="var(--black)"/>
        </button>
        { open && 
          <motion.div 
          key={'menu-container'}
          className={`menu-wrapper ${props.right ? 'menu-wrapper-right' : 'menu-wrapper-left'}`}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}>
            <div className={`menu-arrow-up ${props.right ? 'menu-arrow-up-right' : 'menu-arrow-up-left'}`}></div>
            { props.options.map((opt, i) => {
              return(
                <div className='menu-option' key={`option-${i}`}>
                  <span 
                  className='menu-option-text' 
                  onClick={() => {
                    setOpen(false);
                    props.onOptionClicked(i)
                  }}>
                    {opt}
                  </span>
                </div>
              )
            })}
          </motion.div>
        }
      </AnimatePresence>
    </div>
  )
}
