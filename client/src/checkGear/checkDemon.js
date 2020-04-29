export function checkDemon(currentMonster, userStats, setUserStats) {
	if (currentMonster) {
		if (currentMonster.attributes.includes("demon")) {
			setUserStats((userStats) => ({
				...userStats,
				isMonsterDemon: true,
			}));
		} else {
			setUserStats((userStats) => ({
				...userStats,
				isMonsterDemon: false,
			}));
		}
	}
}