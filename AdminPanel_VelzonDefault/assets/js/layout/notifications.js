
$( function()
{
    var removeIds  = [];
    
    // Remove All Event Listeners on Remove Notifications Modal and Add Other
    var oldRemoveItem = document.getElementById( 'removeNotificationModal' );
    var newRemoveItem = oldRemoveItem.cloneNode( true );
    oldRemoveItem.parentNode.replaceChild( newRemoveItem, oldRemoveItem );
    
    newRemoveItem.addEventListener( 'show.bs.modal', function ( event ) {
        document.getElementById( 'delete-notification' ).addEventListener( 'click', function () {
            Array.from( document.querySelectorAll( ".notification-item" ) ).forEach( function ( element ) {
                if ( element.classList.contains( "active" ) ) {
                    removeIds.push( element.dataset.notificationId );
                }
            });
            
            alert( JSON.stringify( removeIds ) );
            document.getElementById( "NotificationModalbtn-close" ).click();
        });
    });
});
