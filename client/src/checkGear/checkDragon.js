export function checkDragon(currentMonster, userStats, setUserStats) {
	if (currentMonster) {
		if (currentMonster.attributes.includes("dragon")) {
			setUserStats((userStats) => ({
				...userStats,
				isMonsterDragon: true,
			}))
		} else {
			setUserStats((userStats) => ({
				...userStats,
				isMonsterDragon: false,
			}))
		}
	}
}