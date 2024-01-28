import React from 'react'
import downIcon from '../../images/down.svg'
import upIcon from '../../images/up.svg'
import noneIcon from '../../images/bg.png'

export type SuperSortPropsType = {
  id?: string
  sort: string
  value: string
  onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
  if (sort === down) {
    return up
  } else if (sort === up) {
    return ""
  } else {
    return down
  }
}

const SuperSort: React.FC<SuperSortPropsType> = (
  { sort, value, onChange, id = 'hw15' }) => {

  const up = '0' + value
  const down = '1' + value

  const onChangeCallback = () => {
    onChange(pureChange(sort, down, up))
  }

  const icon = (sort === down)
    ? downIcon
    : sort === up
      ? upIcon
      : noneIcon


  return (
    <span
      id={id + '-sort-' + value}
      onClick={onChangeCallback}
    >
      <img id={id + '-icon-' + sort}
        style={{
          width: '10px',
          height: '10px',
          margin: '0 5px',
        }}
        src={icon} />
    </span>
  )
}

export default SuperSort