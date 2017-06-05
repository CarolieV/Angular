(function() {
    function SongPlayer(Fixtures) {
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
 * @desc Buzz object audio file
 * @type {Object}
 */
       var currentBuzzObject = null;

             /**
* @function setSong
* @desc Stops currently playing song and loads new audio file as currentBuzzObject
* @param {Object} song
*/
          SongPlayer.SongPlayer.currentSong = null;

             var setSong = function(song) {
                if (currentBuzzObject) {
                  SongPlayer.stopSong();
                }

                currentBuzzObject = new buzz.sound(song.audioUrl, {
                  formats: ['mp3'],
                  preload: true
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
 };


          return SongPlayer;
     }

     angular
         .module('blocJams')
         .factory('SongPlayer', ['Fixtures', SongPlayer]);
 })();
