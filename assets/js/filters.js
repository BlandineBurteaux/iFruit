Vue.filter("formatPrice", function (value) {
    return numeral(value).format("0.00");
});