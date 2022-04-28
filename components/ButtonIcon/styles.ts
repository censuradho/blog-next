import { styled } from "stitches.config";

export const Button = styled('button', {
  padding: '0.5rem',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '$lightGray',

  '&:disabled': {
    opacity: 0.4,
    cursor: 'auto'
  }
})