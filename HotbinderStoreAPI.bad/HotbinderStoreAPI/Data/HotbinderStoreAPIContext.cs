using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using HotbinderStoreApi.Data.Model;

namespace HotbinderStoreAPI.Data
{
    public class HotbinderStoreAPIContext : DbContext
    {
        public HotbinderStoreAPIContext()
        {
        }

        public DbSet<HotbinderStoreApi.Data.Model.Product> Product { get; set; } = default!;
    }
}
