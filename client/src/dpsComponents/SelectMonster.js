import React, { useState, useEffect } from 'react';
import { Select } from 'react-select-virtualized';

export const SelectMonster = React.memo(({ monstersList, setCurrentMonster, setCurrentMonsterCopy }) => {

	const [select, setSelect] = useState({
		options: [],
	})

	useEffect(() => {
		const loadOptions = () => {
			const options = [];
			if (monstersList) {
				monstersList.forEach((monster) => {
					options.push({
						label: monster.name,
						value: monster.id,
					})
				})

				setSelect((prevSelect) => ({
					...prevSelect,
					options: options,
				}))
			}
		}
		loadOptions();
	}, [monstersList])

	const handleChange = selectedMonster => {
		if (selectedMonster) {
			monstersList.forEach(monster => {
				if (selectedMonster.value === monster.id) {
					setCurrentMonster(monster);
					setCurrentMonsterCopy(monster);
				}
			});
		}
	}

	function monsterStyle (state) {
		return {
			menu: (base) => ({
				...base,
				marginTop: -0.75,
			}),
		}
	}

	return(
		<div className="monster-container">
			<div className="monster-select">
				<Select
					placeholder="Select Monster"
					isSearchable
					onChange={(selectedOption) => handleChange(selectedOption)}
					options={select.options}
					styles={monsterStyle(select)}
				/>
			</div>
		</div>
	)
})

