import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

// Defina os atributos do modelo
interface UserAttributes {
    id: number;
    name: string;
    email: string;
    password: string;
}

// Cria a interface para os atributos necessários na criação,
// tornando o campo 'id' opcional (pois será gerado automaticamente)
export interface UserCreationAttributes extends Optional<UserAttributes, 'id'> { }

export class User extends Model<UserAttributes, UserCreationAttributes> implements
    UserAttributes {
    public id!: number;
    public name!: string;
    public email!: string;
    public password!: string;
}

// Inicialize o modelo com os campos no banco
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: "users",
        timestamps: false,
    }
);
