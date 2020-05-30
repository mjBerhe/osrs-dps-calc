export function calcMaxHit(userStats, effectiveStrLvl, equippedGear, checkBonus, currentMonster) {

	let maxHit = 0;

	// if using range
	if (userStats.isRange) {
		maxHit = Math.floor(((effectiveStrLvl*(userStats.equipmentRangeStrBonus + 64)) / 640) + 0.5);
		// if on slayer task and slayer helm imbued is equipped
		if (userStats.isSlayerTask && checkBonus.isSlayerHelmImbued) {
			// AND if monster is undead and have salve(ei) equipped
			if (userStats.isMonsterUndead && checkBonus.isSalveEI) {
				maxHit = Math.floor(maxHit*1.2);
			// else just get the slayer helm bonus (same if salve(i) were to be equipped)
			} else {
				maxHit = Math.floor(maxHit*1.15);
			}
		// if not on slayer task
		// if monster is undead and salve (ei) is equipped
		} else if (userStats.isMonsterUndead && checkBonus.isSalveEI) {
			maxHit = Math.floor(maxHit*1.2);
		// if monster is undead and salve(i) is equipped
		} else if (userStats.isMonsterUndead && checkBonus.isSalveI) {
			maxHit = Math.floor(maxHit*1.15);
		}

		if (userStats.isMonsterDragon && checkBonus.isDHCB) {
			maxHit = Math.floor(maxHit*1.3);
		}
		// right now, magic level capped at 250
		if (checkBonus.isTbow && currentMonster) {
			let magic = currentMonster.stats.magLvl;
			if (currentMonster.stats.magLvl >= 250) {
				magic = 250;
			} else {
				magic = currentMonster.stats.magLvl;
			}
			const tBowMultiplier = (250 + Math.trunc((magic*3-14)/100) - Math.trunc((Math.pow(((magic*3/10)-140), 2))/100))/100;
			maxHit = maxHit*tBowMultiplier;
		}
		return Math.floor(maxHit);

	// else if using magic
	} else if (userStats.isMagic) {
		// if a spell was chosen
		if (userStats.chosenSpell) {
			maxHit = userStats.chosenSpell.maxHit;
			if (userStats.chosenSpell.grade === 'bolt' && equippedGear.glove) {
				if (equippedGear.glove.id === 777) {
					maxHit += 3;
				}
			}
		// else a powered staff must be equipped
		} else {
			// getting magic lvl (including potion boost)
			const visibleMagicLvl = effectiveStrLvl - 8;
			// trident of the seas
			if (equippedGear.weapon.id === 11907 || equippedGear.weapon.id === 11905 || equippedGear.weapon.id === 22288) {
				maxHit = 20 + Math.floor((visibleMagicLvl - 75)/3);
			// trident of the swamp
			} else if (equippedGear.weapon.id === 12899 || equippedGear.weapon.id === 22292) {
				maxHit = 23 + Math.floor((visibleMagicLvl - 75)/3);
			// sanguinesti staff
			} else if (equippedGear.weapon.id === 22323 || equippedGear.weapon.id === 22381) {
				maxHit = 24 + Math.floor((visibleMagicLvl - 75)/3);
			}
		}

		// applying all Magic Damage multipliers
		let multiplier = 100;
		if (userStats.equipmentMagicDmgBonus) {
			multiplier += userStats.equipmentMagicDmgBonus;
		}
		if (userStats.isMonsterUndead && checkBonus.isSalveEI) {
			multiplier += 20;
		} else if (userStats.isMonsterUndead && checkBonus.isSalveI) {
			multiplier += 15;
		}
		if (checkBonus.isSmokeStaff && userStats.chosenSpell) {
			if (userStats.chosenSpell.spellbook === 'standard') {
				multiplier += 10;
			}
		}
		if (checkBonus.isVoidMageElite) {
			multiplier += 2.5;
		}

		maxHit = Math.floor((maxHit*multiplier)/100);

		if (userStats.isSlayerTask && checkBonus.isSlayerHelmImbued && !checkBonus.isSalveEI && !checkBonus.isSalveI) {
			maxHit = Math.floor(maxHit*1.15);
		}
		if (userStats.chosenSpell && checkBonus.isTomeOfFire) {
			if (userStats.chosenSpell.element === 'fire') {
				maxHit = Math.floor(maxHit*1.5);
			}
		}

		return Math.floor(maxHit);
 
	// else we assume its melee
	} else {
		maxHit = Math.floor(((effectiveStrLvl*(userStats.equipmentMeleeStrBonus + 64)) / 640) + 0.5);
		// if on slayer task and slayer helm is equipped
		if (userStats.isSlayerTask && checkBonus.isSlayerHelm) {
			// if monster is undead
			if (checkBonus.isSalveE || checkBonus.isSalveEI) {
				// if salve (e) or salve (ei) is equipped
				if (userStats.isMonsterUndead) {
					maxHit = Math.floor(maxHit*1.2);
				} 
			// else just get the slayer helm bonus (as it is greater than normal salve bonus)
			} else {
				maxHit = Math.floor(maxHit*(7/6));
			}
		// if not on slayer task and monster is undead
		} else if (userStats.isMonsterUndead) {
			// if salve (e) or salve (ei) is equipped
			if (checkBonus.isSalveE || checkBonus.isSalveEI) {
				maxHit = Math.floor(maxHit*1.2);
			// if salve or salve (i) is equipped
			} else if (checkBonus.isSalve || checkBonus.isSalveI) {
				maxHit = Math.floor(maxHit*1.15);
			}
		}
		
		if (userStats.isMonsterDemon && checkBonus.isArclight) {
			maxHit = Math.floor(maxHit*1.7);
		}
		if (userStats.isMonsterDragon && checkBonus.isDHL) {
			maxHit = Math.floor(maxHit*1.2);
		}
		if (userStats.isMonsterTurothKurask && checkBonus.isLBB) {
			maxHit = Math.floor(maxHit*1.175);
		}
		if (checkBonus.isObbySet && checkBonus.isObbyWep) {
			maxHit = Math.floor(maxHit*1.1);
		}
		if (checkBonus.isObbyWep && checkBonus.isObbyNeck) {
			maxHit = Math.floor(maxHit*1.2);
		}
		if (checkBonus.isScythe) {
			const halfHit = Math.floor(maxHit/2);
			const quarterHit = Math.floor(halfHit/2);
			maxHit = Math.floor(maxHit) + halfHit + quarterHit;
		}
		return Math.floor(maxHit);
	}
}