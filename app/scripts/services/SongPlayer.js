(function() {
function SongPlayer($rootScope, Fixtures) {
      var SongPlayer = {};

      var currentAlbum = Fixtures.getAlbum();
      /**
     * @function getSongIndex
     * @desc finds the index of the current song
     * @param {Object} song
     */

      var getSongIndex = function(song) {
     return currentAlbum.songs.indexOf(song);
 };
          SongPlayer.SongPlayer.currentSong = null;
          /**
 * @desc Current playback time (in seconds) of currently playing song
 * @type {Number}
 */
 SongPlayer.currentTime = null;

     function SongPlayer() {
          var SongPlayer = {};
          var currentSong = null;
          /**
 * @desc Buzz object audio file
 * @type {Object}
 */
       var currentBuzzObject = null;

       SongPlayer.play = function(song) {
           if (currentSong !== song) {
             /**
* @function setSong
* @desc Stops currently playing song and loads new audio file as currentBuzzObject
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
                currentBuzzObject.bind('timeupdate', function() {
                         $rootScope.$apply(function() {
                             SongPlayer.currentTime = currentBuzzObject.getTime();
                         });
                     });
                  setSong(song);
};

               currentBuzzObject.play();
               song.playing = true;
           }
     };

     /**
  * @function play
  * @desc Plays the current song
  * @param {Object} song
*/

     SongPlayer.play = function(song) {
     song = song || SongPlayer.currentSong;
     if (SongPlayer.currentSong !== song) {
         setSong(song);
         playSong(song);
     } else if (SongPlayer.currentSong === song) {
         if (currentBuzzObject.isPaused()) {
             playSong(song);
         }
    }
 };
 /**
 * @function pause
 * @desc Pause current song
 * @param {Object} song
 */
  SongPlayer.pause = function(song) {
     currentBuzzObject.pause();
     song.playing = false;
     /**
     * @function playSong
     * @desc Plays current song
     * @param {Object} song
     */
          var playSong = function(song) {
            if (currentBuzzObject) {
              currentBuzzObject.play();

              SongPlayer.currentSong.playing = true;
            }
          }
    };
    /**
    * @function previousSong
    * @desc gets the song index of the previously played song
    * @param {Object} song
    */
    SongPlayer.previous = function() {
     var currentSongIndex = getSongIndex(SongPlayer.currentSong);
     currentSongIndex--;
     if (currentSongIndex < 0) {
       SongPlayer.stopSong();
       } else {
           var song = currentAlbum.songs[currentSongIndex];
           setSong(song);
           playSong(song);
       }
       SongPlayer.next = function() {
         var currentSongIndex = getSongIndex(SongPlayer.currentSong);
         currentSongIndex++;
         if (currentSong < 0) {
           SongPlayer.stopSong();
         } else {
             var song = currentAlbum.songs[currentSongIndex];
             setSong(song);
             playSong(song);
         }

       }
       SongPlayer.stopSong = function () {
         currentBuzzObject.stop();
         SongPlayer.currentSong.playing = null;
       }
       /**
* @function setCurrentTime
* @desc Set current time (in seconds) of currently playing song
* @param {Number} time
*/
SongPlayer.setCurrentTime = function(time) {
    if (currentBuzzObject) {
        currentBuzzObject.setTime(time);
    }
};
 };


          return SongPlayer;
     }
     /**
      * @function setCurrentTime
      * @desc Set current time (in seconds) of currently playing song
      * @param {Number} time
      */
      SongPlayer.setCurrentTime = function(time) {
          if (currentBuzzObject) {
              currentBuzzObject.setTime(time);
          }
      };
      /**
       * @function setVolume
       * @desc set and change the current volume of the song
       * @param {Object} song
       */
       SongPlayer.volume = sound.getVolume();

       SongPlayer.setVolume = function(song) {
          mySound.setVolume(90);
       }
     angular
         .module('blocJams')
        .factory('SongPlayer', ['$rootScope', 'Fixtures', SongPlayer]);

 })();
