import React, { useState } from 'react'
import s from './Stand.module.css'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'
import SuperButton from './common/c2-SuperButton/SuperButton'

const Stand = () => {
  const [stateForAllInputs, setValue] = useState<string>('')
  const [error, setError] = useState<string>('')

  const [stateForAllCheckboxes, setChecked] = useState<boolean>(false)

  const onEnterHandler = () => {
    setError(stateForAllInputs.trim() ? '' : 'Error')
    setValue('')
  }

  return (
    <div id={'hw4-stand'} className={s.stand}>
      <div className={s.inputs}>
        {/*совместим со старым кодом:*/}
        <div>
          <SuperInputText
            id={'hw4-super-input-like-old'}
            value={stateForAllInputs}
            onChange={(e) => setValue(e.currentTarget.value)}
          />
        </div>
        {/*инпут с ошибкой:*/}
        <div>
          <SuperInputText
            id={'hw4-super-input-with-error'}
            value={stateForAllInputs}
            onChangeText={setValue}
            error={error}
            onEnter={onEnterHandler}
          />
        </div>
      </div>

      <div className={s.buttons}>
        <div>
          <SuperButton id={'hw4-super-button-default'}>
            Default
          </SuperButton>
        </div>
        <div>
          <SuperButton id={'hw4-super-button-red'} xType={'red'}>
            Red
          </SuperButton>
        </div>
        <div>
          <SuperButton
            id={'hw4-super-button-disabled'}
            xType={'disabled'}
            disabled
          >
            Disabled
          </SuperButton>
        </div>
        <div>
          <SuperButton
            id={'hw4-super-button-secondary'}
            xType={'secondary'}
          >
            Secondary
          </SuperButton>
        </div>
      </div>

      <div className={s.checkboxes}>
        {/*чекбокс с текстом:*/}
        <div>
          <SuperCheckbox
            id={'hw4-super-checkbox-with-text'}
            checked={stateForAllCheckboxes}
            onChangeChecked={setChecked}
          >
            Hometask
          </SuperCheckbox>
        </div>
        {/*совместим со старым кодом:*/}
        <div>
          <SuperCheckbox
            id={'hw4-super-checkbox-like-old'}
            checked={stateForAllCheckboxes}
            onChangeChecked={setChecked}
          // onChange={(e) => setChecked(e.currentTarget.checked)}
          />
        </div>
      </div>
    </div>
  )
}

export default Stand
