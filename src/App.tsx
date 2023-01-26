import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './HomePage';
import { Authentication } from './auth/Authentication';
import { AuthenticatedRoute } from './auth/routes/AuthenticatedRoutes';
import './index.css';

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="auth/*" element={<Authentication />} />
				<Route element={<AuthenticatedRoute />}>
					<Route path="/" element={<HomePage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
