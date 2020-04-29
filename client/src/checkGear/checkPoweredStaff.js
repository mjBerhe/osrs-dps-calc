export function checkPoweredStaff(equippedGear, userStats, setUserStats) {
	const poweredStaves = [11907, 11905, 22288, 12899, 22292, 22323, 22381];
	if (equippedGear.weapon) {
		if (poweredStaves.includes(equippedGear.weapon.id)) {
			setUserStats(userStats => ({
				...userStats,
				isMagic: true,
				//isRange: false,
				attType: 'magic',
			}));
		} else {
			setUserStats(userStats => ({
				...userStats,
				isMagic: false,
			}));
		}
	}
}