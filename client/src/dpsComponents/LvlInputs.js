import React from 'react';
import useHover from '../hooks/useHover';
import Attack from '../images/Skills/Attack.png';
import Strength from '../images/Skills/Strength.png';
import Range from '../images/Skills/Range.png';
import Magic from '../images/Skills/Magic.png';

export const LvlInputs = ({ handleStatsChange, userStats }) => {

	const [refAttack, hoveredAttack] = useHover();
	const [refStrength, hoveredStrength] = useHover();
	const [refRange, hoveredRange] = useHover();
	const [refMagic, hoveredMagic] = useHover();

	return(
		<div className="lvl-inputs-class">
			<div className="lvl-item-1">
				<img src={Attack} alt="attack icon" ref={refAttack}/>
				<input type="number" name='attackLvl' value={userStats.attackLvl} onChange={handleStatsChange}/>
				{hoveredAttack && <div className='attack-hover'><h5>Attack Level</h5></div>}
			</div>
			<div className="lvl-item-2">
				<img src={Strength} alt="strength icon" ref={refStrength}/>
				<input type='number' name='strengthLvl' value={userStats.strengthLvl} onChange={handleStatsChange}/>
				{hoveredStrength && <div className='strength-hover'><h5>Strength Level</h5></div>}
			</div>
			<div className="lvl-item-3" ref={refRange}>
				<img src={Range} alt="range icon"/>
				<input type="number" name="rangeLvl" value={userStats.rangeLvl} onChange={handleStatsChange}/>
				{hoveredRange && <div className='range-hover'><h5>Ranged Level</h5></div>}
			</div>
			<div className="lvl-item-4">
				<img src={Magic} alt="magic icon" ref={refMagic}/>
				<input type="number" name="magicLvl" value={userStats.magicLvl} onChange={handleStatsChange}/>
				{hoveredMagic && <div className='magic-hover'><h5>Magic Level</h5></div>}
			</div>
		</div>
	)
}