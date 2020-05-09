import React from 'react';

export const PasteSet = ({ equippedGearCopy, setEquippedGear }) => {

	const handleClick = () => {
		setEquippedGear(equippedGearCopy);
	}

	return (
		<div className='paste-set'>
			<button type="button" className="button" onClick={handleClick}>
				Paste
			</button>
		</div>
	)
}