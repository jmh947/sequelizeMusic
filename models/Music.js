module.exports = function(sequelize, DataTypes) {
    var Playlist = sequelize.define("Playlist", {

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


    return Playlist;
}

