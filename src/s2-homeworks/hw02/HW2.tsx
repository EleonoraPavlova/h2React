import React, { useState } from 'react'
import Affairs from './affairs/Affairs'
import s2 from '../../s1-main/App.module.css'


export type AffairPriorityType = 'high' | 'low' | 'middle'

export type AffairType = {
  _id: number
  name: string
  priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType


export const filterAffairs = (affairs: AffairType[], filter: string): AffairType[] => {
  if (filter === "all") {
    return affairs
  } else {
    return affairs.filter(a => a.priority === filter)
  }
}

export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => {
  let deletedAffair = affairs.filter(a => a._id !== _id)
  return deletedAffair
}

function HW2() {
  const defaultAffairs: AffairType[] = [
    { _id: 1, name: 'React', priority: 'high' }, // студенты могут изменить содержимое name и количество элементов в массиве, ...priority не менять!
    { _id: 2, name: 'anime', priority: 'low' },
    { _id: 3, name: 'games', priority: 'low' },
    { _id: 4, name: 'work', priority: 'high' },
    { _id: 5, name: 'html & css', priority: 'middle' },
  ]
  let [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs)
  const [filter, setFilter] = useState<FilterType>('all')



  const deleteAffairCallback = (_id: number) => {
    let updatedAffairs = deleteAffair(affairs, _id)
    setAffairs(updatedAffairs)
  }

  const setFilterHandle = (filter: FilterType) => {
    setFilter(filter)
  }

  const filteredAffairs = filterAffairs(affairs, filter)

  return (
    <div id={'hw2'} className="hw2">
      <div className={s2.hwTitle}>Case two</div>
      <hr className={s2.hr} />
      <div className={s2.hw}>
        <Affairs
          data={filteredAffairs}
          setFilter={setFilterHandle}
          deleteAffairCallback={deleteAffairCallback}
          filter={filter}
        />
      </div>
    </div>
  )
}

export default HW2;