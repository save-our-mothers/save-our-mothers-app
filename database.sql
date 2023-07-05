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
	"drug_name" VARCHAR NOT NULL
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

CREATE TABLE "ages" (
	"id" SERIAL PRIMARY KEY,
	"range" VARCHAR NOT NULL,
	"count" INT NOT NULL
);

CREATE TABLE "locations" (
	"id" SERIAL PRIMARY KEY,
	"neighborhood" VARCHAR NOT NULL,
	"city" VARCHAR NOT NULL,
	"count" INT NOT NULL
);

CREATE TABLE "patients_unique" (
	"id" SERIAL PRIMARY KEY,
	"count" INT NOT NULL,
	"gender" VARCHAR NOT NULL
);

CREATE TABLE "patient_visits" (
	"id" SERIAL PRIMARY KEY,
	"count" INT NOT NULL,
	"type" VARCHAR NOT NULL
);

CREATE TABLE "family_size" (
	"id" SERIAL PRIMARY KEY,
	"range" VARCHAR NOT NULL,
	"count" INT NOT NULL
);