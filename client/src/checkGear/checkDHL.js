export function checkDHL(equippedGear, checkBonus, setCheckBonus) {
	if (equippedGear.weapon) {
		if (equippedGear.weapon.id === 22978) {
			setCheckBonus((checkBonus) => ({
				...checkBonus,
				isDHL: true,
			}))
		} else {
			setCheckBonus((checkBonus) => ({
				...checkBonus,
				isDHL: false,
			}))
		}
	}
}