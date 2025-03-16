// bin/console fos:js-routing:dump --format=json --target=public/shared_assets/js/fos_js_routes_admin.json
import { VsPath } from '@/js/includes/fos_js_routes.js';

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
            
            //alert( JSON.stringify( removeIds ) );
            $.ajax({
                type: "POST",
                url: VsPath( 'vs_users_notifications_remove' ),
                dataType: 'json',
                data: JSON.stringify( removeIds ),
                processData: false,
                contentType: false,
                cache: false,
                success: function ( data )
                {
                    //alert( document.location );
                    document.location   = document.location;
                },
                error: function( XMLHttpRequest, textStatus, errorThrown )
                {
                    alert( "SYSTEM ERROR!!!" );
                }
            });
            
        });
    });
});
