// Hide specific elements on notebook load
$(document).ready(function() {
    // Hide the header and toolbar
    $('.header').hide();
    $('.toolbar').hide();
    
    // Hide the sidebar
    $('.jp-SideBar').hide();
    
    // Hide the notebook list
    $('.notebook_list').hide();
    
    // Hide the cell toolbar
    $('.cell .input_prompt').hide();
    $('.cell .output_prompt').hide();
    
    // Hide the footer
    $('.footer').hide();
});

