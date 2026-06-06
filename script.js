// Selecting the button ID from index.html
const themeSwitch = document.getElementById("theme-switch");
const themeTitle = document.getElementById("theme-Title");

// This function sets up the toggle
function toggleTheme() {
    document.body.classList.toggle("sunset-theme");
    
    if (document.body.classList.contains("sunset-theme")) {
        themeSwitch.textContent = "Sunrise";
        themeTitle.textContent = "Sunset to Sunrise";
    }
    else {
        themeSwitch.textContent = "Sunset";
        themeTitle.textContent = "Sunrise to Sunset";
        }
    }

//This event triggers the toggle / function
themeSwitch.addEventListener("click", toggleTheme);

