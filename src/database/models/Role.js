module.exports = (sequelize, dataTypes) => {
    
    let alias = 'Role';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        
        role: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
    };

    let config = {
        timestamps: false,
        tableName: 'roles'
    }


    const Role = sequelize.define(alias, cols, config); 

    Role.associate = function (models) {
        Role.hasMany(models.User, {
            as: "users",
            foreignKey: "id_role"
        })
    }



    return Role;
};