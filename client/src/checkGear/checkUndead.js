export function checkUndead(currentMonster, userStats, setUserStats) {
	if (currentMonster) {
		if (currentMonster.attributes.includes("undead")) {
			setUserStats((userStats) => ({
				...userStats,
				isMonsterUndead: true,
			}))
		} else {
			setUserStats((userStats) => ({
				...userStats,
				isMonsterUndead: false,
			}))
		}
	}
}