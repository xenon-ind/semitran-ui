import type React from 'react'
import './Button.css'
import mergeCSSClasses from '../../utils/mergeCSSClasses'
import { COMMON_CSS_CLASS_NAME } from '../../constants'

const CLASS_NAME = 'st-button'

type Variant = 'primary' | 'secondary'

const VARIANT_CLASSES = {
  primary: 'st-primary',
  secondary: 'st-secondary',
}

const DEFAULT_VARIANT = 'secondary'

export interface ButtonProps {
  variant?: Variant
  dangerous?: boolean

  children?: React.ReactNode

  buttonHTMLProps: React.HTMLAttributes<HTMLButtonElement>
}

export function Button(props: ButtonProps) {
  return (
    <button
      type='button'
      className={mergeCSSClasses(
        COMMON_CSS_CLASS_NAME,
        CLASS_NAME,
        VARIANT_CLASSES[props.variant ? props.variant : DEFAULT_VARIANT],
        props.buttonHTMLProps.className
      )}
      {...props.buttonHTMLProps}
    >
      {props.children}
    </button>
  )
}
