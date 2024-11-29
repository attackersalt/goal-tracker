export class Goal {
    constructor(name, description, progress = 0, step) {
        this.name = name;
        this.description = description;
        this.progress = progress;
        this.step = step;
    }

    update(step = this.step) {
        this.progress += step;
        if (this.progress >= 1)
            return true;
    }

    changeStep(newStep) {
        this.step = newStep;
    }
}