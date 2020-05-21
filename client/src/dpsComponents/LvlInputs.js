import React from 'react';
import useHover from '../hooks/useHover';
import Attack from '../images/Skills/Attack.png';
import Strength from '../images/Skills/Strength.png';
import Range from '../images/Skills/Range.png';
import Magic from '../images/Skills/Magic.png';

export const LvlInputs = ({ userStats, setUserStats, setUserStats2 }) => {

	const handleChange = (e) => {
		e.persist();
		setUserStats(prevStats => ({
			...prevStats,
			[e.target.name]: parseFloat(e.target.value, 10),
		}));
		setUserStats2(prevStats2 => ({
			...prevStats2,
			[e.target.name]: parseFloat(e.target.value, 10),
		}));
	}

	const [refAttack, hoveredAttack] = useHover();
	const [refStrength, hoveredStrength] = useHover();
	const [refRange, hoveredRange] = useHover();
	const [refMagic, hoveredMagic] = useHover();

	return(
		<div className="lvl-inputs-class">
			<div className="lvl-item-1">
				<img src={Attack} alt="attack icon" ref={refAttack}/>
				<input type="number" name='attackLvl' value={userStats.attackLvl} onChange={handleChange}/>
				{hoveredAttack && <div className='attack-hover'><h5>Attack Level</h5></div>}
			</div>
			<div className="lvl-item-2">
				<img src={Strength} alt="strength icon" ref={refStrength}/>
				<input type='number' name='strengthLvl' value={userStats.strengthLvl} onChange={handleChange}/>
				{hoveredStrength && <div className='strength-hover'><h5>Strength Level</h5></div>}
			</div>
			<div className="lvl-item-3" ref={refRange}>
				<img src={Range} alt="range icon"/>
				<input type="number" name="rangeLvl" value={userStats.rangeLvl} onChange={handleChange}/>
				{hoveredRange && <div className='range-hover'><h5>Ranged Level</h5></div>}
			</div>
			<div className="lvl-item-4">
				<img src={Magic} alt="magic icon" ref={refMagic}/>
				<input type="number" name="magicLvl" value={userStats.magicLvl} onChange={handleChange}/>
				{hoveredMagic && <div className='magic-hover'><h5>Magic Level</h5></div>}
			</div>
		</div>
	)
}