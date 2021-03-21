import React from 'react';

import DateTimePickerModal from 'react-native-modal-datetime-picker';

import {
  DateView,
  DateText,
  DateLabel
} from './DatePicker.styles';

interface iDatePicker {
  date: Date | null,
  setDate: React.Dispatch<React.SetStateAction<Date | null>>
  showDate: boolean,
  setShowDate: React.Dispatch<React.SetStateAction<boolean>>,
  dateError: boolean
}

const DatePicker: React.FC<iDatePicker> = ({ date, setDate, showDate, setShowDate, dateError }) => {
  const handleConfirmDate = (selectedDate: Date) => {
    setDate(selectedDate);
    setShowDate(false);
  };

  return (
    <>
      <DateTimePickerModal
        isVisible={showDate}
        mode='date'
        onConfirm={handleConfirmDate}
        onCancel={() => setShowDate(false)}
      />
      <DateView dateError={dateError} onTouchEndCapture={() => setShowDate(true)}>
        <DateLabel dateError={dateError} empty={!showDate && date == null}>Birthday</DateLabel>
        <DateText>
          {date ? `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}` : ''}
        </DateText>
      </DateView>
    </>
  );
}

export default DatePicker;