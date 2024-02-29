import React from 'react'

import './MainSelect.scss'
import Select, { components } from 'react-select';
import makeAnimated from 'react-select/animated';
import { FiCheck } from "react-icons/fi";
import { FaCaretDown } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';


const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <FaCaretDown size={18} color='var(--black)' />
    </components.DropdownIndicator>
  );
};



export default function MainSelect(props) {






  const animatedComponents = makeAnimated();

  const [selectedValue, setSelectedValue] = React.useState(props.initialValue);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSelectionChange = (val) => {

    // console.log(val, 'esto se le pasa ddasdasdasdasdasdasd')
    setIsOpen(false);
    setSelectedValue(val);
    props.onChange(val);
  }

  // const CustomOption = (props) => {
  //   return (
  //     <div
  //       ref={props.innerRef}
  //       {...props.innerProps}
  //       className='main-select-option rowContainer rowContainer-alignCenter'>
  //       <div
  //         className={`main-select-checkbox rowContainer rowContainer-justifyCenter rowContainer-alignCenter 
  //       ${props.data.isChecked && 'main-select-checkbox-active'}`}>
  //         {props.data.isChecked && <FiCheck color="var(--black)" size={20} />}
  //       </div>
  //       <div className='flex-1'>
  //         {props.data.label}
  //       </div>
  //     </div>
  //   )
  // }


  const CustomOption = (props) => {


    const onToggleScenario = (valueEscenario, valueMacroesenario) => {

      if (props.data.value == valueMacroesenario) {

        const updatedScenariosCheck = props.data.scenarios.map((escenarios) => {
          if (escenarios.value == valueEscenario) {
            return { ...escenarios, isChecked: !escenarios.isChecked };
          } else {
            return { ...escenarios };
          }


        });

        console.log({ ...props.data, scenarios: updatedScenariosCheck }, 21212121212)

        handleSelectionChange({ ...props.data, scenarios: updatedScenariosCheck });

      }




    }


    return (

      <div className='main-select-option '>

        <div
          ref={props.innerRef}
          {...props.innerProps}
          style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <div
            className={`main-select-checkbox ${props.data.isChecked && 'main-select-checkbox-active'}`}>
            {props.data.isChecked && <FiCheck color="var(--black)" size={20} />}
          </div>
          {props.data.label}
        </div>

        <div className='main-select-checkbox-children'>
          {props.data.scenarios && props.data.scenarios.map((esce) =>
            <div className='main-select-checkbox-children-options '

              onClick={() => onToggleScenario(esce.value, props.data.value)}
            >
              <div
                className={`main-select-checkbox ${esce.isChecked && 'main-select-checkbox-active'}`}>
                {esce.isChecked && <FiCheck color="var(--black)" size={20} />}
              </div>


              {esce.label &&
                <p>
                  {esce.label}
                </p>}



            </div>
          )}

        </div>
      </div>
    )
  }




  return (
    <a
      data-tooltip-id="disabled-tooltip"
      data-tooltip-content={props.disabledText}
      data-tooltip-place="top"
      className={`main-select ${props.className}`}
    >
      {props.disabled && props.disabledText && <Tooltip id="disabled-tooltip" />}
      <div
        className={`main-select ${props.className}`}
        style={{ opacity: props.disabled ? 0.3 : 1, ...props.style }}
        onMouseEnter={() => { if (!props.disabled) setIsOpen(true) }}
        onMouseLeave={() => { if (!props.disabled) setIsOpen(false) }}>
        {props.fieldName &&
          <label className='fieldName'>{props.fieldName}</label>
        }
        <Select
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              backgroundColor: 'transparent',
              fontFamily: 'var(--primary-font)',
              minHeight: 45,
              marginRight: -2,
              paddingLeft: 4,
              cursor: 'pointer',
              boxShadow: 'none',
              border: '4px solid transparent',
              borderBottomColor: isOpen && 'var(--primary)',
              ':hover': {
                borderColor: 'transparent',
                borderBottomColor: 'var(--primary)'
              },
            }),
            menu: (baseStyles) => ({
              ...baseStyles,
              marginTop: -1,
              border: 'none',
              boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
              borderRadius: 0,
              width: 'auto',//estilo aña
              padding: '0px 20px 0px 20px',



            }),
            placeholder: (defaultStyles) => {
              return {
                ...defaultStyles,
                color: 'var(--text-primary)',
                fontFamily: 'var(--primary-font)'
              }
            },
            input: (styles) => {
              return {
                ...styles,
                fontFamily: 'var(--primary-font)',
              }
            },
            singleValue: (styles, { data }) => ({
              ...styles,
              fontFamily: 'var(--primary-font)',
              color: 'var(--black)',
              fontSize: 13
            }),
            multiValue: (styles) => ({
              ...styles,
              backgroundColor: 'var(--soft-black)',
              borderRadius: 14,
              padding: 4
            }),
            multiValueLabel: (styles) => ({
              ...styles,
              color: 'var(--white)'
            }),
            multiValueRemove: (styles, { data }) => ({
              ...styles,
              color: 'var(--white)',
              cursor: 'pointer',
              borderRadius: 10,
              ':hover': {
                backgroundColor: 'var(--dark-gray)'
              },
            }),
            option: (styles, { data, isDisabled, isFocused, isSelected }) => {
              return {
                ...styles,
                backgroundColor: 'var(--white)',
                color: 'var(--text-primary)',
              };
            },
          }}
          isLoading={!props.options}
          components={{ animatedComponents, IndicatorSeparator: () => null, DropdownIndicator, Option: CustomOption }}
          value={null}
          closeMenuOnSelect={!props.multi}
          blurInputOnSelect={!props.multi}
          isDisabled={props.disabled}
          isMulti={props.multi}
          isClearable={props.clearable}
          isSearchable={props.searchable ?? false}
          placeholder={props.placeholder}
          onChange={handleSelectionChange}
          openMenuOnClick={false}
          menuIsOpen={isOpen}
          // menuIsOpen={true}

          options={props.options} />
      </div>
    </a>
  )
}
