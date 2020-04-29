import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

export const CopySet = ({ setEquippedGearCopy, equippedGear }) => {

	const handleClick = () => {
		setEquippedGearCopy(equippedGear);
	}

	return (
		<div className='copy-set'>
			<button type="button" className='button'onClick={handleClick}>
				{/*<FontAwesomeIcon icon={faCopy} size="2x" inverse />*/}
				Copy
			</button>
		</div>
	)
}