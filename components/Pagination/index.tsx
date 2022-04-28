import { ButtonIcon } from 'components/ButtonIcon'
import { memo } from 'react'

import * as Styles from './styles'

interface PaginationProps {
  current?: number;
  total?: number;
  prev?: number | null;
  next?: number | null;
  onChange?: (value: number) => void;
}

function BasePagination ({ 
    current = 0, 
    total = 0, 
    prev = 0, 
    next = 0,
    onChange,
  }: PaginationProps) {
  const _total = total > 0 ? total : 1

  return (
    <Styles.Navigation>
      <ButtonIcon
        disabled={_total === 1}
        icon={{ name: 'arrowLeft' }} 
        onClick={() => onChange?.(prev || current - 1)}
      />
      <Styles.Counter>{`${current} de ${_total}`}</Styles.Counter>
      <ButtonIcon
        disabled={current === _total}
        icon={{ name: 'arrowRight' }} 
        onClick={() => onChange?.(next || current + 1)}
      />
    </Styles.Navigation>
  )
}

export const Pagination = memo(BasePagination)