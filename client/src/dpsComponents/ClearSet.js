import React, { useEffect } from 'react';

export const ClearSet = ({ setEquippedGear, setUserStats, handleEquipmentChange, equippedGear }) => {

	const handleClick = async () => {

		let promise = new Promise(function(resolve, reject) {
			setEquippedGear({
				weapon: null,
				shield: null,
				helm: null,
				body: null,
				leg: null,
				boot: null,
				cape: null,
				glove: null,
				neck: null,
				ring: null,
				ammo: null,
			});
			setUserStats(prevStats => ({
				...prevStats,
				chosenSpell: null,
				isMagic: false,
				attType: null,
				attStyle: null,
			}));
			resolve("done")
		});

		let result = await promise;

		if (result) {
			handleEquipmentChange('weapon', 100000);
			// console.log(result)
		}
	}

	return (
		<div className='clear-set'>
			<button type='button' className='button' onClick={handleClick}>
				Clear
			</button>
		</div>
	)
}
