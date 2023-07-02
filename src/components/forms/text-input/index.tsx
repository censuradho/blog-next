import { classNames } from '@/utils/classNames'
import styles from './styles.module.css'
import { TextInputProps } from './types'
import { forwardRef } from 'react'
import { Icon } from '@/components/icon'
import { classGroupe } from 'utils/classNames'

export const TextInput = forwardRef<HTMLInputElement | null, TextInputProps>(
  (props, ref) => {
    const { 
      variant ='dark',
      label,
      errorMessage,
      leftIcon,
      rightIcon,
      ...otherProps
    } = props

    const variantes = classNames({
      [styles['text_input-default']]: variant === 'default'
    }, [
      styles.text_input
    ])

    const renderLabel = () => {
      if (!label) return null

      return (
        <label
          htmlFor={otherProps?.id} 
          className={styles['text_input-label']}
        >{label}</label>
      )
    }

    const renderErrorMessage = () => {
      if (!errorMessage) return null

      return (
        <span className={styles['text_input-error_message']}>{errorMessage}</span>
      )
    }

    const renderLeftIcon = () => {
      if (!leftIcon) return null

      return (
        <div className={classGroupe(styles['text__input__icon--left'], styles.text__input__icon)}>
          <Icon 
            {...leftIcon}
          />
        </div>
      )
    }

    const renderRightIcon = () => {
      if (!rightIcon) return null

      return (
        <div className={classGroupe(styles['text__input__icon--right'], styles.text__input__icon)}>
          <Icon 
            {...rightIcon}
          />
        </div>
      )
    }

    const classMap = classNames({
      [styles['text_input-input--has_left_icon']]: !!leftIcon
    }, [
      styles['text_input-input']
    ])


    return (
      <div className={variantes}>
        {renderLabel()}
        <div className={styles.text_input__root}>
          {renderLeftIcon()}
          <input
            ref={ref}
            className={classMap}
            {...otherProps}
          />
          {renderRightIcon()}
        </div>
        {renderErrorMessage()}
      </div>
    )
  })