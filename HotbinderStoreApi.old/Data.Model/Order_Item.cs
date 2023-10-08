namespace HotbinderStoreApi.Data.Model
{
    public class OrderItem
    {
        public int OrderItemId { get; set; }   // Unique identifier for the order item
        public int OrderId { get; set; }        // Reference to the order to which the item belongs
        public int ProductId { get; set; }      // Reference to the product being ordered
        public int Quantity { get; set; }       // Quantity of the product ordered
        public decimal ItemPrice { get; set; } // Price of the product at the time of the order

        // You can add additional properties and methods as needed
    }
}
