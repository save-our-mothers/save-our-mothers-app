-- Query for getting total number of unique patients
SELECT 
	COUNT(DISTINCT `id`) AS "Total Patients",
  COUNT(CASE WHEN `sex` = 'Male' THEN 1 END) AS "Male",
  COUNT(CASE WHEN `sex` = 'Female' THEN 1 END) AS "Female",
  COUNT(CASE WHEN `sex` = 'UNK' THEN 1 END) AS "Unknown"
FROM patient_data;

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


-- Query for getting patient visits
-- Will likely come from 'patient_tracker_element' - include @ and ~ for arrived and arrived late