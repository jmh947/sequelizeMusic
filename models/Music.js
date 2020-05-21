module.exports = function(sequelize, DataTypes) {
    var Music = sequelize.define("Music", {

        songTitle: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3, 30]
            }
        },

        addedPlaylist: {
            type: DataTypes.BOOLEAN,
            default: false
           
        }
    });


    return Music;
}

