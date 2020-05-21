import React from 'react';
import { roundNumber } from '../formulas/roundNumber';

export const OutputComparison = ({finalOutput, finalOutput2, dps, dps2, equippedGear, equippedGear2, userStats, userStats2, currentMonster }) => {
	return (
		<div className="final-outputs">
			<table className="outputs-spec-table">
				<tbody>
					<tr>
						<th>Armor Set</th>
						<td>Armor Set 1</td>
						<td>Armor Set 2</td>
					</tr>
					<tr>
						<th>Max Hit</th>
						<td>
							{!finalOutput.maxHit && userStats.attType === 'magic' ? "Select a Spell" : null}
							{finalOutput.maxHit > finalOutput2.maxHit && finalOutput.maxHit && finalOutput2.maxHit ? <strong>{finalOutput.maxHit}</strong> : finalOutput.maxHit}
						</td>
						<td>
							{!finalOutput2.maxHit && userStats2.attType === 'magic' ? "Select a Spell" : null}
							{finalOutput2.maxHit > finalOutput.maxHit && finalOutput.maxHit && finalOutput2.maxHit ? <strong>{finalOutput2.maxHit}</strong> : finalOutput2.maxHit}
						</td>
					</tr>
					<tr>
						<th>Accuracy</th>
						<td>
							{!finalOutput.accuracy && !userStats.attStyle ? "Select Attack Style" : null}
							{!finalOutput.accuracy && equippedGear.weapon && userStats.attStyle && !currentMonster ? "Select Monster" : null}
							{finalOutput.accuracy > finalOutput2.accuracy && finalOutput.accuracy && finalOutput2.accuracy ? <strong>{finalOutput.accuracy ? `${roundNumber(finalOutput.accuracy, 2)}%` : null}</strong> : finalOutput.accuracy ? `${roundNumber(finalOutput.accuracy, 2)}%` : null}
						</td>
						<td>
							{!finalOutput2.accuracy && !userStats2.attStyle ? "Select Attack Style" : null}
							{!finalOutput2.accuracy && equippedGear2.weapon && userStats2.attStyle && !currentMonster ? "Select Monster" : null}
							{finalOutput2.accuracy > finalOutput.accuracy && finalOutput.accuracy && finalOutput2.accuracy ? <strong>{finalOutput2.accuracy ? `${roundNumber(finalOutput2.accuracy, 2)}%` : null}</strong> : finalOutput2.accuracy ? `${roundNumber(finalOutput2.accuracy, 2)}%` : null}
						</td>
					</tr>
					<tr>
						<th>DPS</th>
						<td>
							{!dps && !userStats.attStyle ? "Select Attack Style" : null}
							{!dps && equippedGear.weapon && userStats.attStyle && !currentMonster ? "Select Monster" : null}
							{!dps && userStats.attType === 'magic' && currentMonster ? "Select a Spell" : null}
							{dps > dps2 && dps && dps2 ? <strong>{dps ? roundNumber(dps, 5) : null}</strong> : dps ? roundNumber(dps, 5) : null}
						</td>
						<td>
							{!dps2 && !userStats2.attStyle ? "Select Attack Style" : null}
							{!dps2 && equippedGear2.weapon && userStats2.attStyle && !currentMonster ? "Select Monster" : null}
							{!dps2 && userStats2.attType === 'magic' && currentMonster ? "Select a Spell" : null}
							{dps2 > dps && dps2 && dps ? <strong>{dps2 ? roundNumber(dps2, 5) : null}</strong> : dps2 ? roundNumber(dps2, 5) : null}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}