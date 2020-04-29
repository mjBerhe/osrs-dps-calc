import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaste } from '@fortawesome/free-solid-svg-icons';

export const PasteSet = ({ equippedGearCopy, setEquippedGear }) => {

	const handleClick = () => {
		setEquippedGear(equippedGearCopy);
	}

	return (
		<div className='paste-set'>
			<button type="button" className="button" onClick={handleClick}>
				{/*<FontAwesomeIcon icon={faPaste} size="2x" inverse/>*/}
				Paste
			</button>
		</div>
	)
}