import { DataTypes} from 'sequelize'
import { sequelize }  from "../db/db";


export const Previaje = sequelize.define(
    'Previaje', 
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    taller: {
        type: DataTypes.STRING
    },
    cliente: {
        type: DataTypes.STRING
    },
    idvehiculo: {
        type: DataTypes.INTEGER
    },

    punto: {
        type: DataTypes.STRING
    },
    seccion: {
        type: DataTypes.STRING
    },
    fecharevision: {
        type: DataTypes.DATE
    },
    status: {
        type: DataTypes.STRING
    },
    nombrecompleto: {
        type: DataTypes.STRING
    }


})