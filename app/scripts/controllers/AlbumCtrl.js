(function() {
  function AlbumCtrl(Fixtures, SongPlayer) {
         this.albumData = Fixtures.getAlbum();
         this.songPlayer = SongPlayer;
     }
  function getCollection(numberofAlbums) {
    this.albumData = numberofAlbums.push(albumPicasso[i]);
  }
     }

     angular
         .module('blocJams')
         .controller('AlbumCtrl', AlbumCtrl);
         .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);

 })();
