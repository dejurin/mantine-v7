import React from 'react';
import {
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  Factory,
  useResolvedStylesApi,
  MantineComponentStaticProperties,
} from '@mantine/core';
import { useDatesState } from '../../hooks';
import { DecadeLevelBaseSettings } from '../DecadeLevel';
import { YearLevelBaseSettings } from '../YearLevel';
import { PickerBaseProps, DatePickerType, CalendarLevel } from '../../types';
import { Calendar, CalendarBaseProps } from '../Calendar';
import { DecadeLevelGroupStylesNames } from '../DecadeLevelGroup';
import { YearLevelGroupStylesNames } from '../YearLevelGroup';

export type MonthPickerStylesNames = DecadeLevelGroupStylesNames | YearLevelGroupStylesNames;

type MonthPickerLevel = Exclude<CalendarLevel, 'month'>;

export interface MonthPickerBaseProps<Type extends DatePickerType = 'default'>
  extends PickerBaseProps<Type>,
    DecadeLevelBaseSettings,
    YearLevelBaseSettings,
    Omit<CalendarBaseProps, 'onNextMonth' | 'onPreviousMonth'> {
  /** Max level that user can go up to (decade, year), defaults to decade */
  maxLevel?: MonthPickerLevel;

  /** Initial level displayed to the user (decade, year, month), used for uncontrolled component */
  defaultLevel?: MonthPickerLevel;

  /** Current level displayed to the user (decade, year, month), used for controlled component */
  level?: MonthPickerLevel;

  /** Called when level changes */
  onLevelChange?(level: MonthPickerLevel): void;
}

export interface MonthPickerProps<Type extends DatePickerType = 'default'>
  extends BoxProps,
    MonthPickerBaseProps<Type>,
    StylesApiProps<MonthPickerFactory>,
    ElementProps<'div', 'onChange' | 'value' | 'defaultValue'> {
  /** Called when month is selected */
  onMonthSelect?(date: Date): void;
}

export type MonthPickerFactory = Factory<{
  props: MonthPickerProps;
  ref: HTMLDivElement;
  stylesNames: MonthPickerStylesNames;
}>;

const defaultProps: Partial<MonthPickerProps> = {
  type: 'default',
};

type MonthPickerComponent = (<Type extends DatePickerType = 'default'>(
  props: MonthPickerProps<Type> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => JSX.Element) & { displayName?: string } & MantineComponentStaticProperties<MonthPickerFactory>;

export const MonthPicker: MonthPickerComponent = factory<MonthPickerFactory>((_props, ref) => {
  const props = useProps('MonthPicker', defaultProps, _props);
  const {
    classNames,
    styles,
    unstyled,
    vars,
    type,
    defaultValue,
    value,
    onChange,
    __staticSelector,
    getMonthControlProps,
    allowSingleDateInRange,
    allowDeselect,
    onMouseLeave,
    onMonthSelect,
    __updateDateOnMonthSelect,
    ...others
  } = props;

  const { onDateChange, onRootMouseLeave, onHoveredDateChange, getControlProps } = useDatesState({
    type: type as any,
    level: 'month',
    allowDeselect,
    allowSingleDateInRange,
    value,
    defaultValue,
    onChange,
    onMouseLeave,
  });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<MonthPickerFactory>({
    classNames,
    styles,
    props,
  });

  return (
    <Calendar
      ref={ref}
      minLevel="year"
      __updateDateOnMonthSelect={__updateDateOnMonthSelect ?? false}
      __staticSelector={__staticSelector || 'MonthPicker'}
      onMouseLeave={onRootMouseLeave}
      onMonthMouseEnter={(_event, date) => onHoveredDateChange(date)}
      onMonthSelect={(date) => {
        onDateChange(date);
        onMonthSelect?.(date);
      }}
      getMonthControlProps={(date) => ({
        ...getControlProps(date),
        ...getMonthControlProps?.(date),
      })}
      classNames={resolvedClassNames}
      styles={resolvedStyles}
      {...others}
    />
  );
}) as any;

MonthPicker.classes = Calendar.classes;
MonthPicker.displayName = '@mantine/dates/MonthPicker';
