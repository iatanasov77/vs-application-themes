$( function()
{
    var hash = location.hash.replace( /^#/, '' );
    if ( hash ) {
        var someVarName = $( '.nav-pills a[href="#' + hash + '"]' );
        if ( someVarName.length ) {
            var tab         = new bootstrap.Tab( someVarName );
            tab.show();
        }
    }
});
