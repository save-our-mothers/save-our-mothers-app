-- Currently 'test-database-somnow'

-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

-- Table for "user"
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

-- Table for "prescriptions"
CREATE TABLE "prescriptions" (
	"id" INT GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1 MINVALUE 1 MAXVALUE 1000),
	"drug_name" VARCHAR NOT NULL,
	"count" INT);

-- Dummy data for table "prescriptions"
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

-- Table for "locations"
CREATE TABLE "locations" (
	"id" INT GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1 MINVALUE 1 MAXVALUE 1000),
	"neighborhood" VARCHAR NOT NULL,
	"city" VARCHAR NOT NULL,
	"count" INT NOT NULL
);

-- Dummy data for table "locations"
INSERT INTO locations (neighborhood, city, count) VALUES
  ('Neighborhood 1', 'City A', 20),
  ('Neighborhood 2', 'City B', 15),
  ('Neighborhood 3', 'City C', 10),
  ('Neighborhood 4', 'City A', 25),
  ('Neighborhood 5', 'City B', 18),
  ('Neighborhood 6', 'City C', 12);

-- Table for "patients_unique"
CREATE TABLE "patients_unique" (
	"id" INT GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1 MINVALUE 1 MAXVALUE 1000),
	"count" INT NOT NULL,
	"gender" VARCHAR NOT NULL
);

-- Dummy data for "patients_unique"
INSERT INTO "patients_unique" ("count", "gender") VALUES (60, 'Male');
INSERT INTO "patients_unique" ("count", "gender") VALUES (70, 'Female');
INSERT INTO "patients_unique" ("count", "gender") VALUES (30, 'Other');

-- Table for "family_size"
CREATE TABLE "family_size" (
	"id" INT GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1 MINVALUE 1 MAXVALUE 1000),
	"range" VARCHAR NOT NULL,
	"count" INT NOT NULL
);

-- Dummy data for table "family_size"
INSERT INTO "family_size" ("range", "count") VALUES ('1-2', 30);
INSERT INTO "family_size" ("range", "count") VALUES ('3-4', 25);
INSERT INTO "family_size" ("range", "count") VALUES ('5-6', 16);
INSERT INTO "family_size" ("range", "count") VALUES ('7+', 10);

SELECT "range", "count" FROM "family_size";

-- Table for "ages"
CREATE TABLE "ages" (
	"id" INT GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1 MINVALUE 1 MAXVALUE 1000),
	"range" VARCHAR NOT NULL,
	"count" INT NOT NULL
);

-- Dummy data for table "ages"
INSERT INTO "ages" ("range", "count") VALUES ('0-10', 50);
INSERT INTO "ages" ("range", "count") VALUES ('11-20', 35);
INSERT INTO "ages" ("range", "count") VALUES ('21-30', 20);
INSERT INTO "ages" ("range", "count") VALUES ('31-40', 15);
INSERT INTO "ages" ("range", "count") VALUES ('41-50', 10);
INSERT INTO "ages" ("range", "count") VALUES ('51+', 5);

-- Table for patient_visits
CREATE TABLE patient_visits (
  id INT GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1 MINVALUE 1 MAXVALUE 1000),
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
  month_12 INT,
  Q_1 INT,
  Q_2 INT,
  Q_3 INT,
  Q_4 INT
);


-- RUN ALL CODE UP TO HERE. THE FOLLOWING IS JUST TEST DATA -gd -----------------------------
-----------
----------
---------
--------
-------
------
-----
----
---
--
-
-- Test Data ----------------------------

INSERT INTO patient_visits (year, year_total, week_1, week_2, week_3, week_4, week_5, week_6, week_7, week_8, week_9, week_10,
                            week_11, week_12, week_13, week_14, week_15, week_16, week_17, week_18, week_19, week_20,
                            week_21, week_22, week_23, week_24, week_25, week_26, week_27, week_28, week_29, week_30,
                            week_31, week_32, week_33, week_34, week_35, week_36, week_37, week_38, week_39, week_40,
                            week_41, week_42, week_43, week_44, week_45, week_46, week_47, week_48, week_49, week_50,
                            week_51, week_52, month_1, month_2, month_3, month_4, month_5, month_6, month_7, month_8,
                            month_9, month_10, month_11, month_12, Q_1, Q_2, Q_3, Q_4)
VALUES (2020, 140, 60, 28, 37, 43, 80, 90, 70, 82, 90, 100,
        110, 120, 130, 140, 150, 160, 170, 180, 190, 200,
        210, 220, 230, 240, 250, 260, 270, 280, 290, 300,
        310, 320, 330, 340, 350, 360, 370, 380, 390, 400,
        410, 420, 430, 440, 430, 460, 470, 480, 490, 500,
        510, 520, 530, 540, 550, 560, 570, 580, 590, 600,
        610, 620, 630, 640, 657, 660, 670, 680);
        
        
        INSERT INTO patient_visits (year) VALUES
  (2020),
  (2021),
  (2022),
  (2023),
  (2024),
  (2025),
  (2026),
  (2027),
  (2028),
  (2029),
  (2030),
  (2031);
  
  UPDATE patient_visits
SET
  week_1 = 140,
  week_2 = 60,
  week_3 = 28,
  week_4 = 37,
  week_5 = 43,
  week_6 = 80,
  week_7 = 90,
  week_8 = 70,
  week_9 = 82,
  week_10 = 90,
  week_11 = 100,
  week_12 = 110,
  week_13 = 120,
  week_14 = 130,
  week_15 = 140,
  week_16 = 150,
  week_17 = 160,
  week_18 = 170,
  week_19 = 180,
  week_20 = 190,
  week_21 = 200,
  week_22 = 210,
  week_23 = 220,
  week_24 = 230,
  week_25 = 240,
  week_26 = 250,
  week_27 = 260,
  week_28 = 270,
  week_29 = 280,
  week_30 = 290,
  week_31 = 300,
  week_32 = 310,
  week_33 = 320,
  week_34 = 330,
  week_35 = 340,
  week_36 = 350,
  week_37 = 360,
  week_38 = 370,
  week_39 = 380,
  week_40 = 390,
  week_41 = 400,
  week_42 = 410,
  week_43 = 420,
  week_44 = 430,
  week_45 = 440,
  week_46 = 430,
  week_47 = 460,
  week_48 = 470,
  week_49 = 480,
  week_50 = 490,
  week_51 = 500,
  week_52 = 510,
  month_1 = 520,
  month_2 = 530,
  month_3 = 540,
  month_4 = 550,
  month_5 = 560,
  month_6 = 570,
  month_7 = 580,
  month_8 = 590,
  month_9 = 600,
  month_10 = 610,
  month_11 = 620,
  month_12 = 630,
  Q_1 = 640,
  Q_2 = 657,
  Q_3 = 660,
  Q_4 = 670
WHERE
  year = 2025;
  
  
 UPDATE patient_visits
SET year_total = 2500, week_1 = 140, week_2 = 160, week_3 = 180, week_4 = 200, week_5 = 220, week_6 = 240,
    week_7 = 260, week_8 = 280, week_9 = 300, week_10 = 320, week_11 = 340, week_12 = 360, week_13 = 380,
    week_14 = 400, week_15 = 420, week_16 = 440, week_17 = 460, week_18 = 480, week_19 = 500, week_20 = 520,
    week_21 = 540, week_22 = 560, week_23 = 580, week_24 = 600, week_25 = 620, week_26 = 640, week_27 = 660,
    week_28 = 680, week_29 = 700, week_30 = 720, week_31 = 740, week_32 = 760, week_33 = 780, week_34 = 800,
    week_35 = 820, week_36 = 840, week_37 = 860, week_38 = 880, week_39 = 900, week_40 = 920, week_41 = 940,
    week_42 = 960, week_43 = 980, week_44 = 1000, week_45 = 1020, week_46 = 1040, week_47 = 1060, week_48 = 1080,
    week_49 = 1100, week_50 = 1120, week_51 = 1140, week_52 = 1160, month_1 = 1180, month_2 = 1200, month_3 = 1220,
    month_4 = 1240, month_5 = 1260, month_6 = 1280, month_7 = 1300, month_8 = 1320, month_9 = 1340, month_10 = 1360,
    month_11 = 1380, month_12 = 1400, Q_1 = 1420, Q_2 = 1440, Q_3 = 1460, Q_4 = 1480
WHERE year = 2026;


UPDATE patient_visits
SET year_total = 2800, week_1 = 180, week_2 = 200, week_3 = 220, week_4 = 240, week_5 = 260, week_6 = 280,
    week_7 = 300, week_8 = 320, week_9 = 340, week_10 = 360, week_11 = 380, week_12 = 400, week_13 = 420,
    week_14 = 440, week_15 = 460, week_16 = 480, week_17 = 500, week_18 = 520, week_19 = 540, week_20 = 560,
    week_21 = 580, week_22 = 600, week_23 = 620, week_24 = 640, week_25 = 660, week_26 = 680, week_27 = 700,
    week_28 = 720, week_29 = 740, week_30 = 760, week_31 = 780, week_32 = 800, week_33 = 820, week_34 = 840,
    week_35 = 860, week_36 = 880, week_37 = 900, week_38 = 920, week_39 = 940, week_40 = 960, week_41 = 980,
    week_42 = 1000, week_43 = 1020, week_44 = 1040, week_45 = 1060, week_46 = 1080, week_47 = 1100, week_48 = 1120,
    week_49 = 1140, week_50 = 1160, week_51 = 1180, week_52 = 1200, month_1 = 1220, month_2 = 1240, month_3 = 1260,
    month_4 = 1280, month_5 = 1300, month_6 = 1320, month_7 = 1340, month_8 = 1360, month_9 = 1380, month_10 = 1400,
    month_11 = 1420, month_12 = 1440, Q_1 = 1460, Q_2 = 1480, Q_3 = 1500, Q_4 = 1520
WHERE year = 2027;


UPDATE patient_visits
SET year_total = 3000, week_1 = 200, week_2 = 220, week_3 = 240, week_4 = 260, week_5 = 280, week_6 = 300,
    week_7 = 320, week_8 = 340, week_9 = 360, week_10 = 380, week_11 = 400, week_12 = 420, week_13 = 440,
    week_14 = 460, week_15 = 480, week_16 = 500, week_17 = 520, week_18 = 540, week_19 = 560, week_20 = 580,
    week_21 = 600, week_22 = 620, week_23 = 640, week_24 = 660, week_25 = 680, week_26 = 700, week_27 = 720,
    week_28 = 740, week_29 = 760, week_30 = 780, week_31 = 800, week_32 = 820, week_33 = 840, week_34 = 860,
    week_35 = 880, week_36 = 900, week_37 = 920, week_38 = 940, week_39 = 960, week_40 = 980, week_41 = 1000,
    week_42 = 1020, week_43 = 1040, week_44 = 1060, week_45 = 1080, week_46 = 1100, week_47 = 1120, week_48 = 1140,
    week_49 = 1160, week_50 = 1180, week_51 = 1200, week_52 = 1220, month_1 = 1240, month_2 = 1260, month_3 = 1280,
    month_4 = 1300, month_5 = 1320, month_6 = 1340, month_7 = 1360, month_8 = 1380, month_9 = 1400, month_10 = 1420,
    month_11 = 1440, month_12 = 1460, Q_1 = 1480, Q_2 = 1500, Q_3 = 1520, Q_4 = 1540
WHERE year = 2028;



UPDATE patient_visits
SET year_total = 3200, week_1 = 220, week_2 = 240, week_3 = 260, week_4 = 280, week_5 = 300, week_6 = 320,
    week_7 = 340, week_8 = 360, week_9 = 380, week_10 = 400, week_11 = 420, week_12 = 440, week_13 = 460,
    week_14 = 480, week_15 = 500, week_16 = 520, week_17 = 540, week_18 = 560, week_19 = 580, week_20 = 600,
    week_21 = 620, week_22 = 640, week_23 = 660, week_24 = 680, week_25 = 700, week_26 = 720, week_27 = 740,
    week_28 = 760, week_29 = 780, week_30 = 800, week_31 = 820, week_32 = 840, week_33 = 860, week_34 = 880,
    week_35 = 900, week_36 = 920, week_37 = 940, week_38 = 960, week_39 = 980, week_40 = 1000, week_41 = 1020,
    week_42 = 1040, week_43 = 1060, week_44 = 1080, week_45 = 1100, week_46 = 1120, week_47 = 1140, week_48 = 1160,
    week_49 = 1180, week_50 = 1200, week_51 = 1220, week_52 = 1240, month_1 = 1260, month_2 = 1280, month_3 = 1300,
    month_4 = 1320, month_5 = 1340, month_6 = 1360, month_7 = 1380, month_8 = 1400, month_9 = 1420, month_10 = 1440,
    month_11 = 1460, month_12 = 1480, Q_1 = 1500, Q_2 = 1520, Q_3 = 1540, Q_4 = 1560
WHERE year = 2029;


UPDATE patient_visits
SET year_total = 3400, week_1 = 240, week_2 = 260, week_3 = 280, week_4 = 300, week_5 = 320, week_6 = 340,
    week_7 = 360, week_8 = 380, week_9 = 400, week_10 = 420, week_11 = 440, week_12 = 460, week_13 = 480,
    week_14 = 500, week_15 = 520, week_16 = 540, week_17 = 560, week_18 = 580, week_19 = 600, week_20 = 620,
    week_21 = 640, week_22 = 660, week_23 = 680, week_24 = 700, week_25 = 720, week_26 = 740, week_27 = 760,
    week_28 = 780, week_29 = 800, week_30 = 820, week_31 = 840, week_32 = 860, week_33 = 880, week_34 = 900,
    week_35 = 920, week_36 = 940, week_37 = 960, week_38 = 980, week_39 = 1000, week_40 = 1020, week_41 = 1040,
    week_42 = 1060, week_43 = 1080, week_44 = 1100, week_45 = 1120, week_46 = 1140, week_47 = 1160, week_48 = 1180,
    week_49 = 1200, week_50 = 1220, week_51 = 1240, week_52 = 1260, month_1 = 1280, month_2 = 1300, month_3 = 1320,
    month_4 = 1340, month_5 = 1360, month_6 = 1380, month_7 = 1400, month_8 = 1420, month_9 = 1440, month_10 = 1460,
    month_11 = 1480, month_12 = 1500, Q_1 = 1520, Q_2 = 1540, Q_3 = 1560, Q_4 = 1580
WHERE year = 2030;

UPDATE patient_visits
SET year_total = 3600, week_1 = 260, week_2 = 280, week_3 = 300, week_4 = 320, week_5 = 340, week_6 = 360,
    week_7 = 380, week_8 = 400, week_9 = 420, week_10 = 440, week_11 = 460, week_12 = 480, week_13 = 500,
    week_14 = 520, week_15 = 540, week_16 = 560, week_17 = 580, week_18 = 600, week_19 = 620, week_20 = 640,
    week_21 = 660, week_22 = 680, week_23 = 700, week_24 = 720, week_25 = 740, week_26 = 760, week_27 = 780,
    week_28 = 800, week_29 = 820, week_30 = 840, week_31 = 860, week_32 = 880, week_33 = 900, week_34 = 920,
    week_35 = 940, week_36 = 960, week_37 = 980, week_38 = 1000, week_39 = 1020, week_40 = 1040, week_41 = 1060,
    week_42 = 1080, week_43 = 1100, week_44 = 1120, week_45 = 1140, week_46 = 1160, week_47 = 1180, week_48 = 1200,
    week_49 = 1220, week_50 = 1240, week_51 = 1260, week_52 = 1280, month_1 = 1300, month_2 = 1320, month_3 = 1340,
    month_4 = 1360, month_5 = 1380, month_6 = 1400, month_7 = 1420, month_8 = 1440, month_9 = 1460, month_10 = 1480,
    month_11 = 1500, month_12 = 1520, Q_1 = 1540, Q_2 = 1560, Q_3 = 1580, Q_4 = 1600
WHERE year = 2031;
