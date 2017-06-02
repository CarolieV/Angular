(function() {
  function AlbumCtrl(Fixtures) {
    this.albumData = Fixtures.getAlbum();
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
