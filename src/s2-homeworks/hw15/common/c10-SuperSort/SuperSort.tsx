import React, { useEffect, useState } from 'react'
import downIcon from '../../images/down.svg'
import upIcon from '../../images/up.svg'
import noneIcon from '../../images/bg.png'
import upDownIcon from '../../images/up-down.svg'

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
    return upDownIcon
  } else {
    return down
  }
}

const SuperSort: React.FC<SuperSortPropsType> = (
  { sort, value, onChange, id = 'hw15' }) => {

  // const [clickCount, setClickCount] = useState(0)

  const up = '0' + value
  const down = '1' + value

  const onChangeCallback = () => {
    onChange(pureChange(sort, down, up))
    // const newSort = pureChange(sort, down, up)
    // if (newSort === '') {
    //   // Если сортировка выключена, увеличиваем счетчик кликов
    //   setClickCount(prevCount => prevCount + 1);
    // } else {
    //   // Если сортировка активна, сбрасываем счетчик кликов
    //   setClickCount(0);
    // }
    // onChange(newSort)
    // // debugger
  }

  // const isSortActive = sort === down || sort === up
  // const isSortDisabled = clickCount >= 2

  const icon = (sort === down)
    ? downIcon
    : sort === up
      ? upIcon
      : upDownIcon


  // const iconStyle: React.CSSProperties = {
  //   width: '10px',
  //   height: '10px',
  //   margin: '0 5px',
  //   filter: isSortActive ? 'none' : 'green',
  //   opacity: isSortDisabled ? '0.5' : '1',
  //   pointerEvents: isSortDisabled ? 'none' : 'auto',
  // }

  // useEffect(() => {
  //   if (clickCount > 0) {
  //     setClickCount(0)
  //   }
  // }, [sort])

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