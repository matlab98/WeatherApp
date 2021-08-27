create database sky;
use sky;
CREATE TABLE CITY
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
        wind_speed VARCHAR
    (255) NOT NULL,
            wind_degree VARCHAR
    (255) NOT NULL,
            wind_dir VARCHAR
    (255) NOT NULL,
            pressure VARCHAR
    (255) NOT NULL,
             precip VARCHAR
    (255) NOT NULL,
            humidity VARCHAR
    (255) NOT NULL,
            cloud_cover VARCHAR
    (255) NOT NULL,
            feelslike number(2) NOT NULL,
            uv_index number(2,2) NOT NULL,
            visibility number(2,2) NOT NULL,
            city_id int
    (255) NOT NULL,
            now_timestamp timestamp,
);
