import Product from "../model/product";
 
const getProductsController =  async (req,res) =>{
  try{
    const products = await Product.find();
    res.json(products);
  }catch(error){
    res.status(500).json({ message: "ERROR fetching product"});
  }
};

const saveProductsController = async (req,res) =>{
  try{
    const newProductFields = req.body;
    const newProduct = new Product(newProductFields);
    await newProduct.save();
    res.status(201).json(newProduct);
  }catch(error){
    res.status(500).json({ message: "ERROR Saving Product"});
  }
};

const updateProductsController  = async (req,res) => {
  try{
    const { id } = req.params;
    const updatedProductFields= req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      id ,
      newProductFields,
      { new: true ,}
    );
    if (!updatedProduct) 
        {return  res.status(500).json({ message: "product not found"});

    }
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: "error updating product"});
  }
};

  const deleteProductsController  = async (req,res) => {
try {
   const { id } = req.params;
  const deleteProduct = await Product.findByIdAndDelete(id);
  if (!deleteProduct) 
        {return  res.status(500).json({ message: "product not found"});
    }
    res.json(deleteProduct);
  } catch (error) {
    res.status(500).json({ message: "error updating product"});
  }
  };
   export {
   getProductsController,
   saveProductsController,
   updateProductsController,
   deleteProductsController,
  };
