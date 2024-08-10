import React, { useState } from 'react';
import { Counter } from './Counter.jsx';

export function ItemContainer() {
	const initialCounts = {
		Binoculars: 0,
		Tires: 0,
		WaterBottles: 0,
		SDMemoryCards: 0,
        Meat: 0,
        Flour: 0,
        Eggs: 0,
        Cereal: 0,
        Yogurt: 0,
        USBDrives: 0,
        BugSpray: 0
	};

	const [fruitCounts, setFruitCounts] = useState(initialCounts);

	const setCount = (fruit, newCount) => {
		setFruitCounts((prevCounts) => ({
			...prevCounts,
			[fruit]: newCount,
		}));
	};

	let totalCount = Object.values(fruitCounts).reduce(
		(acc, count) => acc + count,
		0
	);

	return (
		<>
			<div className="fruit-container">
				{Object.entries(fruitCounts).map(([fruitName, count]) => (
					<Counter
						key={fruitName}
						fruitName={fruitName}
						count={count}
						setCount={setCount}
					/>
				))}
			</div>
			<div className="total-fruits">Total Items: {totalCount}</div>
		</>
	);
}