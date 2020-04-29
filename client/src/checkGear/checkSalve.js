export function checkSalve(equippedGear, checkBonus, setCheckBonus) {
	if (equippedGear.neck) {
		// if salve amulet is equipped
		if (equippedGear.neck.id === 4081) {
			setCheckBonus((checkBonus) => ({
				...checkBonus,
				isSalve: true,
				isSalveE: false,
				isSalveI: false,
				isSalveEI: false,
			}));
		// if salve amulet (e) is equipped
		} else if (equippedGear.neck.id === 10588) {
			setCheckBonus((checkBonus) => ({
				...checkBonus,
				isSalve: false,
				isSalveE: true,
				isSalveI: false,
				isSalveEI: false,
			}));
		// if salve amulet (i) is equipped
		} else if (equippedGear.neck.id === 12017) {
			setCheckBonus((checkBonus) => ({
				...checkBonus,
				isSalve: false,
				isSalveE: false,
				isSalveI: true,
				isSalveEI: false,
			}));
		// if salve amulet (ei) is equipped
		} else if (equippedGear.neck.id === 12018) {
			setCheckBonus((checkBonus) => ({
				...checkBonus,
				isSalve: false,
				isSalveE: false,
				isSalveI: false,
				isSalveEI: true,
			}));
		// else no type of salve amulet is equipped
		} else {
			setCheckBonus((checkBonus) => ({
				...checkBonus,
				isSalve: false,
				isSalveE: false,
				isSalveI: false,
				isSalveEI: false,
			}));
		}
	}
}