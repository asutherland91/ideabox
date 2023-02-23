class Ideas {
    constructor(title, body) {
        this.id = Date.now();
        this.title = title;
        this.body = body;
        this.star = false;
    }
    updateIdea() {

    }
}

module.exports = Ideas;