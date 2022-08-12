npx sequelize-cli model:generate --name schedule --attributes timeArrivePlane:date,timeDeparturePlane:date,airport_id:integer &&
npx sequelize-cli model:generate --name plane --attributes name:string,type:string,schedule_id:integer,route_id:integer,airport_id:integer &&
npx sequelize-cli model:generate --name route --attributes airport_id:integer &&
npx sequelize-cli model:generate --name aiport --attributes name:string,location:string 