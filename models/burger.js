const orm = require("../config/orm.js");

const burgers = {
    // Display all burgers in bucket list.
    select: (callBack) => {
        orm.select("burgers", (res) => callBack(res));
    },
    // Add new burger to bucket list.
    insert: (newBurger, callBack) => {
        orm.insert("burgers", "burger_name", "devoured", newBurger, (res) => callBack(res));
    },
    // Move burger from bucket list to devoured lit.
    update: (burgerDevoured, callBack) => {
        orm.update("burgers", "devoured", "id", burgerDevoured, (res) => callBack(res));
    },
    // Remove bruger from devoured list.
    delete: (burgerGone, callBack) => {
        orm.delete("burgers", "id", burgerGone, (res) => callBack(res));
    }
};

module.exports = burgers;