module.exports = (app) => {
    const App = require("../controllers/prodController.js");
  
    app.post("/createP", App.create);
  
    app.get("/get-allP", App.findAll);
  
    app.get("/produit/:produitId", App.findOne);
  
    app.put("/produit/:produitId", App.update);
  
    app.delete("/produit/:produitId", App.delete);
  };