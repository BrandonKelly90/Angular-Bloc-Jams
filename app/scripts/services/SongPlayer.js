(function() {
    function SongPlayer() {
        var SongPlayer = {};

        /** @desc currentBuzzObject music file
        * @type {Object}
        var currentSong = null;

        /**
        * @desc Buzz object audio file
        * @type {Object}
        */
        var currentBuzzObject = null;

        /**
         * @function setSong
         * @desc Stops currently playing song and loads new audio file as currentBuzzObject.
         * @param {Object} song
         */
        var setSong = function(song) {
            if (currentBuzzObject) {
                currentBuzzObject.stop();
                currentSong.playing = null;
            }

            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });

            currentSong = song;
        };

        /**
         * @function playSong
         * @desc Plays the currentBuzzObject and sets the song object property to true.
         * @param {Object} song
         */
        var playSong = function(song) {
                currentBuzzObject.play();
                song.playing = true;
        };

        /**
        * @function SongPlayer.play
        * @desc Takes a song as a parameter and tests to see whether or not the currentBuzzObject
        is the sames as the current song. If they are different a the new song will load and play.
        It will also play if they are the same but the song is currently paused.
        * @param {Object}
        *
        */
        SongPlayer.play = function(song) {
            if (currentSong !== song) {
                setSong(song);
                playSong(song);
            }
            else if (currentSong === song) {
                if (currentBuzzObject.isPaused()) {
                    playSong(song);
                }
            }
        };

        /**
        * @function SongPlayer.pause
        * @desc Pauses the currentBuzzObject and sets the song object property to false.
        * @param {Object}
        */
        SongPlayer.pause = function(song) {
            currentBuzzObject.pause();
            song.playing = false;
        };

        return SongPlayer;
    }

    angular
        .module('blocJams')
        .factory('SongPlayer', SongPlayer);
})();
