var fruitsBasket = [];
var total = 0;

(function init(){
    buy(1, 2);
    buy(5, 7);
    buy(5, 7);
}());

/**
* @description Ajouter au panier un produit avec une quantité
*
* @param {int idFruit Identifiant du fruit}
* @param {int amount Quantité à ajouter}
* @returns {void}
*/
function buy(idFruit, amount) {
    // on cherche le produit qui est en correspondance
    fruit = findElement(fruits, "id", idFruit);
    // on cherche si il est déjà présent dans le panier
    idxFruitCard = findIndex(fruitsBasket, "fruit", idFruit, "id");
    
    if (idxFruitCard !== -1)
    {
        // on concat les quantités
        fruitsBasket[idxFruitCard].amount += amount;
    }
    else
    {
        // on ajoute
        fruitsBasket.push({
            fruit: fruit,
            amount: amount,
        });
    }

    reload_total();
}

/**
* @description Calcul du montant total
* 
* @returns {void}
*/
function reload_total(){
    tmpTotal = 0;
    fruitsBasket.forEach(function (fruitBasket) {
        // On cumule
        tmpTotal += fruitBasket.fruit.price * fruitBasket.amount; 
    });

    total = tmpTotal;
}

/**
* @description Cherche et retourne l'élément trouvé
*
* @param {Array arr Tableau dans lequel on cherche}
* @param {String key La clé dans laquelle on va chercher}
* @param {String value La valeur que l'on veut trouver}
* @returns {boolean|string|int|Array|Object}
*/
function findElement(arr, key, value) {
    return arr.find(el => el[key] === value);
}

/**
* @description Cherche et retourne l'index de l'élément trouvé
*
* @param {Array arr Tableau dans lequel on cherche}
* @param {String key La clé dans laquelle on va chercher}
* @param {String value La valeur que l'on veut trouver}
* @returns {int}
*/
function findIndex(arr, key, value, subkey) {
    if (subkey.length > 0)
    {
        return arr.findIndex(el => el[key][subkey] === value);
    }
    
    return arr.findIndex(el => el[key] === value);
}

var app = new Vue({
    el: '#ifruit',
    data: {
        fruits: fruits,
        fruitsBasket: fruitsBasket,
    },
});
