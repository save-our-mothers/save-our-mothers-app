-- Query for getting total number of unique patients
SELECT 
	COUNT(DISTINCT `id`) AS "Total Patients",
  COUNT(CASE WHEN `sex` = 'Male' THEN 1 END) AS "Male",
  COUNT(CASE WHEN `sex` = 'Female' THEN 1 END) AS "Female",
  COUNT(CASE WHEN `sex` = 'UNK' THEN 1 END) AS "Unknown"
FROM `patient_data`;

-- Query for getting count of patients from each unique neighborhood and city combination
-- NOTE: Does not account for weekly, monthly, yearly queries
SELECT `street` AS "Neighborhood", `city`, COUNT(*) AS "Patients"
FROM `patient_data`
GROUP BY 1,2
ORDER BY COUNT(*) DESC;

-- Query for getting ages
SELECT
  COUNT(CASE WHEN DATEDIFF(NOW(), `DOB`) / 365.25 <= 5 THEN 1 ELSE NULL END) AS `5 and Under`,
  COUNT(CASE WHEN DATEDIFF(NOW(), `DOB`) / 365.25 BETWEEN 6 AND 17 THEN 1 ELSE NULL END) AS `6 to 17`,
  COUNT(CASE WHEN DATEDIFF(NOW(), `DOB`) / 365.25 BETWEEN 18 AND 30 THEN 1 ELSE NULL END) AS `18 to 30`,
  COUNT(CASE WHEN DATEDIFF(NOW(), `DOB`) / 365.25 > 30 THEN 1 ELSE NULL END) AS `30+`
FROM `patient_data`;   
 
-- Query for gettins top 10 prescriptions
-- will likely need to revist once we get data back from prod DB
SELECT COUNT(`drug`) AS "Prescriptions", `drug` AS "Name"
FROM `prescriptions`
GROUP BY `drug`
ORDER BY "Prescriptions" DESC
LIMIT 10;
 
-- Query for getting family size
SELECT
  COUNT(CASE WHEN `family_size` <= 5 THEN 1 ELSE NULL END) AS "1 to 5",
  COUNT(CASE WHEN `family_size` BETWEEN 5 AND 10 THEN 1 ELSE NULL END) AS "5 to 10",
  COUNT(CASE WHEN `family_size` > 10 THEN 1 ELSE NULL END) AS  "10+"
FROM `patient_data`; 


-- Queries for getting patient visits
-- Given a date dimension table `date_d` shown below, this returns all appointments
-- with a status of 'arrived' or 'arrived late' along with the year, date, week of year, month of year,
-- and quarter. 
SELECT dashboard_date_d.year, `apptdate`, dashboard_date_d.week_of_year, dashboard_date_d.month_of_year, dashboard_date_d.quarter
FROM patient_tracker
JOIN patient_tracker_element ON `id` = `pt_tracker_id` AND `status` = '@' OR '~'
JOIN dashboard_date_d ON `apptdate` = dashboard_date_d.date
ORDER BY dashboard_date_d.year ASC;

-- this one gets encounters which are stored separately but count toward totals the same
SELECT dashboard_date_d.year, form_encounter.date AS "encounter date", dashboard_date_d.week_of_year, dashboard_date_d.month_of_year, dashboard_date_d.quarter
FROM form_encounter
JOIN dashboard_date_d ON DATE(form_encounter.date) = dashboard_date_d.date
ORDER BY dashboard_date_d.year ASC;


--! This is for creating the date dimension table to join our queries on
-- credit https://gist.github.com/sunnycmf/131a10a17d226e2ffb69

-- CREATE TABLE dashboard_numbers_small (number INT);
-- INSERT INTO dashboard_numbers_small VALUES (0),(1),(2),(3),(4),(5),(6),(7),(8),(9);

-- -- Main-numbers table
-- CREATE TABLE dashboard_numbers (number BIGINT);
-- INSERT INTO dashboard_numbers
-- SELECT thousands.number * 1000 + hundreds.number * 100 + tens.number * 10 + ones.number
-- FROM dashboard_numbers_small thousands, dashboard_numbers_small hundreds, dashboard_numbers_small tens, dashboard_numbers_small ones
-- LIMIT 1000000;

-- -- Create Date Dimension table
-- CREATE TABLE dashboard_date_d (
-- date_id          BIGINT PRIMARY KEY,
-- date             DATE NOT NULL,
-- year             INT,
-- month            CHAR(10),
-- month_of_year    CHAR(2),
-- day_of_month     INT,
-- day              CHAR(10),
-- day_of_week      INT,
-- weekend          CHAR(10) NOT NULL DEFAULT "Weekday",
-- day_of_year      INT,
-- week_of_year     CHAR(2),
-- quarter  INT,
-- previous_day     date NOT NULL default '0000-00-00',
-- next_day         date NOT NULL default '0000-00-00',
-- UNIQUE KEY `date` (`date`));

-- -- First populate with ids and Date
-- -- Change year start and end to match your needs. The sql creates records thru the year 2028.
-- INSERT INTO dashboard_date_d (date_id, date)
-- SELECT number, DATE_ADD( '2014-01-01', INTERVAL number DAY )
-- FROM dashboard_numbers
-- WHERE DATE_ADD( '2014-01-01', INTERVAL number DAY ) BETWEEN '2020-01-01' AND '2028-12-31'
-- ORDER BY number;

-- -- Update other columns based on the date.
-- UPDATE dashboard_date_d SET
-- year            = DATE_FORMAT( date, "%Y" ),
-- month           = DATE_FORMAT( date, "%M"),
-- month_of_year   = DATE_FORMAT( date, "%m"),
-- day_of_month    = DATE_FORMAT( date, "%d" ),
-- day             = DATE_FORMAT( date, "%W" ),
-- day_of_week     = DAYOFWEEK(date),
-- weekend         = IF( DATE_FORMAT( date, "%W" ) IN ('Saturday','Sunday'), 'Weekend', 'Weekday'),
-- day_of_year     = DATE_FORMAT( date, "%j" ),
-- week_of_year    = DATE_FORMAT( date, "%V" ),
-- quarter         = QUARTER(date),
-- previous_day    = DATE_ADD(date, INTERVAL -1 DAY),
-- next_day        = DATE_ADD(date, INTERVAL 1 DAY);

