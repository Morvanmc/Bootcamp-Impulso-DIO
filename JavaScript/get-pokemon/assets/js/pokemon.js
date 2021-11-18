class Pokemon {
    constructor({name, abilities, height, baseExperience, sprites}) {
        this._name = name
        this._abilities = abilities
        this._height = height
        this._baseExperience = baseExperience
        this._sprites = sprites
    }

    get name() {
        return this._capitalize(this._name)
    }

    get abilities() {
        return this._abilitiesFormat(this._abilities)
    }

    get height() {
        return `${this._height * 10 >= 100 ? `${this._height * 10 / 100}m` : `${this._height * 10}cm`}`
    }

    get baseExperience() {
        return this._baseExperience
    }

    get image() {
        return this._sprites.front_default
    }

    _capitalize(value) {
        return `${value.charAt(0).toUpperCase()}${value.slice(1)}`
    }

    _abilitiesFormat(abilities) {
        return abilities.map(item => ` ${this._capitalize(item.ability.name)}`)
    }
}