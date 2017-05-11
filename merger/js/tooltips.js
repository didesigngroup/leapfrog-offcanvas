 
 // Tooltips Script
$(document).ready(function(){
    $('[data-toggle="popover"]').popover({
        html : true,
        title : '<a href="#" class="close" data-dismiss="alert"><span class="icon icon-sm-close icon-sm-close-dims"></span></a>'
    });
    $(document).on("click", ".popover .close" , function(){
        $(this).parents(".popover").popover('hide');
    });
});