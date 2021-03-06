import React, { useCallback } from 'react';
import { DateInputProps } from 'semantic-ui-calendar-react';
import moment from 'moment';
import { DATE_FORMAT } from '../../../helpers/Dates';
import { DateInputWrapper } from './wrappers';
import { Label } from '../Input/Wrappers';

moment.locale('ru');

const BaseDateInput = ({ value, onChange, label, format = DATE_FORMAT, ...dateInputProps }: BaseDateInputProps) => {
  const onDateChange = useCallback(
    (e: React.SyntheticEvent<HTMLElement>, data: { value: string }) => {
      onChange(data.value.replace(/,/g, '.'));
    },
    [onChange],
  );

  return (
    <div style={{ position: 'relative' }}>
      {label && value ? <Label>{label}</Label> : ''}
      <DateInputWrapper
        name="date"
        icon="calendar alternate outline"
        value={value}
        onChange={onDateChange}
        dateFormat={format}
        closable
        closeOnMouseLeave={false}
        preserveViewMode={false}
        {...dateInputProps}
      />
    </div>
  );
};

export type BaseDateInputProps = {
  value: string | Date;
  onChange: (date: string) => void;
  format?: string;
  label?: string;
} & Partial<Omit<DateInputProps, 'value' | 'onChange'>>;

export default BaseDateInput;
