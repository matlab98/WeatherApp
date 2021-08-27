create database sky;

use sky;
CREATE TABLE COUNTRY
(
        id int NOT NULL IDENTITY (1,1) PRIMARY KEY,
        country VARCHAR
    (255) NOT NULL,
);

CREATE TABLE CITY
(
    id int NOT NULL IDENTITY (1,1) PRIMARY KEY,
  city VARCHAR
    (255) NOT NULL,
latitud VARCHAR
    (255) NOT NULL,
longitud VARCHAR
    (255) NOT NULL,
    country_id int NOT NULL REFERENCES country(id) ON DELETE CASCADE
);

CREATE TABLE weather_status
(
        id int NOT NULL IDENTITY (1,1) PRIMARY KEY,
        weather_st VARCHAR
    (255) NOT NULL,
            icon VARCHAR
    (255) NOT NULL,
);

CREATE TABLE weather_forecast_lg
(
        id int NOT NULL IDENTITY (1,1) PRIMARY KEY,
        wind_speed decimal NOT NULL,
            wind_degree decimal NOT NULL,
            wind_dir char(2) NOT NULL,
            pressure decimal NOT NULL,
             precip decimal NOT NULL,
            humidity VARCHAR
    (255) NOT NULL,
            cloud_cover VARCHAR
    (255) NOT NULL,
            feelslike varchar(255) NOT NULL,
            uv_index decimal NOT NULL,
            visibility decimal NOT NULL,
            city_id INT NOT NULL REFERENCES city(id) ON DELETE CASCADE,
            now_timestamp timestamp,
            weather_status_id INT NOT NULL REFERENCES weather_status(id) ON DELETE CASCADE
);

CREATE TABLE news_lg
(
        id int NOT NULL IDENTITY (1,1) PRIMARY KEY,
        author VARCHAR (255) NOT NULL,
    city_id INT NOT NULL REFERENCES city(id) ON DELETE CASCADE,
    title VARCHAR
    (255) NOT NULL,
    descrip VARCHAR
    (255) NOT NULL,
    urltoNew VARCHAR
    (255) NOT NULL,
    urlToImage VARCHAR
    (255) NOT NULL,
    publishedAt VARCHAR
    (255) NOT NULL,
    content VARCHAR
    (255) NOT NULL,
    
);

SELECT * FROM [INFORMATION_SCHEMA].[TABLES]

SELECT name, [text]
 FROM sysobjects o
 INNER JOIN syscomments c
 ON 
 o.id=c.id
WHERE xtype = 'P'