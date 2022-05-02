import { styled } from "stitches.config";

export const Header = styled('header', {
  padding: '0 1.2rem',
  height: '4.37rem',
  display: 'flex',
  alignItems: 'center',
  position: 'sticky',
  top: 0,
  left: 0,
  background: '$background',
  justifyContent: 'flex-end',
  borderBottom: '1px solid $lightGray',
  gap: '1rem',
  zIndex: 999,
})
