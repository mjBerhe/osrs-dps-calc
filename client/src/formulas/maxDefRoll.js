export function calcMaxDefRoll(userStats, currentMonster) {
	let maxDefRoll;
	// if using magic
	if (userStats.isMagic) {
		maxDefRoll = currentMonster ? Math.floor((currentMonster.stats.magLvl + 9)*(currentMonster.stats.defences.magic + 64)) : null;
	// else if using melee/range
	} else {
		maxDefRoll = currentMonster ? Math.floor((currentMonster.stats.defLvl + 9)*(currentMonster.stats.defences[userStats.attType] + 64)) : null;
	}
	return maxDefRoll;
}