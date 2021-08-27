using back.Models;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace back.Services
{
    public class getHistoryService : IHistoryService
    {
        private List<getHistory> _oHistory;

        public List<getHistory> Gets()
        {
            _oHistory = new List<getHistory>();
            using (IDbConnection con = new SqlConnection(Global.connectionString))
            {
                if (con.State == ConnectionState.Closed) con.Open();

                var oHistory = con.Query<getHistory>("getDataWeather", this.SetParameters("New York")).ToList();

                if (oHistory != null && oHistory.Count() > 0) {
                    _oHistory = oHistory;
                }            }
            return _oHistory;
        }
        private DynamicParameters SetParameters(string data)
        {

            DynamicParameters parameters = new DynamicParameters();
            return parameters;
        }
    }
}
