(function() {
<<<<<<< HEAD
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
=======
     function SongPlayer() {
          var SongPlayer = {};
          var currentSong = null;
>>>>>>> 7fccde712c8a25b84c7a4f228e0d1998dce66791
          /**
 * @desc Buzz object audio file
 * @type {Object}
 */
       var currentBuzzObject = null;

<<<<<<< HEAD
=======
       SongPlayer.play = function(song) {
           if (currentSong !== song) {
>>>>>>> 7fccde712c8a25b84c7a4f228e0d1998dce66791
             /**
* @function setSong
* @desc Stops currently playing song and loads new audio file as currentBuzzObject
* @param {Object} song
*/
<<<<<<< HEAD
          SongPlayer.SongPlayer.currentSong = null;

             var setSong = function(song) {
                if (currentBuzzObject) {
                  SongPlayer.stopSong();
=======
             var setSong = function(song) {
                if (currentBuzzObject) {
                  currentBuzzObject.stop();
                  currentSong.playing = null;
>>>>>>> 7fccde712c8a25b84c7a4f228e0d1998dce66791
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

<<<<<<< HEAD
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
=======
>>>>>>> 7fccde712c8a25b84c7a4f228e0d1998dce66791
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
<<<<<<< HEAD
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

=======
              currentSong.playing = true;
            }
          }
    };
>>>>>>> 7fccde712c8a25b84c7a4f228e0d1998dce66791

          return SongPlayer;
     }

     angular
         .module('blocJams')
<<<<<<< HEAD
         .factory('SongPlayer', ['Fixtures', SongPlayer]);
=======
         .factory('SongPlayer', SongPlayer);
>>>>>>> 7fccde712c8a25b84c7a4f228e0d1998dce66791
 })();
