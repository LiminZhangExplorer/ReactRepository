namespace HotbinderStoreApi.Data.Model
{
    public class Order
    {
        public int OrderId { get; set; }         // Unique identifier for the order
        public int CustomerId { get; set; }      // Reference to the customer who placed the order
        public DateTime OrderDate { get; set; }  // Date and time when the order was placed
        public decimal TotalAmount { get; set; } // Total amount for the order

        // You can add additional properties and methods as needed
    }
}
