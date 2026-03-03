

// every time there is a click this function runs
document.addEventListener('click', e =>{
    // returns a boolean depending on weather the target has the attribute data-dropdown-button
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    // If we are not clicking on the dropdown button (the thing that opens the dropdown in the first place) but are clicking somwhere else on the dropdown return/do nothing
    if (!isDropdownButton && e.target.closest('[data-dropdown]') !=null) return


    // creates the currentDropdown variable
    let currentDropdown
    // if isDropdownButton = true then set currentDropdown to the closest parent/grandparent then
    //  Toggles the active class
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }
    

    // close all dropdowns exept the dropdown that you clicked on. If you havn't clicked on a dropdown then it closes all dropdowns
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active')
    })

})




// Parallax


// // gets the paralax_titile id and stores it in a variable
// const parallax = document.getElementById("paralax_title");


// // everytime you scroll the function is run
// window.addEventListener("scroll" , function(){
//     // gets offset and times it by 0.7 so that it scrolls slower then the rest of the page. 
//     let offset = this.window.pageYOffset;
//     parallax.style.backgroundPositionY = offset * 0.7 + "px"})