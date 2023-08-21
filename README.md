
# Save Our Mothers App
Save Our Mothers Reporting Dashboard

## Description

_Duration: 3 Week Sprint_

This application will allow users to view general data that reflects the efforts of the Safe Childbirth Foundation. Donors will be able to see the age ranges of their patients, as well as family sizes, region locations of patients, on-demand prescriptions, number of unique patients helped, and clinic visits on a weekly, monthly, quarterly, annual view. Admin users will be able to refresh data to see the most current numbers.

This project has two components. A web app that stores aggregated data in its database and displays the data in graph format and an Azure function app that queries the openEMR database to get aggregated data. Login will be required for an admin to refresh the data (triggering the function app) but viewing the charts and graphs does not require login.

To see the fully functional site, please visit: [DEPLOYED VERSION OF APP](https://somnow-emr.azurewebsites.net/#/home)

## Screen Shots

![Screenshot 2023-07-15 at 1 35 30 PM](https://github.com/save-our-mothers/save-our-mothers-app/assets/111456731/743935ad-0d51-4817-bf2b-f43348db9e67)

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- The companion [function app](https://github.com/save-our-mothers/openemr) deployed in SOMNOW's Azure environment
- The function app queries the production database and returns the aggregated data that is put into the PostgreSQL database

## Installation

1. Create a database named `your database name`.
2. The queries in the `database.sql` file are set up to create all the necessary tables. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed.
3. At the bottom of `database.sql` are three tables that need to be made in the <b>openEMR database</b>: dashboard_numbers, dashboard_numbers_small, dashboard_date_d. These include UPDATEs and SETs to populate each table. 
4. A button on the admin page triggers the Azure function app to retrieve the data. 
5. Open up your editor of choice and run an `npm install`
6. Create a .env file with SERVER_SESSION_SECRET=[a long random string]. This is for the PassPort library. 
7. Run `npm run server` in your terminal
8. The `npm run client` command will open up a new browser tab for you!

## Usage

1. Designate an admin. They will need to trigger the function app to populate the PostgreSQL database.
2. Once the data is populated, the charts will display the information.
3. The patient visits charts allows for filtering by week, month, quarter, and year.

## Built With

React
Redux and Sagas
Express
PG 
MUI
ChartJS
Apache Echarts
MySQL 2 and ssh2 for the function app. 

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped us to make this application a reality. Thank you to the Tanzanite cohort and team Save Our Mothers. Thank you to Save Our Mothers for trusting us to build this application for you. 

Original Repository can be seen here: https://github.com/save-our-mothers

