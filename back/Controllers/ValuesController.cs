
using back.Models;
using back.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace back.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private IDataService _oDataService;
        private IHistoryService _oHistoryService;

        public ValuesController(IDataService oDataService, IHistoryService oHistoryService)
        {
            _oDataService = oDataService;
            _oHistoryService = oHistoryService;
        }
        // GET: api/history
        [HttpGet]
        public IEnumerable<getHistory> Get()
        {
            return _oHistoryService.Gets();
        }

        // GET api/weather/5
        [HttpGet("{city}")]
        public getData_Result Get(string city)
        {
            return _oDataService.Get(city);
        }

    }
}
