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
INSERT INTO "patients_unique" ("count", "gender") VALUES (5, 'Male');
INSERT INTO "patients_unique" ("count", "gender") VALUES (7, 'Female');
INSERT INTO "patients_unique" ("count", "gender") VALUES (3, 'Other');



CREATE TABLE "patient_visits" (
	"id" SERIAL PRIMARY KEY,
	"count" INT NOT NULL,
	"type" VARCHAR NOT NULL
);
INSERT INTO "patient_visits" ("count", "type") VALUES (15, 'Routine Check-up');
INSERT INTO "patient_visits" ("count", "type") VALUES (10, 'Specialist Appointment');
INSERT INTO "patient_visits" ("count", "type") VALUES (5, 'Emergency Visit');

SELECT SUM("count") AS total_patients FROM "patients_unique";
SELECT "type", "count" FROM "patient_visits";



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