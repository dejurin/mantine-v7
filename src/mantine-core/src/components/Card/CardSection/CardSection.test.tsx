import React from 'react';
import { render, tests, createContextContainer } from '@mantine/tests';
import { CardSection, CardSectionProps, CardSectionStylesNames } from './CardSection';
import { Card } from '../Card';

const TestContainer = createContextContainer<any>(CardSection, Card, {});

const defaultProps: CardSectionProps = {};

describe('@mantine/core/CardSection', () => {
  tests.itSupportsSystemProps<any, CardSectionStylesNames>({
    component: TestContainer,
    props: defaultProps,
    polymorphic: true,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/CardSection',
    stylesApiSelectors: ['section'],
    compound: true,
    providerName: 'Card',
    selector: '.mantine-Card-section',
    providerStylesApi: false,
  });

  it('sets data-with-border based on withBorder prop', () => {
    const { container, rerender } = render(<TestContainer withBorder />);
    expect(container.querySelector('.mantine-Card-section')).toHaveAttribute('data-with-border');

    rerender(<TestContainer withBorder={false} />);
    expect(container.querySelector('.mantine-Card-section')).not.toHaveAttribute(
      'data-with-border'
    );
  });

  it('sets data-inherit-padding based on inheritPadding prop', () => {
    const { container, rerender } = render(<TestContainer inheritPadding />);
    expect(container.querySelector('.mantine-Card-section')).toHaveAttribute(
      'data-inherit-padding'
    );

    rerender(<TestContainer inheritPadding={false} />);
    expect(container.querySelector('.mantine-Card-section')).not.toHaveAttribute(
      'data-inherit-padding'
    );
  });
});
