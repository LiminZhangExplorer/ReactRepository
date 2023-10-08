namespace HotbinderStoreApi.Data.Model
{
    public class Customer
    {
        public int CustomerId { get; set; }   // Unique identifier for the customer
        public string FirstName { get; set; } // First name of the customer
        public string LastName { get; set; }  // Last name of the customer
        public string Email { get; set; }     // Customer's email address
        public string Phone { get; set; }     // Customer's phone number
        public string Address { get; set; }   // Customer's shipping address

        // You can add additional properties and methods as needed
    }
}
