import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalContextWrapper from './app/contexts/GlobalContextWrapper'

import './index.scss'

const root = document.getElementById('root')
ReactDOM.render(
    <React.StrictMode>
        <GlobalContextWrapper>
            <App />
        </GlobalContextWrapper>
    </React.StrictMode>,
    root
)
