export function checkTurothKurask(currentMonster, userStats, setUserStats) {
	const ids = [426, 427, 428, 429, 430, 431, 432, 410, 411, 7405];

	if (currentMonster) {
		if (ids.includes(currentMonster.id)) {
			setUserStats((userStats) => ({
				...userStats,
				isMonsterTurothKurask: true,
			}));
		} else {
			setUserStats((userStats) => ({
				...userStats,
				isMonsterTurothKurask: false,
			}));
		}
	}
}