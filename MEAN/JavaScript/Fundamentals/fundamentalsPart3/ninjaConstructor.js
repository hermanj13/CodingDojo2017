function ninjaConstructor(name, cohort) {
    return ninja = {
        name: name,
        cohort: cohort,
        belt: "Yellow",
        levelUp: function() {
            if (this.belt === "Double Black") {
                alert(this.name + " has maxed out their skills already!")
            } else if (this.belt === "Black") {
                this.belt = "Double Black";
                alert(this.name + " has increased their belt level! They are now a " + this.belt);
            } else if (this.belt === "Red") {
                this.belt = "Black";
                alert(this.name + " has increased their belt level! They are now a " + this.belt);
            } else {
                this.belt = "Red";
                alert(this.name + " has increased their belt level! They are now a " + this.belt);
            }
            return this
        }
    }
}
