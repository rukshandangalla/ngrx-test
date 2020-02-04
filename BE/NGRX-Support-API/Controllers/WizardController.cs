using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using NGRX_Support_API.models;

namespace NGRX_Support_API.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class WizardController : ControllerBase
    {
        #region DUMMY DATA
        // Dummy Customer Data
        readonly List<Customer> customerList = new List<Customer>()
        {
            new Customer { FirstName = "Rukshan", LastName = "Dangalla", Age = 30, NIC = "1V", Address = "Maharagama"},
            new Customer { FirstName = "Maheesha", LastName = "Prasadi", Age = 27, NIC = "2V", Address = "Boralasgamuwa" },
            new Customer { FirstName = "Chathuranga", LastName = "Basnayake", Age = 23, NIC = "3V", Address = "Homagama" },
            new Customer { FirstName = "Pubudu", LastName = "Chathuranga", Age = 23, NIC = "4V", Address = "Nugegoda" }
        };

        // Dummy Product Data
        readonly List<Product> products = new List<Product>()
        {
            new Product { Name = "Normal", Code = "01"},
            new Product { Name = "Step-up", Code = "01"},
            new Product { Name = "Schedule Stepup", Code = "01"}
        };

        // Dummy Article Data
        readonly List<ArticleMainType> articleMainTypes = new List<ArticleMainType>()
        {
            new ArticleMainType { Id = 1, Code = "01", Description = "Anklet", IsActive = true},
            new ArticleMainType { Id = 2, Code = "02", Description = "Chain", IsActive = true},
            new ArticleMainType { Id = 3, Code = "03", Description = "Ring", IsActive = true},
            new ArticleMainType { Id = 4, Code = "04", Description = "Bangle", IsActive = true},
            new ArticleMainType { Id = 5, Code = "05", Description = "Bracelet", IsActive = true},
            new ArticleMainType { Id = 6, Code = "06", Description = "Coin", IsActive = true}
        };

        // Dummy Search Type Data
        readonly List<SearchType> searchTypes = new List<SearchType>()
        {
            new SearchType { Id = 1, Label = "NIC", Value = 1},
            new SearchType { Id = 2, Label = "BR", Value = 2},
            new SearchType { Id = 3, Label = "Facility Code", Value = 3}
        };
        #endregion

        [HttpGet(Name = "GetMasterData")]
        public IActionResult GetMasterData()
        {
            var masterData = new MasterData
            {
                SearchTypes = searchTypes,
                ArticleMainTypes = articleMainTypes,
                Products = products
            };

            return Ok(masterData);
        }

        [HttpGet("{nic}", Name = "GetCustomerByNIC")]
        public IActionResult GetCustomerByNIC(string nic)
        {
            var selectedCustomer = customerList.Find(c => c.NIC == nic);
            return Ok(selectedCustomer);
        }
    }
}