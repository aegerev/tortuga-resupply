import React from 'react';
import {ItemContainer} from './components/ItemContainer.jsx';
import './App.css';

function App() {
	return (
		<div className="app-container">
			<h1 className="app-header">Items To Resupply</h1>
			<ItemContainer />
		</div>
	);
}

export default App