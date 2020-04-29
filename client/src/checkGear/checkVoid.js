export function checkVoid(equippedGear, checkBonus, setCheckBonus) {
	// first check if all appropriate slots are equipped by something
	if (equippedGear.helm && equippedGear.body && equippedGear.leg && equippedGear.glove) {
		// checking if body equipped is either void body or elite void body
		if (equippedGear.body.id === 8839 || equippedGear.body.id === 13072) {
			// checking if legs equipped is either void legs or elite void legs
			if (equippedGear.leg.id === 8840 || equippedGear.leg.id === 13073) {
				// checking if melee void helm and void gloves are equipped
				if (equippedGear.helm.id === 11665 && equippedGear.glove.id === 8842) {
					setCheckBonus((checkBonus) => ({
						...checkBonus,
						isVoidMelee: true,
						isVoidRange: false,
						isVoidRangeElite: false,
						isVoidMage: false,
						isVoidMageElite: false,
					}));
				// checking if range void helm and void gloves are equipped
				} else if (equippedGear.helm.id === 11664 && equippedGear.glove.id === 8842) {
					// checking if both elite void pieces are equipped
					if (equippedGear.body.id === 13072 && equippedGear.leg.id === 13073) {
						setCheckBonus((checkBonus) => ({
							...checkBonus,
							isVoidRangeElite: true,
							isVoidRange: false,
							isVoidMelee: false,
							isVoidMage: false,
							isVoidMageElite: false,
						}));
					} else {
						setCheckBonus((checkBonus) => ({
							...checkBonus,
							isVoidRange: true,
							isVoidRangeElite: false,
							isVoidMelee: false,
							isVoidMage: false,
							isVoidMageElite: false,
						}))
					}
				// checking if mage void helm and void gloves are equipped
				} else if (equippedGear.helm.id === 11663 && equippedGear.glove.id === 8842) {
					// checking if both elite void pieces are equipped
					if (equippedGear.body.id === 13072 && equippedGear.leg.id === 13073) {
						setCheckBonus(checkBonus => ({
							...checkBonus,
							isVoidMageElite: true,
							isVoidMage: false,
							isVoidMelee: false,
							isVoidRange: false,
							isVoidRangeElite: false,
						}))
					} else {
						setCheckBonus(checkBonus => ({
							...checkBonus,
							isVoidMageElite: false,
							isVoidMage: true,
							isVoidMelee: false,
							isVoidRange: false,
							isVoidRangeElite: false,
						}))
					}
				} else {
					setCheckBonus((checkBonus) => ({
						...checkBonus,
						isVoidMelee: false,
						isVoidRange: false,
						isVoidRangeElite: false,
						isVoidMage: false,
						isVoidMageElite: false,
					}))
				}
			} else {
				setCheckBonus((checkBonus) => ({
					...checkBonus,
					isVoidMelee: false,
					isVoidRange: false,
					isVoidRangeElite: false,
					isVoidMage: false,
					isVoidMageElite: false,
				}))
			}
		} else {
			setCheckBonus((checkBonus) => ({
				...checkBonus,
				isVoidMelee: false,
				isVoidRange: false,
				isVoidRangeElite: false,
				isVoidMage: false,
				sisVoidMageElite: false,
			}))
		}
	}
}