var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");

        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }

            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }

        var sidemenu = document.getElementById("sidemenu");

        function openmenu(){
            sidemenu.style.right = "0";
        }
        function closemenu(){
            sidemenu.style.right = "-200px";
        }


const scriptURL = 'https://script.google.com/macros/s/AKfycbxKs7AcciCX9pr844Lp22DdqKsZvd0S1e433U0v1fSp2ih8fGYY-GIxgEIz7xkyZVPv/exec'
    const form = document.forms['submit-to-google-sheet']
            

function doGet(e) {
  return ContentService
    .createTextOutput("Google Sheets API is running")
    .setMimeType(ContentService.MimeType.TEXT);
}
form.addEventListener('submit', e => {
    e.preventDefault();

    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);

        if(data.result === "success"){
            alert("Message Sent Successfully!");
            form.reset();
        } else {
            alert(data.error);
        }
    })
    .catch(err => {
        console.error(err);
    });
});