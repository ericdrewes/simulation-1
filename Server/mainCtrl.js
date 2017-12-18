module.exports = {
  createProduct: (req, res) => {
      const db = req.app.get('db');
      const {name, price, image_url} = req.body

      db
        .createProduct_product([name, price, image_url])
        .then(() => res.status(200).json())
        .catch(console.log)
  },

  getProducts: (req, res) => {
    const db = req.app.get("db");

    db.get_products().then(products => {
      return res.status(200).json(products);
    });
  },

  getProductById: (req,res) => {
      const db = req.app.get('db');

      const {params} = req;

        db
        .read_product([params.id])
        .then(product => res.status(200).json(product))
        .catch(console.log)
  },

  deleteProduct: (req,res) => {
      const db =req.app.get('db');

      const { id } = req.params;

      db.deleteProduct([id]).then(() => res.status(200).json())
  },

  updateProduct: (req, res) => {
      const db = req.app.get('db');
      const {params, query} = req;

      db   
        .update_product([params.id, query.desc])
        .then(() => res.status(200).json())
        .catch(console)
  }
};
