using System.Collections.Generic;

namespace NGRX_Support_API.models
{
    public class MasterData
    {
        public IEnumerable<SearchType> SearchTypes { get; set; }

        public IEnumerable<ArticleMainType> ArticleMainTypes { get; set; }

        public IEnumerable<Product> Products { get; set; }
    }
}
