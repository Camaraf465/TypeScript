// Implémentation de la classe Voiture
var Voiture = /** @class */ (function () {
    function Voiture(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Voiture.prototype.start = function () {
        console.log("Car engine started");
    };
    return Voiture;
}());
// Création d'une instance de Voiture
var maVoiture = new Voiture("Toyota", "Corolla", 2022);
// Appel de la méthode start
maVoiture.start();
