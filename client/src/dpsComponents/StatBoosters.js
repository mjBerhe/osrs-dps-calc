import React from 'react';
import empty from '../images/Potions/attack/empty.png';
import att1 from '../images/Potions/attack/att1.png';
import att2 from '../images/Potions/attack/att2.png';
import att3 from '../images/Potions/attack/att3.png';
import str1 from '../images/Potions/strength/str1.png';
import str2 from '../images/Potions/strength/str2.png';
import str3 from '../images/Potions/strength/str3.png';
import rng1 from '../images/Potions/range/rng1.png';
import rng2 from '../images/Potions/range/rng2.png';
import mag1 from '../images/Potions/magic/mag1.png';
import mag2 from '../images/Potions/magic/mag2.png';
import mag3 from '../images/Potions/magic/mag3.png';
import nmz from '../images/Potions/overload/nmz.png';
import cox from '../images/Potions/overload/cox.png';

import aprayer0 from "../images/Prayers/attack/none.png";
import aprayer1 from "../images/Prayers/attack/attack1.png";
import aprayer2 from "../images/Prayers/attack/attack2.png";
import aprayer3 from "../images/Prayers/attack/attack3.png";
import chivalry from "../images/Prayers/attack/chivalry.png";
import piety from "../images/Prayers/attack/piety.png";
import sprayer0 from "../images/Prayers/strength/none.png";
import sprayer1 from "../images/Prayers/strength/str1.png";
import sprayer2 from "../images/Prayers/strength/str2.png";
import sprayer3 from "../images/Prayers/strength/str3.png";
import rprayer0 from "../images/Prayers/range/rprayer0.png";
import rprayer1 from "../images/Prayers/range/rprayer1.png";
import rprayer2 from "../images/Prayers/range/rprayer2.png";
import rprayer3 from "../images/Prayers/range/rprayer3.png";
import rprayer4 from "../images/Prayers/range/rprayer4.png";
import mprayer0 from "../images/Prayers/magic/mprayer0.png";
import mprayer1 from "../images/Prayers/magic/mprayer1.png";
import mprayer2 from "../images/Prayers/magic/mprayer2.png";
import mprayer3 from "../images/Prayers/magic/mprayer3.png";
import mprayer4 from "../images/Prayers/magic/mprayer4.png";

export const StatBoosters = ({ userStats, handleStatsChange }) => {

	const attPotions = [empty, att1, att2, att3, nmz, cox, cox, cox];
	const strPotions = [empty, str1, str2, str3, nmz, cox, cox, cox];
	const rngPotions = [empty, rng1, rng2, nmz, cox, cox, cox];
	const magPotions = [empty, mag1, mag2, mag3, nmz, cox, cox, cox];
	const attPrayers = [aprayer0, aprayer1, aprayer2, aprayer3, chivalry, piety];
	const strPrayers = [sprayer0, sprayer1, sprayer2, sprayer3, chivalry, piety];
	const rngPrayers = [rprayer0, rprayer1, rprayer2, rprayer3, rprayer4];
	const magPrayers = [mprayer0, mprayer1, mprayer2, mprayer3, mprayer4];

	return(
		<div className="potions-prayers">
			<div className="potion-class">
				<div className="potion-item">
					<img src={attPotions[userStats.attPotion]} alt="chosen attack potion"/>
					<select name="attPotion" onChange={handleStatsChange} defaultValue={0}>
						<option value={0} hidden>Select Attack Potion</option>
						<option value={0}>None</option>
						<option value={1}>Attack Potion</option>
						<option value={2}>Super Attack Potion</option>
						<option value={3}>Divine Attack Potion</option>
						<option value={4}>Overload (NMZ)</option>
						<option value={5}>Overload (-) (CoX)</option>
						<option value={6}>Overload (CoX)</option>
						<option value={7}>Overload (+) (CoX)</option>
					</select>
				</div>

				<div className="potion-item">
					<img src={strPotions[userStats.strPotion]} alt="chosen strength potion"/>
					<select name="strPotion" onChange={handleStatsChange} defaultValue={0}>
						<option value={0} hidden>Select Strength Potion</option>
						<option value={0}>None</option>
						<option value={1}>Strength Potion</option>
						<option value={2}>Super Strength Potion</option>
						<option value={3}>Divine Strength Potion</option>
						<option value={4}>Overload (NMZ)</option>
						<option value={5}>Overload (-) (CoX)</option>
						<option value={6}>Overload (CoX)</option>
						<option value={7}>Overload (+) (CoX)</option>
					</select>
				</div>

				<div className="potion-item">
					<img src={rngPotions[userStats.rngPotion]} alt="chosen range potion"/>
					<select name="rngPotion" onChange={handleStatsChange} defaultValue={0}>
						<option value={0} hidden>Select Range Potion</option>
						<option value={0}>None</option>
						<option value={1}>Ranging Potion</option>
						<option value={2}>Divine Ranging Potion</option>
						<option value={3}>Overload (NMZ)</option>
						<option value={4}>Overload (-) (CoX)</option>
						<option value={5}>Overload (CoX)</option>
						<option value={6}>Overload (+) (CoX)</option>
					</select>
				</div>

				<div className="potion-item">
					<img src={magPotions[userStats.magPotion]} alt="chosen magic potion"/>
					<select name="magPotion" onChange={handleStatsChange} defaultValue={0}>
						<option value={0} hidden>Select Magic Potion</option>
						<option value={0}>None</option>
						<option value={1}>Magic Potion</option>
						<option value={2}>Divine Magic Potion</option>
						<option value={3}>Imbued Heart</option>
						<option value={4}>Overload (NMZ)</option>
						<option value={5}>Overload (-) (CoX)</option>
						<option value={6}>Overload (CoX)</option>
						<option value={7}>Overload (+) (CoX)</option>
					</select>
				</div>
			</div>

			<div className="prayer-class">
				<div className="prayer-item">
					<div className='prayer-pic-container'>
						<img src={attPrayers[userStats.attPrayer]} alt="chosen attack prayer"/>
					</div>
					<select name="attPrayer" onChange={handleStatsChange} defaultValue={0}>
						<option value={0} hidden>Select Attack Prayer</option>
						<option value={0}>None</option>
						<option value={1}>Clarity of Thought</option>
						<option value={2}>Improved Reflexes</option>
						<option value={3}>Incredible Reflexes</option>
						<option value={4}>Chivalry</option>
						<option value={5}>Piety</option>
					</select>
				</div>

				<div className="prayer-item">
					<div className='prayer-pic-container'>
						<img src={strPrayers[userStats.strPrayer]} alt="chosen strength prayer"/>
					</div>
					<select name="strPrayer" onChange={handleStatsChange} defaultValue={0}>
						<option value={0} hidden>Select Strength Prayer</option>
						<option value={0}>None</option>
						<option value={1}>Burst of Strength</option>
						<option value={2}>Superhuman Strength</option>
						<option value={3}>Ultimate Strength</option>
						<option value={4}>Chivalry</option>
						<option value={5}>Piety</option>
					</select>
				</div>

				<div className="prayer-item">
					<div className='prayer-pic-container'>
						<img src={rngPrayers[userStats.rngPrayer]} alt="chosen range prayer"/>
					</div>
					<select name="rngPrayer" onChange={handleStatsChange} defaultValue={0}>
						<option value={0} hidden>Select Range Prayer</option>
						<option value={0}>None</option>
						<option value={1}>Sharp Eye</option>
						<option value={2}>Hawk Eye</option>
						<option value={3}>Eagle Eye</option>
						<option value={4}>Rigour</option>
					</select>
				</div>

				<div className="prayer-item">
					<div className='prayer-pic-container'>
						<img src={magPrayers[userStats.magPrayer]} alt="chosen range prayer"/>
					</div>
					<select name="magPrayer" onChange={handleStatsChange} defaultValue={0}>
						<option value={0} hidden>Select Magic Prayer</option>
						<option value={0}>None</option>
						<option value={1}>Mystic Will</option>
						<option value={2}>Mystic Lore</option>
						<option value={3}>Mystic Might</option>
						<option value={4}>Augury</option>
					</select>
				</div>
			</div>
		</div>
	);
}