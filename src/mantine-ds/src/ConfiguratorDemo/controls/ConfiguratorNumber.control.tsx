import React from 'react';
import { Slider, Input, BoxProps, ElementProps } from '@mantine/core';
import { getControlLabel } from './get-control-label';
import { ConfiguratorControl } from './types';

export type ConfiguratorNumberControlOptions = ConfiguratorControl<
  'number',
  { initialValue: number; min?: number; max?: number; step?: number }
>;

export interface ConfiguratorNumberControlProps extends BoxProps, ElementProps<'div', 'onChange'> {
  value: number;
  onChange(value: number): void;
  prop: string;
  step?: number;
  min?: number;
  max?: number;
}

export function ConfiguratorNumberControl({
  value,
  onChange,
  prop,
  step,
  min,
  max,
  ...others
}: ConfiguratorNumberControlProps) {
  return (
    <Input.Wrapper labelElement="div" label={getControlLabel(prop)} {...others}>
      <Slider value={value} onChange={onChange} step={step} min={min} max={max} />
    </Input.Wrapper>
  );
}
