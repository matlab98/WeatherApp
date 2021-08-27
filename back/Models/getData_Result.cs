using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back.Models
{
    public class getData_Result
    {
        public string Column1 { get; set; }
        public string latitud { get; set; }
        public string longitud { get; set; }
        public string author { get; set; }
        public string title { get; set; }
        public string descrip { get; set; }
        public string urltoNew { get; set; }
        public string urlToImage { get; set; }
        public string publishedAt { get; set; }
        public string content { get; set; }

        public string weather_st { get; set; }
        public string icon { get; set; }
        public decimal wind_speed { get; set; }
        public decimal wind_degree { get; set; }
        public string wind_dir { get; set; }
        public decimal pressure { get; set; }
        public decimal precip { get; set; }
        public string humidity { get; set; }
        public string cloud_cover { get; set; }
        public string feelslike { get; set; }
        public decimal uv_index { get; set; }
        public decimal visibility { get; set; }
        public byte[] now_timestamp { get; set; }
    }
}
