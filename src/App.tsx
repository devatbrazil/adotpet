import React from 'react'
import GlobalStyles from 'styles/GlobalStyles'
import { BrowserRouter } from 'react-router-dom'
import Routes from 'routes'

const App: React.FC = () => (
	<BrowserRouter>
		<GlobalStyles />
		{/*<Header />*/}
		<Routes />
	</BrowserRouter>
)

export default App
