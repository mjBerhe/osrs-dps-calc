export function checkObbySet(equippedGear, checkBonus, setCheckBonus) {
	if (equippedGear.helm && equippedGear.body && equippedGear.leg) {
		if (equippedGear.helm.id === 21298 && equippedGear.body.id === 21301 && equippedGear.leg.id === 21304) {
			setCheckBonus((checkBonus) => ({
				...checkBonus,
				isObbySet: true,
			}));
		} else {
			setCheckBonus((checkBonus) => ({
				...checkBonus,
				isObbySet: false,
			}));
		}
	}
}