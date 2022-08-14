npx sequelize-cli model:generate --name schedule --attributes timeArrivePlane:date,timeDeparturePlane:date,airport_id:integer,plane_id:integer &&
npx sequelize-cli model:generate --name plane --attributes name:string,type:string,airport_id:integer &&
npx sequelize-cli model:generate --name route --attributes airport_id:integer,plane_id:integer &&
npx sequelize-cli model:generate --name airport --attributes name:string,location:string 

npx sequelize-cli model:generate --name planeschedule --attributes planeId:integer,scheduleId:integer

