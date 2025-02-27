import React, { forwardRef } from 'react';
import {
  UnstyledButton,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  Factory,
  rem,
} from '@mantine/core';
import { useRichTextEditorContext } from '../RichTextEditor.context';
import { RichTextEditorLabels } from '../labels';
import classes from '../RichTextEditor.module.css';

export type RichTextEditorControlStylesNames = 'control';

export interface RichTextEditorControlProps
  extends BoxProps,
    StylesApiProps<RichTextEditorControlFactory>,
    ElementProps<'button'> {
  /** Determines whether the control should have active state, false by default */
  active?: boolean;

  /** Determines whether the control can be interacted with, set `false` to make the control to act as a label */
  interactive?: boolean;
}

export type RichTextEditorControlFactory = Factory<{
  props: RichTextEditorControlProps;
  ref: HTMLButtonElement;
  stylesNames: RichTextEditorControlStylesNames;
  compound: true;
}>;

const defaultProps: Partial<RichTextEditorControlProps> = {
  interactive: true,
};

export const RichTextEditorControl = factory<RichTextEditorControlFactory>((_props, ref) => {
  const props = useProps('RichTextEditorControl', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, interactive, active, ...others } =
    props;
  const ctx = useRichTextEditorContext();

  return (
    <UnstyledButton
      {...others}
      {...ctx.getStyles('control', { className, style, classNames, styles })}
      data-rich-text-editor-control
      tabIndex={interactive ? 0 : -1}
      data-interactive={interactive || undefined}
      data-active={active || undefined}
      aria-pressed={(active && interactive) || undefined}
      aria-hidden={!interactive || undefined}
      ref={ref}
      unstyled={unstyled}
    />
  );
});

RichTextEditorControl.classes = classes;
RichTextEditorControl.displayName = '@mantine/tiptap/RichTextEditorControl';

export interface RichTextEditorControlBaseProps extends RichTextEditorControlProps {
  icon?: React.FC<{ style: React.CSSProperties }>;
}

export const RichTextEditorControlBase = forwardRef<
  HTMLButtonElement,
  RichTextEditorControlBaseProps
>(({ className, icon: Icon, ...others }: any, ref) => (
  <RichTextEditorControl ref={ref} {...others}>
    <Icon style={{ width: rem(16), height: rem(16) }} />
  </RichTextEditorControl>
));

RichTextEditorControlBase.displayName = '@mantine/tiptap/RichTextEditorControlBase';

export interface CreateControlProps {
  label: keyof RichTextEditorLabels;
  icon: React.FC<{ style: React.CSSProperties }>;
  isActive?: { name: string; attributes?: Record<string, any> | string };
  operation: { name: string; attributes?: Record<string, any> | string };
}

export function createControl({ label, isActive, operation, icon }: CreateControlProps) {
  return forwardRef<HTMLButtonElement, RichTextEditorControlBaseProps>((props, ref) => {
    const { editor, labels } = useRichTextEditorContext();
    const _label = labels[label] as string;
    return (
      <RichTextEditorControlBase
        {...props}
        aria-label={_label}
        title={_label}
        active={isActive?.name ? editor?.isActive(isActive.name, isActive.attributes) : false}
        ref={ref}
        onClick={() => (editor as any)?.chain().focus()[operation.name](operation.attributes).run()}
        icon={props.icon || icon}
      />
    );
  });
}
