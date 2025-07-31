require( '@@/js/includes/bootstrap-5/file-input.js' );

$( function()
{
    $( '#btnProfileEditCancel' ).on( 'click', function()
    {
        document.location   = $( this ).attr( 'data-url' );
    });
    
    $( '#profile_picture_form_profilePicture' ).on( 'change', function()
    {
        $( '#FormChangeAvatar' ).submit();
    });
});
