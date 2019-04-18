/*
 Select To Select2 Plugin Main.
 */

(function($){

    // For Page Load
    replaceAllSelect2();

    // For Ajax
    $(document).ajaxComplete(function(event){
        replaceAllSelect2();
    });

    // For GET,POST Request
    $(window).load(function() {
        replaceAllSelect2();
    });

    // for all elements
    // $(document).click(function(event){
    //     replaceAllSelect2();
    // });

    // for all elements
    $(document).change(function(event){
        replaceAllSelect2();
    });


}(jQuery));

function replaceAllSelect2(){

    var elements = document.getElementsByTagName("select");

    for (i = 0; i < elements.length; i++) {

        if (elements[i].id == 'project_parent_id' 
        || elements[i].id == 'issue_project_id'
        || elements[i].id == 'time_entry_project_id') {
            // For All Pages
            $("#" + elements[i].id).select2({
                width:"resolve",
                placeholder: "",
                allowClear: true
            });             
        }
        
    }

}
