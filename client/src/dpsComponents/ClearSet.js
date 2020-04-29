import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const ClearSet = ({ setEquippedGear, setUserStats }) => {

	const handleClick = () => {
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
		})
		setUserStats(prevStats => ({
			...prevStats,
			chosenSpell: null,
			isMagic: false,
		}))
	}

	return (
		<div className='clear-set'>
			<button type='button' className='button' onClick={handleClick}>
				{/*<FontAwesomeIcon icon={faTrash} size="2x" inverse/>*/}
				Clear
			</button>
		</div>
	)
}