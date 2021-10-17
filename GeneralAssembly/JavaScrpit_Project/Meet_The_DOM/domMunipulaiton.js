document.createElement(tagname); // to create a new DOM element. 

const paragraph = document.createElement('p');
paragraph.innerHTML = "You password did not match.";
paragraph.setAttribute("class", "registration-erro");

  
const h4Element = document.createElement("h4");
    
    h4Element.innerText = "Powered by JavaScript";
    
    document.body.appendChild(h4Element);
    