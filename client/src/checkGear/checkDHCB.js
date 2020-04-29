export function checkDHCB(equippedGear, checkBonus, setCheckBonus) {
	if (equippedGear.weapon) {
		if (equippedGear.weapon.id === 21012) {
			setCheckBonus((checkBonus) => ({
				...checkBonus,
				isDHCB: true,
			}))
		} else {
			setCheckBonus((checkBonus) => ({
				...checkBonus,
				isDHCB: false,
			}))
		}
	}
}