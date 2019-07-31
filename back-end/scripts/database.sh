#!/bin/bash

set -e
set -u

if [ $# != 2 ]; then
    echo "please enter a db host and a table suffix"
    exit 1
fi

export DBHOST=$1
export TSUFF=$2

psql \
    -X \
    -U user \
    -h $DBHOST \
    -f /path/to/sql/file.sql \
    --echo-all \
    --set AUTOCOMMIT=off \
    --set ON_ERROR_STOP=on \
    --set TSUFF=$TSUFF \
    --set QTSTUFF=\'$TSUFF\' \
    mydatabase

psql_exit_status = $?

if [ $psql_exit_status != 0 ]; then
    echo "psql failed while trying to run this sql script" 1>&2
    exit $psql_exit_status
fi

echo "sql script successful"
exit 0





create database "National Parks2";
\c "National Parks2";




create table "National_Parks" (id SERIAL PRIMARY KEY, name text);

insert into "National_Parks" values 
(1,	'Acadia'),
(2,	'American Samoa'),
(3,	'Arches'),
(4,	'Badlands'),
(5,	'Big Bend'),
(6,	'Biscayne'),
(7,	'Black Canyon of the Gunnison'),
(8,	'Bryce Canyon'),
(9,	'Canyonlands'),
(10, 'Capitol Reef'),
(11, 'Carlsbad Caverns'),
(12, 'Channel Islands'),
(13, 'Congaree'),
(14, 'Crater Lake'),
(15, 'Cuyahoga Valley'),
(16, 'Death Valley'),
(17, 'Denali'),
(18, 'Dry Tortugas'),
(19, 'Everglades'),
(20, 'Gates of the Arctic'),
(21, 'Gateway Arch'),
(22, 'Glacier'),
(23, 'Glacier Bay'),
(24, 'Grand Canyon'),
(25, 'Grand Teton'),
(26, 'Great Basin'),
(27, 'Great Sand Dunes'),
(28, 'Great Smoky Mountains'),
(29, 'Guadalupe Mountains'),
(30, 'Haleakala'),
(31, 'Hawaii Volcanoes'),
(32, 'Hot Springs'),
(33, 'Indiana Dunes'),
(34, 'Isle Royale'),
(35, 'Joshua Tree'),
(36, 'Katmai'),
(37, 'Kenai Fjords'),
(38, 'Kings Canyon'),
(39, 'Kobuk Valley'),
(40, 'Lake Clark'),
(41, 'Lassen Volcanic'),
(42, 'Mammoth Cave'),
(43, 'Mesa Verde'),
(44, 'Mount Rainier'),
(45, 'North Cascades'),
(46, 'Olympic'),
(47, 'Petrified Forest'),
(48, 'Pinnacles'),
(49, 'Redwood'),
(50, 'Rocky Mountain'),
(51, 'Saguaro'),
(52, 'Sequoia'),
(53, 'Shenandoah'),
(54, 'Theodore Roosevelt'),
(55, 'Virgin Islands'),
(56, 'Voyageurs'),
(57, 'Wind Cave'),
(58, 'Wrangell-St. Elias'),
(59, 'Yellowstone'),
(60, 'Yosemite'),
(61, 'Zion');


create table "Employee" (id SERIAL PRIMARY KEY, park int, username text, password text, name text, FOREIGN KEY (park) REFERENCES "National_Parks" (id));

insert into "Employee" values 
(1,	5, 'MeganMoore', '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8', 'Megan Moore'),
(2, 52,	'AlexKaiser', 'ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f', 'Alex Kaiser');


create table "Visitor_Request" (id SERIAL PRIMARY KEY, parkLocation text, requestType text, problemDescription text, email text, employee_id int, foreign key (employee_id) references "Employee" (id));

insert into "Visitor_Request" values
(1,	'YellowStone', 'Bathroom needs service', 'Bathroom is dirty', 'JohnSmith@gmail.com', 1),
(2,	'Big Bend',	'Potable water is empty', 'There is no drinking water',	'JaneSmith@msn.com', 2);


create table "Submitted_Requests" (id SERIAL PRIMARY KEY, status text, dateCreated text, dateCompleted text, request_id int, foreign key (request_id) references "Visitor_Request" (id));

insert into "Submitted_Requests" values
(10, 'In progress', '01/01/2019', '01/03/2019', 1),
(11, 'Completed', '02/04/2019', '02/05/2019', 2);




# create table "Visitor Request" (
#     id SERIAL PRIMARY KEY, 
#     parkLocation text,
#     requestType text, 
#     problemDescription text, 
#     email text, 
#     FOREIGN KEY (eid) references Employee (id)
# );







# create table "SubmittedRequests" (
#     id SERIAL PRIMARY KEY,
#     status text, 
#     dateCreated text,
#     dateCompleted text, 
#     FOREIGN KEY (VRID) references VisitorRequest (id)
# );





# create table "Employees" (
#     id SERIAL PRIMARY KEY,
#     FOREIGN KEY (park) references NationalPark (id),
#     username text,
#     password text, 
#     name text
# );





# create table "NationalPark" (
#     id SERIAL PRIMARY KEY,
#     name text
# );