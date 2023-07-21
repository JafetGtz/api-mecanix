
import  Sequelize  from "sequelize"

export const sequelize = new Sequelize('mecanix_survey', 'postgres', '123456',{
  host: 'localhost',
  dialect: 'postgres'
})

