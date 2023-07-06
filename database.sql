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