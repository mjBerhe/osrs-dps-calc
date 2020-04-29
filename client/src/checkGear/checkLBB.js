export function checkLBB(equippedGear, checkBonus, setCheckBonus) {
	if (equippedGear.weapon) {
		if (equippedGear.weapon.id === 20727) {
			setCheckBonus((checkBonus) => ({
				...checkBonus,
				isLBB: true,
			}));
		} else {
			setCheckBonus((checkBonus) => ({
				...checkBonus,
				isLBB: false,
			}));
		}
	}
}