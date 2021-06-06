import React from 'react'
import Error404 from 'pages/Page404'
import Home from 'pages/Home';
import { ERROR_404, HOME } from './Constants'

export interface IRoutes {
	path: string
	name: string
	component: React.FC
	exact?: boolean
	isProtected?: boolean
}

const routes: IRoutes[] = [
	{
		path: HOME,
		name: 'Página Principal',
		component: Home,
		exact: true,
	},
	{
		path: ERROR_404,
		name: 'Página de erro 404',
		component: Error404,
	},
]

export default routes
