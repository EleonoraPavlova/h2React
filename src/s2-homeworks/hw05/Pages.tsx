import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Error404 from './pages/Error404'
import PreJunior from './pages/PreJunior'
import Junior from './pages/Junior'
import JuniorPlus from './pages/JuniorPlus'

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
}

function Pages() {
    return (
        <div>
            {/*Routes выбирает первый подходящий роут*/}
            <Routes>
                {/*роутинг будут писать студенты*/}
                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу /pre-junior*/}
                <Route path={'/'} element={<Navigate to={'/pre-junior'} />} />

                <Route path={'/pages/pre-junior'} element={<PreJunior />} />
                <Route path={'/pages/junior'} element={<Junior />} />
                <Route path={'/pages/junior-plus'} element={<JuniorPlus />} />

                {/*роут для несуществующей страницы должен отрисовать <Error404 />*/}
                <Route path={'/pages/*'} element={<Error404 />} />
            </Routes>
        </div>
    )
}

export default Pages
