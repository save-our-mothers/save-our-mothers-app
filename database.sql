-- Currently 'test-database-somnow'

-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!


CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "prescriptions" (
	"id" SERIAL PRIMARY KEY,
	"drug_name" VARCHAR NOT NULL,
	"count" INT NOT NULL
);
INSERT INTO "prescriptions" ("drug_name") VALUES ('Amoxicillin Cap 500mg');
INSERT INTO "prescriptions" ("drug_name") VALUES ('Paracetamol Tab 500mg');
INSERT INTO "prescriptions" ("drug_name") VALUES ('Amoxicillin Cap/Tab 250mg');
INSERT INTO "prescriptions" ("drug_name") VALUES ('Ferro Sulfate Tab');
INSERT INTO "prescriptions" ("drug_name") VALUES ('Magnesium Trisilicate 500mg');
INSERT INTO "prescriptions" ("drug_name") VALUES ('Metronidazole Tab 200mg');
INSERT INTO "prescriptions" ("drug_name") VALUES ('Amoxicillin Syrup 250/125mg');
INSERT INTO "prescriptions" ("drug_name") VALUES ('Metronidazole & Norfloxacin Syrup 100mg/5ml');
INSERT INTO "prescriptions" ("drug_name") VALUES ('Ceftriaxone Injection 1g');
INSERT INTO "prescriptions" ("drug_name") VALUES ('Ringer Lactate Solution 500ml');



CREATE TABLE "locations" (
	"id" SERIAL PRIMARY KEY,
	"neighborhood" VARCHAR NOT NULL,
	"city" VARCHAR NOT NULL,
	"count" INT NOT NULL
);

INSERT INTO locations (neighborhood, city, count) VALUES
  ('Neighborhood 1', 'City A', 20),
  ('Neighborhood 2', 'City B', 15),
  ('Neighborhood 3', 'City C', 10),
  ('Neighborhood 4', 'City A', 25),
  ('Neighborhood 5', 'City B', 18),
  ('Neighborhood 6', 'City C', 12);






CREATE TABLE "patients_unique" (
	"id" SERIAL PRIMARY KEY,
	"count" INT NOT NULL,
	"gender" VARCHAR NOT NULL
);
INSERT INTO "patients_unique" ("count", "gender") VALUES (60, 'Male');
INSERT INTO "patients_unique" ("count", "gender") VALUES (70, 'Female');
INSERT INTO "patients_unique" ("count", "gender") VALUES (30, 'Other');



-- CREATE TABLE "patient_visits" (
-- 	"id" SERIAL PRIMARY KEY,
-- 	"count" INT NOT NULL,
-- 	"type" VARCHAR NOT NULL
-- );
-- INSERT INTO "patient_visits" ("count", "type") VALUES (15, 'Routine Check-up');
-- INSERT INTO "patient_visits" ("count", "type") VALUES (10, 'Specialist Appointment');
-- INSERT INTO "patient_visits" ("count", "type") VALUES (5, 'Emergency Visit');

-- SELECT SUM("count") AS total_patients FROM "patients_unique";
-- SELECT "type", "count" FROM "patient_visits";

CREATE TABLE patient_visits (
  id SERIAL PRIMARY KEY,
  year INT NOT NULL,
  year_total INT NOT NULL,
  week_1 INT,
  week_2 INT,
  week_3 INT,
  week_4 INT,
  week_5 INT,
  week_6 INT,
  week_7 INT,
  week_8 INT,
  week_9 INT,
  week_10 INT,
  week_11 INT,
  week_12 INT,
  week_13 INT,
  week_14 INT,
  week_15 INT,
  week_16 INT,
  week_17 INT,
  week_18 INT,
  week_19 INT,
  week_20 INT,
  week_21 INT,
  week_22 INT,
  week_23 INT,
  week_24 INT,
  week_25 INT,
  week_26 INT,
  week_27 INT,
  week_28 INT,
  week_29 INT,
  week_30 INT,
  week_31 INT,
  week_32 INT,
  week_33 INT,
  week_34 INT,
  week_35 INT,
  week_36 INT,
  week_37 INT,
  week_38 INT,
  week_39 INT,
  week_40 INT,
  week_41 INT,
  week_42 INT,
  week_43 INT,
  week_44 INT,
  week_45 INT,
  week_46 INT,
  week_47 INT,
  week_48 INT,
  week_49 INT,
  week_50 INT,
  week_51 INT,
  week_52 INT,
  month_1 INT,
  month_2 INT,
  month_3 INT,
  month_4 INT,
  month_5 INT,
  month_6 INT,
  month_7 INT,
  month_8 INT,
  month_9 INT,
  month_10 INT,
  month_11 INT,
  month_12 INT
  Q_1 INT,
  Q_2 INT,
  Q_3 INT,
  Q_4 INT,
);




CREATE TABLE "family_size" (
	"id" SERIAL PRIMARY KEY,
	"range" VARCHAR NOT NULL,
	"count" INT NOT NULL
);
INSERT INTO "family_size" ("range", "count") VALUES ('1-2', 30);
INSERT INTO "family_size" ("range", "count") VALUES ('3-4', 25);
INSERT INTO "family_size" ("range", "count") VALUES ('5-6', 16);
INSERT INTO "family_size" ("range", "count") VALUES ('7+', 10);

SELECT "range", "count" FROM "family_size";


CREATE TABLE "ages" (
	"id" SERIAL PRIMARY KEY,
	"range" VARCHAR NOT NULL,
	"count" INT NOT NULL
);
INSERT INTO "ages" ("range", "count") VALUES ('0-10', 50);
INSERT INTO "ages" ("range", "count") VALUES ('11-20', 35);
INSERT INTO "ages" ("range", "count") VALUES ('21-30', 20);
INSERT INTO "ages" ("range", "count") VALUES ('31-40', 15);
INSERT INTO "ages" ("range", "count") VALUES ('41-50', 10);
INSERT INTO "ages" ("range", "count") VALUES ('51+', 5);



ALTER TABLE "patient_visits"
ADD COLUMN year INT NOT NULL,
ADD COLUMN year_total INT NOT NULL,
ADD COLUMN week_1 INT,
ADD COLUMN week_2 INT,
ADD COLUMN week_3 INT,
ADD COLUMN week_4 INT,
ADD COLUMN week_5 INT,
ADD COLUMN week_6 INT,
ADD COLUMN week_7 INT,
ADD COLUMN week_8 INT,
ADD COLUMN week_9 INT,
ADD COLUMN week_10 INT,
ADD COLUMN week_12 INT,
ADD COLUMN week_13 INT,
ADD COLUMN week_14 INT,
ADD COLUMN week_15 INT,
ADD COLUMN week_16 INT,
ADD COLUMN week_17 INT,
ADD COLUMN week_18 INT,
ADD COLUMN week_19 INT,
ADD COLUMN week_20 INT,
ADD COLUMN week_21 INT,
ADD COLUMN week_22 INT,
ADD COLUMN week_23 INT,
ADD COLUMN week_24 INT,
ADD COLUMN week_25 INT,
ADD COLUMN week_26 INT,
ADD COLUMN week_27 INT,
ADD COLUMN week_28 INT,
ADD COLUMN week_29 INT,
ADD COLUMN week_30 INT,
ADD COLUMN week_31 INT,
ADD COLUMN week_32 INT,
ADD COLUMN week_33 INT,
ADD COLUMN week_34 INT,
ADD COLUMN week_35 INT,
ADD COLUMN week_36 INT,
ADD COLUMN week_37 INT,
ADD COLUMN week_38 INT,
ADD COLUMN week_39 INT,
ADD COLUMN week_40 INT,
ADD COLUMN week_41 INT,
ADD COLUMN week_42 INT,
ADD COLUMN week_43 INT,
ADD COLUMN week_44 INT,
ADD COLUMN week_45 INT,
ADD COLUMN week_46 INT,
ADD COLUMN week_47 INT,
ADD COLUMN week_48 INT,
ADD COLUMN week_49 INT,
ADD COLUMN week_50 INT,
ADD COLUMN week_51 INT,
ADD COLUMN week_52 INT,
ADD COLUMN month_1 INT,
ADD COLUMN month_2 INT,
ADD COLUMN month_3 INT,
ADD COLUMN month_4 INT,
ADD COLUMN month_5 INT,
ADD COLUMN month_6 INT,
ADD COLUMN month_7 INT,
ADD COLUMN month_8 INT,
ADD COLUMN month_9 INT,
ADD COLUMN month_10 INT,
ADD COLUMN month_11 INT,
ADD COLUMN month_12 INT,
ADD COLUMN Q_1 INT,
ADD COLUMN Q_2 INT,
ADD COLUMN Q_3 INT,
ADD COLUMN Q_4 INT;
ALTER TABLE patient_visits ALTER COLUMN year DROP NOT NULL;
ALTER TABLE patient_visits ADD COLUMN year INTEGER;

ALTER TABLE "patient_visits" ADD COLUMN week_11 INT;

INSERT INTO "patient_visits" (
    "count", "type",
    week_1, week_2, week_3, week_4, week_5, week_6, week_7, week_8, week_9, week_10,
    week_12, week_13, week_14, week_15, week_16, week_17, week_18, week_19, week_20,
    week_21, week_22, week_23, week_24, week_25, week_26, week_27, week_28, week_29,
    week_30, week_31, week_32, week_33, week_34, week_35, week_36, week_37, week_38,
    week_39, week_40, week_41, week_42, week_43, week_44, week_45, week_46, week_47,
    week_48, week_49, week_50, week_51, week_52, month_1, month_2, month_3, month_4,
    month_5, month_6, month_7, month_8, month_9, month_10, month_11, month_12, Q_1,
    Q_2, Q_3, Q_4
)
VALUES (
    15, 'Routine Check-up',
    10, 8, 7, 9, 11, 13, 15, 12, 10, 8, 7, 9, 11, 13, 15, 12, 10, 8, 7,
    9, 11, 13, 15, 12, 10, 8, 7, 9, 11, 13, 15, 12, 10, 8, 7, 9, 11,
    13, 15, 12, 10, 8, 7, 9, 11, 13, 15, 12, 10, 8, 7, 9, 11, 13,
    15, 12, 10, 8, 7, 9, 11, 13, 15, 12, 10, 8, 7, 9, 11, 13, 15,
    1, 2, 3, 4
);


INSERT INTO patient_visits ("count", "type", year, week_1, week_2, week_3, week_4, week_5, week_6, week_7, week_8, week_9, week_10,
                            week_11, week_12, week_13, week_14, week_15, week_16, week_17, week_18, week_19, week_20,
                            week_21, week_22, week_23, week_24, week_25, week_26, week_27, week_28, week_29, week_30,
                            week_31, week_32, week_33, week_34, week_35, week_36, week_37, week_38, week_39, week_40,
                            week_41, week_42, week_43, week_44, week_45, week_46, week_47, week_48, week_49, week_50,
                            week_51, week_52, month_1, month_2, month_3, month_4, month_5, month_6, month_7, month_8,
                            month_9, month_10, month_11, month_12, Q_1, Q_2, Q_3, Q_4)
VALUES (5, 'Specialist Appointment', 2022,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);



INSERT INTO patient_visits ("count", "type", year,
                            week_1, week_2, week_3, week_4, week_5, week_6, week_7, week_8, week_9, week_10,
                            week_11, week_12, week_13, week_14, week_15, week_16, week_17, week_18, week_19, week_20,
                            week_21, week_22, week_23, week_24, week_25, week_26, week_27, week_28, week_29, week_30,
                            week_31, week_32, week_33, week_34, week_35, week_36, week_37, week_38, week_39, week_40,
                            week_41, week_42, week_43, week_44, week_45, week_46, week_47, week_48, week_49, week_50,
                            week_51, week_52)
VALUES (5, 'Specialist Appointment', 2022,
        -- Weekly data
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
        41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52);
        
INSERT INTO patient_visits ("count", "type", year,
                            week_1, week_2, week_3, week_4, week_5, week_6, week_7, week_8, week_9, week_10,
                            week_11, week_12, week_13, week_14, week_15, week_16, week_17, week_18, week_19, week_20,
                            week_21, week_22, week_23, week_24, week_25, week_26, week_27, week_28, week_29, week_30,
                            week_31, week_32, week_33, week_34, week_35, week_36, week_37, week_38, week_39, week_40,
                            week_41, week_42, week_43, week_44, week_45, week_46, week_47, week_48, week_49, week_50,
                            week_51, week_52)
VALUES (15, 'Prenatal visit', 2023,
        -- Weekly data
        30, 49, 34, 69, 70, 34, 22, 67, 45, 65, 45, 22, 30, 50, 43, 30, 50, 32, 56, 67,
        54, 32, 44, 21, 38, 49, 26, 58, 42, 50, 33, 62, 29, 37, 46, 24, 35, 42, 21, 39, 55,
        44, 31, 36, 28, 47, 53, 30, 48, 35, 27, 40);
        
 INSERT INTO patient_visits ("count", "type", year,
                            week_1, week_2, week_3, week_4, week_5, week_6, week_7, week_8, week_9, week_10,
                            week_11, week_12, week_13, week_14, week_15, week_16, week_17, week_18, week_19, week_20,
                            week_21, week_22, week_23, week_24, week_25, week_26, week_27, week_28, week_29, week_30,
                            week_31, week_32, week_33, week_34, week_35, week_36, week_37, week_38, week_39, week_40,
                            week_41, week_42, week_43, week_44, week_45, week_46, week_47, week_48, week_49, week_50,
                            week_51, week_52)
VALUES (15, 'Emergency visit', 2020,
        -- Weekly data
        40, 69, 24, 69, 70, 34, 22, 67, 45, 65, 45, 22, 30, 50, 43, 70, 40, 42, 26, 67,
        54, 32, 24, 21, 38, 49, 26, 58, 42, 50, 33, 52, 39, 37, 36, 24, 85, 72, 41, 29, 85,
        14, 31, 36, 28, 47, 53, 30, 48, 35, 27, 40);       






-- Add the year_total column for each year from 2020 to 2031
ALTER TABLE patient_visits
ADD COLUMN year_total INT;

-- Update the year_total value for multiple years
UPDATE patient_visits
SET year_total = (week_1 + week_2 + week_3 + week_4 + week_5 + week_6 + week_7 + week_8 + week_9 + week_10 +
                  week_11 + week_12 + week_13 + week_14 + week_15 + week_16 + week_17 + week_18 + week_19 + week_20 +
                  week_21 + week_22 + week_23 + week_24 + week_25 + week_26 + week_27 + week_28 + week_29 + week_30 +
                  week_31 + week_32 + week_33 + week_34 + week_35 + week_36 + week_37 + week_38 + week_39 + week_40 +
                  week_41 + week_42 + week_43 + week_44 + week_45 + week_46 + week_47 + week_48 + week_49 + week_50 +
                  week_51 + week_52)
WHERE year IN (2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031);

SELECT year, SUM(count) AS total_visits
FROM patient_visits
GROUP BY year
ORDER BY year;
