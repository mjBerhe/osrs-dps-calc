export function calcEffectiveStrLvl(userStats, checkBonus) {
	let effectiveLvl = 0;

	// if using range
	if (userStats.isRange) {
		const rangePrayerValues = [1, 1.05, 1.1, 1.15, 1.23]

		// Has Range lvl been inputted? If so, set effective level to it
		userStats.rangeLvl ? effectiveLvl += userStats.rangeLvl : effectiveLvl += null;

		// Has a Range potion been selected? If so, adjust effective level depending on potion
		if (userStats.rngPotion) {
			if (userStats.rngPotion === 1 || userStats.rngPotion === 2) {
				effectiveLvl += Math.floor(effectiveLvl*0.1 + 4);
			} else if (userStats.rngPotion === 3) {
				effectiveLvl += Math.floor(effectiveLvl*0.15 + 5);
			} else if (userStats.rngPotion === 4) {
				effectiveLvl += Math.floor(effectiveLvl*0.1 + 4);
			} else if (userStats.rngPotion === 5) {
				effectiveLvl += Math.floor(effectiveLvl*0.13 + 5);
			} else if (userStats.rngPotion === 6) {
				effectiveLvl += Math.floor(effectiveLvl*0.16 + 6);
			}
		}
		// Has a Range prayer been selected? If so, adjust effective level depending on prayer
		userStats.rngPrayer ? effectiveLvl = Math.floor(effectiveLvl*rangePrayerValues[userStats.rngPrayer]) : effectiveLvl += null;

		// Has an attack style been selected? If so adjust effective level depending on attack style
		if (userStats.attStyle) {
			if (userStats.attStyle === 'accurate' || userStats.attStyle === 'short fuse') {
				effectiveLvl += 3;
			}
		}

		effectiveLvl += 8;

		// checking if void range or elite void range is equipped
		if (checkBonus.isVoidRange) {
			effectiveLvl = (effectiveLvl*1.1);
		} else if (checkBonus.isVoidRangeElite) {
			effectiveLvl = (effectiveLvl*1.125)
		}

		return Math.floor(effectiveLvl);
	
	// else if using magic
	} else if (userStats.isMagic) {

		// Has Magic lvl been inputted? If so, set effecive level to it
		userStats.magicLvl ? effectiveLvl += userStats.magicLvl : effectiveLvl += null;

		// Has a magic potion been selected? If so, adjust effective level accordingly
		if (userStats.magPotion) {
			if (userStats.magPotion === 1 || userStats.magPotion === 2) {
				effectiveLvl += 4;
			} else if (userStats.magPotion === 3) {
				effectiveLvl += Math.floor(effectiveLvl*0.1 + 1);
			} else if (userStats.magPotion === 4) {
				effectiveLvl += Math.floor(effectiveLvl*0.15 + 5);
			} else if (userStats.magPotion === 5) {
				effectiveLvl += Math.floor(effectiveLvl*0.1 + 4);
			} else if (userStats.magPotion === 6) {
				effectiveLvl += Math.floor(effectiveLvl*0.13 + 5);
			} else if (userStats.magPotion === 7) {
				effectiveLvl += Math.floor(effectiveLvl*0.16 + 6);
			}
		}

		effectiveLvl += 8;

		return Math.floor(effectiveLvl);

	// else we assume its melee
	} else {
		const strengthPrayerValues = [1, 1.05, 1.1, 1.15, 1.18, 1.23]

		// Has Strength lvl been inputted? If so, set effective level to it
		userStats.strengthLvl ? effectiveLvl += userStats.strengthLvl : effectiveLvl += null;

		// Has a Strength potion been selected? If so, adjust effective level depending on potion
		if (userStats.strPotion) {
			if (userStats.strPotion === 1) {
				effectiveLvl += Math.floor(effectiveLvl*0.1 + 3);
			} else if (userStats.strPotion === 2 || userStats.strPotion === 3 || userStats.strPotion === 4) {
				effectiveLvl += Math.floor(effectiveLvl*0.15 + 5);
			} else if (userStats.strPotion === 5) {
				effectiveLvl += Math.floor(effectiveLvl*0.1 + 4);
			} else if (userStats.strPotion === 6) {
				effectiveLvl += Math.floor(effectiveLvl*0.13 + 5);
			} else if (userStats.strPotion === 7) {
				effectiveLvl += Math.floor(effectiveLvl*0.16 + 6);
			}
		}

		// Has a Strength prayer been selected? If so, adjust effective level depending on prayer
		userStats.strPrayer ? effectiveLvl = Math.floor(effectiveLvl*strengthPrayerValues[userStats.strPrayer]) : effectiveLvl += null;

		// Has an attack style been selected? If so, adjust effective level depending on attack style			
		if (userStats.attStyle) {
			if (userStats.attStyle === 'aggressive') {
				effectiveLvl += 3;
			} else if (userStats.attStyle === 'controlled') {
				effectiveLvl += 1;
			}
		}

		effectiveLvl += 8;

		// checking if void melee is equipped
		if (checkBonus.isVoidMelee) {
			effectiveLvl = (effectiveLvl*1.1);
		}

		return Math.floor(effectiveLvl);
	}
}