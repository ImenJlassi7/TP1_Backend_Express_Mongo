const mongoose = require("mongoose");

const ProduitSchema = new mongoose.Schema({
    nom: {
        type: String,
    },
    prix: {
        type: Number,
    },
    description: {
        type: String,
    },
    Images : [String]
 
});

module.exports = mongoose.model("Produit", ProduitSchema);
