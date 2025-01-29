"use server"


async function deleteAllProducts() {
  try {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);

    console.log(`Found ${products.length} products to delete.`);

    const deletePromises = products.map((product) =>
      client.delete(product._id)
    );

    await Promise.all(deletePromises);

    console.log('All products have been deleted successfully.');
  } catch (error) {
    console.error('Error deleting products:', error);
  }
}

deleteAllProducts();
