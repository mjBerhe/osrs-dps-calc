import React from 'react';
import { calcTotalBonuses } from '../formulas/totalBonuses';

export const DisplayStats = ({ equippedGear }) => {

	const totalBonuses = calcTotalBonuses(equippedGear);


	return (
		<div className="armor-set-stats">
			<h3>Attack Bonus</h3>
			<h4>{totalBonuses.totalStabAttBonus ? `Stab: ${totalBonuses.totalStabAttBonus}` : 'Stab: 0' }</h4>
			<h4>{totalBonuses.totalSlashAttBonus ? `Slash: ${totalBonuses.totalSlashAttBonus}` : 'Slash: 0' }</h4>
			<h4>{totalBonuses.totalCrushAttBonus ? `Crush: ${totalBonuses.totalCrushAttBonus}` : 'Crush: 0' }</h4>
			<h4>{totalBonuses.totalMagicAttBonus ? `Magic: ${totalBonuses.totalMagicAttBonus}` : 'Magic: 0' }</h4>
			<h4>{totalBonuses.totalRangeAttBonus ? `Range: ${totalBonuses.totalRangeAttBonus}` : 'Range: 0' }</h4>
			<h3>Defence Bonus</h3>
			<h4>{totalBonuses.totalStabDefBonus ? `Stab: ${totalBonuses.totalStabDefBonus}` : 'Stab: 0' }</h4>
			<h4>{totalBonuses.totalSlashDefBonus ? `Slash: ${totalBonuses.totalSlashDefBonus}` : 'Slash: 0' }</h4>
			<h4>{totalBonuses.totalCrushDefBonus ? `Crush: ${totalBonuses.totalCrushDefBonus}` : 'Crush: 0' }</h4>
			<h4>{totalBonuses.totalMagicDefBonus ? `Magic: ${totalBonuses.totalMagicDefBonus}` : 'Magic: 0' }</h4>
			<h4>{totalBonuses.totalRangeDefBonus ? `Range: ${totalBonuses.totalRangeDefBonus}` : 'Range: 0' }</h4>
			<h3>Other Bonuses</h3>
			<h4>{totalBonuses.totalMeleeStrBonus ? `Melee Strength: ${totalBonuses.totalMeleeStrBonus}` : 'Melee Strength: 0' }</h4>
			<h4>{totalBonuses.totalRangeStrBonus ? `Ranged Strength: ${totalBonuses.totalRangeStrBonus}` : 'Ranged Strength: 0' }</h4>
			<h4>{totalBonuses.totalMagicDmgBonus ? `Magic Damage: ${totalBonuses.totalMagicDmgBonus}%` : 'Magic Damage: 0%' }</h4>
			<h4>{totalBonuses.totalPrayerBonus ? `Prayer: ${totalBonuses.totalPrayerBonus}`: 'Prayer: 0'}</h4>
		</div>
	)
} 