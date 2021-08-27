create database sky;
SELECT name, database_id, create_date  
FROM sys.databases ;  
GO  

use model;
use sky;
SELECT * FROM country



SELECT *
 FROM sysobjects WHERE xtype = 'U'

GO  
CREATE PROCEDURE getData  
    @city nvarchar(50)
AS   

    SET NOCOUNT ON;  
    SELECT CONCAT(CO.country,' ', C.city) as City, C.latitud, C.longitud
    FROM country CO INNER JOIN city C ON CO.id = C.country_id
    WHERE C.city = @city

GO  

CREATE PROCEDURE getDataNews  
    @city nvarchar(50)
AS   

    SET NOCOUNT ON;  
    SELECT NL.author, NL.title, NL.descrip, NL.urltoNew, NL.urlToImage, NL.publishedAt, NL.content
    FROM news_lg NL INNER JOIN city C on NL.city_id = C.id
    WHERE C.city = @city

GO  


CREATE PROCEDURE getDataWeather  
    @city nvarchar(50)
AS   

    SET NOCOUNT ON;  
    SELECT WS.weather_st, WS.icon, wf.wind_speed, wf.wind_degree, wf.wind_dir, wf.pressure, wf.precip, wf.humidity, wf.cloud_cover, wf.feelslike, wf.uv_index, wf.visibility, wf.now_timestamp
    FROM weather_forecast_lg WF INNER JOIN weather_status WS ON WF.weather_status_id = ws.id
    INNER JOIN city C on WF.city_id = C.id
    WHERE C.city = @city

GO  

EXEC getData @City = 'London';