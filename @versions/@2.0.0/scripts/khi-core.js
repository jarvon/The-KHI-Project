$(document).ready(function(){
                
    $(document).on('click', '.brother-select', function(){

        //Toggle List
        $('.dropdown').toggleClass('dropdown-slideup');
        $(this).toggleClass('clicked');

    });

    $(document).on('click', 'div.dropdown li', function(){

        $(this).parent().parent().removeClass('dropdown-slideup');
        $('.brother-select').removeClass('clicked');

    });

    $(document).on('click', 'img.newFriendButton', function(){

        $(this).toggleClass('toggle');
        $(this).prev().toggleClass('toggle');
        $(this).prev().prev().toggleClass('toggle');
        $(this).parent().next().toggleClass('toggle');
        $(this).parent().next().next().toggleClass('toggle');

    });

});