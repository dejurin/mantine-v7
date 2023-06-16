import React, { useId } from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  Factory,
} from '../../../core';
import { useComboboxContext } from '../Combobox.context';
import classes from '../Combobox.module.css';

export type ComboboxOptionStylesNames = 'option';

export interface ComboboxOptionProps
  extends BoxProps,
    StylesApiProps<ComboboxOptionFactory>,
    ElementProps<'div'> {
  /** Option value */
  value: string;
}

export type ComboboxOptionFactory = Factory<{
  props: ComboboxOptionProps;
  ref: HTMLDivElement;
  stylesNames: ComboboxOptionStylesNames;
  compound: true;
}>;

const defaultProps: Partial<ComboboxOptionProps> = {};

export const ComboboxOption = factory<ComboboxOptionFactory>((_props, ref) => {
  const props = useProps('ComboboxOption', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, onClick, id, ...others } = props;
  const ctx = useComboboxContext();
  const uuid = useId();
  const _id = id || uuid;

  return (
    <Box
      ref={ref}
      {...ctx.getStyles('option', { className, classNames, styles, style })}
      {...others}
      id={_id}
      data-combobox-option
      role="option"
      onClick={(event) => {
        ctx.onItemSelect?.(props.value, props);
        onClick?.(event);
      }}
    />
  );
});

ComboboxOption.classes = classes;
ComboboxOption.displayName = '@mantine/core/ComboboxOption';
