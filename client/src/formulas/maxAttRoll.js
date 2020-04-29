export function calcMaxAttRoll(userStats, effectiveAttLvl, equippedGear, checkBonus, currentMonster) {
	
	let maxAttRoll = Math.floor(effectiveAttLvl*(userStats.equipmentAttBonus[userStats.attType] + 64));

	// if range
	if (userStats.isRange) {
		// if on slayer task and slayer helm is equipped
		if (userStats.isSlayerTask && checkBonus.isSlayerHelmImbued) {
			// AND if monster is undead and have salve(ei) equipped
			if (userStats.isMonsterUndead && checkBonus.isSalveEI) {
				maxAttRoll *= 1.2;
			// else just get the slayer helm bonus (same if salve(i) were to be equipped)
			} else {
				maxAttRoll *= 1.15;
			}
		// if not on slayer task
		// if monster is undead and salve (ei) is equipped
		} else if (userStats.isMonsterUndead && checkBonus.isSalveEI) {
			maxAttRoll *= 1.2;
		// if monster is undead and salve (i) is equipped
		} else if (userStats.isMonsterUndead && checkBonus.isSalveI) {
			maxAttRoll *= 1.15;
		}
		// if monster is dragon and dhcb is equipped
		if (userStats.isMonsterDragon && checkBonus.isDHCB) {
			maxAttRoll *= 1.3;
		}
		// if tbow equipped
		// right now, accuracy bonus capped at 140%
		if (checkBonus.isTbow && currentMonster) {
			let magic = currentMonster.stats.magLvl;
			const tBowMultiplier = (140 + Math.trunc((magic*3-10)/100) - Math.trunc((Math.pow(((magic*3/10)-100), 2))/100))/100;
			if (tBowMultiplier >= 1.4) {
				maxAttRoll = maxAttRoll*1.4;
			} else {
				maxAttRoll = maxAttRoll*tBowMultiplier;
			}
		}
		return Math.floor(maxAttRoll);

	// else if magic
	} else if (userStats.isMagic) {
		// if on slayer task and slayer helm is equipped
		if (userStats.isSlayerTask && checkBonus.isSlayerHelmImbued) {
			// AND if monster is undead and have salve(ei) equipped
			if (userStats.isMonsterUndead && checkBonus.isSalveEI) {
				maxAttRoll *= 1.2;
			// else just get the slayer helm bonus (same if salve(i) were to be equipped)
			} else {
				maxAttRoll *= 1.15;
			}
		// if not on slayer task
		// if monster is undead and salve (ei) is equipped
		} else if (userStats.isMonsterUndead && checkBonus.isSalveEI) {
			maxAttRoll *= 1.2;
		// if monster is undead and salve (i) is equipped
		} else if (userStats.isMonsterUndead && checkBonus.isSalveI) {
			maxAttRoll *= 1.15;
		}

		if (checkBonus.isSmokeStaff && userStats.chosenSpell) {
			if (userStats.chosenSpell.spellbook === 'standard') {
				maxAttRoll *= 1.1;
			}
		}

		return Math.floor(maxAttRoll);

	// if melee
	} else {
		// if on slayer task and slayer helm is equipped
		if (userStats.isSlayerTask && checkBonus.isSlayerHelm) {
			// if monster is undead
			if (checkBonus.isSalveE || checkBonus.isSalveEI) {
				// if salve (e) or salve (ei) is equipped
				if (userStats.isMonsterUndead) {
					maxAttRoll *= 1.2;
				} 
			// else just get the slayer helm bonus (as it is greater than normal salve bonus)
			} else {
				maxAttRoll *= 7/6;
			}
		// if not on slayer task and monster is undead
		} else if (userStats.isMonsterUndead) {
			// if salve (e) or salve (ei) is equipped
			if (checkBonus.isSalveE || checkBonus.isSalveEI) {
				maxAttRoll *= 1.2;
			// if salve or salve (i) is equipped
			} else if (checkBonus.isSalve || checkBonus.isSalveI) {
				maxAttRoll *= 1.15;
			}
		}
		if (userStats.isMonsterDemon && checkBonus.isArclight) {
			maxAttRoll *= 1.7;
		}
		if (userStats.isMonsterDragon && checkBonus.isDHL) {
			maxAttRoll *= 1.2;
		}
		if (checkBonus.isObbySet && checkBonus.isObbyWep) {
			maxAttRoll *=1.1;
		}
		return Math.floor(maxAttRoll);
	}
}