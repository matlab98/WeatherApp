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
    public class getDataService : IDataService
    {
        public getData_Result Get(string ciudad)
        {
            getData_Result _oData = new getData_Result();
            using (IDbConnection con = new SqlConnection(Global.connectionString))
            {
                if (con.State == ConnectionState.Closed) con.Open();

                var oHistory = con.Query<getData_Result>("getDataWeather", this.SetParameters("New York")).ToList();

                if (oHistory != null && oHistory.Count() > 0)
                {
                    _oData = oHistory.SingleOrDefault();
                }
            }
            return _oData;
        }

        private DynamicParameters SetParameters(string data) {

            DynamicParameters parameters = new DynamicParameters();
            return parameters;
        }
    }
}
