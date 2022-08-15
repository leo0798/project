# Flight Schedule Docs

    berikut ini merupakan dokumentasi tentang aplikasi ini

---

## Task List

Here is the list of tasks :

- [x] Create Controller for plane, schedule, airport
- [x] Create model for Plane, schedule, airport and 
- [ ] Create View using Bootstrap and Ejs

## app URL routing

| Method | Route                | Description                                              |
| ------ | -------------------- | -------------------------------------------------------- |
| GET    | /                    | Menampilkan Home                                         |
| GET    | /plane               | Menampilkan semua pesawat yang ada didalam database      |
| GET    | /schedule            | Menampilkan semua schedule yang ada didalam database     |
| GET    | /airport             | Menampilkan semua bandara yang ada didalam database      |
| POST   | /plane/create        | Menambahkan data pesawat kedalam database                |
| POST   | /airport/create      | Menambahkan data bandara kedalam database                |
| POST   | /schedule/create     | Menambahkan data schedule kedalam database               |
| GET    | /pesawat/create      | Menampilkan data kereta yang baru ditambahkan database   |
| GET    | /schedule/create     | Menampilkan data schedule yang baru ditambahkan database |
| GET    | /airport/create      | Menampilkan data station yang baru ditambahkan database  |
| GET    | /pesawat/delete/:id  | Delete data pesawat sesuai dengan ID yang ditentukan     |
| GET    | /schedule/delete/:id | Delete data schedule sesuai dengan ID yang ditentukan    |
| GET    | /airport/delete/:id  | Delete data station sesuai dengan ID yang ditentukan     |
| POST   | /pesawat/update/:id  | Update data pesawat sesuai dengan ID yang ditentukan     |
| POST   | /schedule/update/:id | Update data schedules sesuai dengan ID yang ditentukan   |
| POST   | /airport/update/:id  | Update data schedules sesuai dengan ID yang ditentukan   |
| GET    | /plane/update/:id    | Menampilkan data pesawat yang baru di Update             |
| GET    | /schedule/update/:id | Menampilkan data schedule yang baru di Update            |
| GET    | /airport/update/:id  | Menampilkan data bandara yang baru di Update             |
| GET    | /plane/schedule/:id  | Menampilkan semua jadwal kereta                          |

## app model schemas 


npx sequelize-cli model:generate --name schedule --attributes timeArrivePlane:date,timeDeparturePlane:date,airport_id:integer,plane_id:integer &&
npx sequelize-cli model:generate --name plane --attributes name:string,type:string,airport_id:integer &&
npx sequelize-cli model:generate --name route --attributes airport_id:integer,plane_id:integer &&
npx sequelize-cli model:generate --name airport --attributes name:string,location:string 

npx sequelize-cli model:generate --name planeschedule --attributes planeId:integer,scheduleId:integer

