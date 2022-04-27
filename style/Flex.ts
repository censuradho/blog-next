import { styled } from 'stitches.config'

export const Flex = styled('div', {
  display: 'flex',

  variants: {
    flexWrap: {
      wrap: {
        flexWrap: 'wrap'
      },
      nowrap: {
        flexWrap: 'nowrap'
      }
    },
    fullWidth: {
      true: {
        width: '100%'
      },
    },
    alignSelf: {
      'flex-end': {
        alignSelf: 'flex-end',
      }
    },
    column: {
      true: {
        flexDirection: 'column'
      },
      false: {
        flexDirection: 'row'
      }
    },
    alignItems: {
      'flex-start': {
        alignItems: 'flex-start'
      },
      'flex-end': {
        alignItems: 'flex-end'
      },
      'center': {
        alignItems: 'center'
      },
    },
    justifyContent: {
      'flex-start': {
        justifyContent: 'flex-start'
      },
      'flex-end': {
        justifyContent: 'flex-end'
      },
      'center': {
        justifyContent: 'center'
      },
      'space-between': {
        justifyContent: 'space-between'
      },
      'space-around': {
        justifyContent: 'space-around'
      }
    },
    flex: {
      '1': {
        flex: 1,
      },
    },
    gap: {
      'xs': {
        gap: '$xs'
      },
      'sm': {
        gap: '$sm'
      },
      'md': {
        gap: '$md'
      },
      'lg': {
        gap: '$lg'
      }
    },
    
  },
})