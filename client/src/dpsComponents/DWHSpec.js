import React, { useState } from 'react';
import useHover from '../hooks/useHover';
import DWH from '../images/Misc/DWH.png';

export const DWHSpec = ({ currentMonster, setCurrentMonster, currentMonsterCopy}) => {

	const baseMonster = currentMonsterCopy;

	const handleChange = (e) => {
		const specCount = parseFloat(e.target.value, 10);

		if (baseMonster && specCount) {
			setCurrentMonster({
				...baseMonster,
				stats: {
					...baseMonster.stats,
					defLvl: baseMonster.stats.defLvl*(Math.pow(0.7, specCount)),
				}
			});
		} else if (baseMonster && !specCount){
			setCurrentMonster({
				...baseMonster,
			})
		}

		//console.log(specCount, baseMonster);
	}

	const [ref, hovered] = useHover();

	return (
		<div className='DWH-spec'>
			<img src={DWH} alt="dragon warhammer" ref={ref}/>
			<input type="number" name='DWH-count' onChange={handleChange}/>
			{hovered && 
				<div className="DWH-spec-hover">
					<h5>DWH Specs Landed</h5>
				</div>
			}
		</div>
	)
}