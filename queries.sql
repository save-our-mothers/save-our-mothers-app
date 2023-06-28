-- Query for getting total number of unique patients
SELECT COUNT(DISTINCT `id`) AS "Total Patients"
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
  COUNT(CASE WHEN DATEDIFF(NOW(), `DOB`) / 365.25 BETWEEN 5 AND 9 THEN 1 ELSE NULL END) AS `5 to 9`,
  COUNT(CASE WHEN DATEDIFF(NOW(), `DOB`) / 365.25 >= 10 THEN 1 ELSE NULL END) AS `10 and Over`
FROM `patient_data`;   
 
-- Query for gettins top 10 prescriptions
SELECT COUNT(DISTINCT `drug`) AS "Prescriptions"
FROM `prescriptions`
ORDER BY "Prescriptions" DESC
LIMIT 10;
 
-- Query for getting family size


-- Query for getting patient visits
-- Will likely come from 'extended_log' 