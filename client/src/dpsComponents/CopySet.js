import React from 'react';

export const CopySet = ({ setEquippedGearCopy, equippedGear }) => {

	const handleClick = () => {
		setEquippedGearCopy(equippedGear);
	}

	return (
		<div className='copy-set'>
			<button type="button" className='button'onClick={handleClick}>
				Copy
			</button>
		</div>
	)
}