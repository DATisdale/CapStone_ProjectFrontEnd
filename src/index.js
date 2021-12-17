import * as React from 'react';
import reactDom from 'react-dom';
//import { StyledEngineProvider } from '@mui/material/styles'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'

reactDom.render(
    <Router>
        <StyledEngineProvider injectFirst>
            <App/>
        </StyledEngineProvider>
    </Router>,
    document.querySelector("#root")
)

