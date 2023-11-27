import React, { useEffect } from 'react'
import s from './HW12.module.css'
import s2 from '../../s1-main/App.module.css'
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect'
import { useDispatch, useSelector } from 'react-redux'
import { changeThemeId, initialStateType } from './bll/themeReducer'


const themes = [
	{ id: 1, value: 'light' },
	{ id: 2, value: 'blue' },
	{ id: 3, value: 'dark' },
]

const HW12 = () => {
	const themeId = useSelector<{ theme: initialStateType }, number>(state => state.theme.themeId)
	const dispatch = useDispatch()

	useEffect(() => {
		document.documentElement.dataset.theme = String(themeId);
	}, [themeId]);

	const change = (id: number) => {
		dispatch(changeThemeId(id));
	};

	return (
		<div id={'hw12'} className={s2.hw1}>
			<div id={'hw12-text'} className={s2.hwTitle}>
				Case #12
			</div>
			<hr className={s2.hr} />
			<div className={s2.hw}>
				<SuperSelect
					id={'hw12-select-theme'}
					className={s.select}
					onChangeOption={change}
					options={themes}
				/>
			</div>
		</div>
	)
}

export default HW12
