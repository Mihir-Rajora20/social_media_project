const sequelize= require('sequelize')
const posts = require('../routes/posts')

const db= new sequelize(
    {
        dialect: 'mysql',
        database: 'cbsocialmediadb',
        username: 'cbsocialuser',
        password: 'cbsocialpass'
    }
)

const COL_ID_DEF= {
    type: sequelize.DataTypes.INTEGER, 
    autoIncrement: true, 
    primaryKey: true
}
const COL_USERNAME_DEF= {
    type: sequelize.DataTypes.STRING(30), 
    unique: true, 
    allowNull: false
}
const COL_TITLE_DEF= {
    type: sequelize.DataTypes.STRING(140), 
    allowNull: false
}

// defining the users database
const Users= db.define('user', 
{
    id: COL_ID_DEF, 
    username: COL_USERNAME_DEF
})

// defining the posts database

const Posts= db.define('post', 
{
    id: COL_ID_DEF, 
    title: COL_TITLE_DEF, 
    body: 
    {
        type: sequelize.DataTypes.TEXT, 
        allowNull: false
    }
})

const Comments= db.define('comment',{
    ID: COL_ID_DEF, 
    title: COL_TITLE_DEF, 
    body: {
        type: sequelize.DataTypes.TEXT('tiny')
    }
})

Users.hasMany(Posts)
Posts.belongsTo(Users)

Users.hasMany(Comments)
Comments.belongsTo(Users)

Posts.hasMany(Comments)
Comments.belongsTo(Posts)


module.exports= 
{
    db, Users, Posts, Comments
}