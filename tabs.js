function openPage(pageName, elmnt) {
			// Hide all elements with class="tabcontent" by default */
			var i, tabcontent, tablinks;
			tabcontent = document.getElementsByClassName("tabcontent");
			for (i = 0; i < tabcontent.length; i++) {
				tabcontent[i].style.display = "none";
			}
			  
			 // Remove the background color of all tablinks/buttons
			tablinks = document.getElementsByClassName("menu-item");
			for (i = 0; i < tablinks.length; i++) {
				tablinks[i].style.color = "";
				tablinks[i].style.fontSize= "";
				tablinks[i].style.textDecoration= "";
				tablinks[i].style.borderBottom="";
				
			}
			
			// Show the specific tab content
			document.getElementById(pageName).style.display = "flex";
			
			// Add the specific color to the button used to open the tab content
			elmnt.style.color = '#287D89';
			//elmnt.style.textDecoration= "underline";
			elmnt.style.borderBottom= "3px solid #287D89";
			elmnt.style.fontSize = "30px";
		}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();