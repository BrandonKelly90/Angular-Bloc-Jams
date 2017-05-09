(function(){
    function AlbumCtrl() {
        this.albumData = angular.copy(albumPicasso);
        this.albumData.releaseInfo = this.albumData.year + ' ' + this.albumData.label;
        }

    angular
        .module('blocJams')
        .controller('AlbumCtrl', AlbumCtrl);
})();
