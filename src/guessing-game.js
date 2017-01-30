class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.number = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        var min = this.min,
            max = this.max;

        this.number = (min+1 + max) / 2 | 0;

        return this.number;
    }

    lower() {
        this.max = this.number;
    }

    greater() {
        this.min = this.number;
    }
}

module.exports = GuessingGame;