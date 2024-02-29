import React, { useRef } from 'react'

import './MainDatepicker.scss';
import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import en from "date-fns/locale/en-US";
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import MainSelect from '../select/MainSelect';

registerLocale("es", es);
registerLocale("en", en);


export default function MainDatepicker(props) {

  const { t } = useTranslation();
  const pickerRef = useRef(null);

  const [startDate, setStartDate] = React.useState(props.startDate ?? new Date());
  const [endDate, setEndDate] = React.useState(props.endDate ?? null);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    props.onChange(start, end);
  };

  const CustomInput = React.forwardRef(({value, onClick}, ref) => (
    <div ref={ref} style={{cursor: 'pointer'}}>
      <MainSelect 
      disabled
      style={{opacity: 1, borderWidth: 2, borderColor: 'red'}}
      placeholder={props.placeholder ?? t('DATETIME.CHOOSE_DATE_RANGE')}
      options={[]}/>
    </div>
  ));

  return (
    <div className={props.className} onMouseEnter={() => pickerRef.current.setOpen(true)} onMouseLeave={() => pickerRef.current.setOpen(false)}>
      <DatePicker 
      ref={pickerRef}
      selectsRange
      disabledKeyboardNavigation
      locale={i18next.language}
      showPopperArrow={false}
      dateFormat="dd/MM/yyyy"
      selected={startDate} 
      startDate={startDate} 
      endDate={endDate}
      onChange={onChange}
      minDate={props.minDate}
      maxDate={props.maxDate}
      customInput={<CustomInput/>}
      monthsShown={2}
      popperPlacement='bottom-end'
      onKeyDown={(e) => {
        e.preventDefault();
      }} />
    </div>
  );
}
