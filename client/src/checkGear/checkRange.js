export function checkRange(equippedGear, setUserStats) {
	// checking if weapon is a ranged weapon, then setting isRange to true or false
	if (equippedGear.weapon) {
		if (equippedGear.weapon.wepType === "bows" || equippedGear.weapon.wepType === "crossbows" || equippedGear.weapon.wepType === "thrown_weapons" || equippedGear.weapon.wepType === "chinchompas") {
			setUserStats(prevStats => ({
				...prevStats,
				isRange: true,
			}));
		} else {
			setUserStats(prevStats => ({
				...prevStats,
				isRange: false,
			}));
		}
	}
}