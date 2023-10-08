namespace HotbinderStoreApi.Data.Model
{
    public class Product
    {
        public int ProductId { get; set; }     // Unique identifier for the product
        public string Name { get; set; }       // Name of the product
        public string Description { get; set; } // Description of the product
        public decimal Price { get; set; }     // Price of the product
        public int CategoryId { get; set; }    // Reference to the category to which the product belongs

        // You can add additional properties and methods as needed
    }
}
