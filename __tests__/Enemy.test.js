const Enemy = require("../lib/Enemy.js");
const Potion = require("../lib/Potion.js");

jest.mock("../lib/Potion");

test("creates an enemy object", () => {
    const enemy = new Enemy("goblin", "sword");

    expect(enemy.name).toBe("goblin");
    expect(enemy.weapon).toBe("sword");
    expect(enemy.health).toEqual(epect.any(Number));
    expect(enemy.strength).toEqual(epect.any(Number));
    expect(enemy.agility).toEqual(epect.any(Number));
    expect(enemy.potion).toEqual(epect.any(Object))
});