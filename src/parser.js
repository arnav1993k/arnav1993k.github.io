function createLogoDiv(src){
    var wrapper = document.createElement("DIV");
    wrapper.setAttribute("class","w3-col m3");
    var img_div = document.createElement("DIV");
    img_div.setAttribute("class","pv-entity__logo company-logo");
    var img_holder = document.createElement("img");
    img_holder.setAttribute("class","lazy-image pv-entity__logo-img pv-entity__logo-img EntityPhoto-square-5 logo loaded");
    img_holder.setAttribute("src",src);
    img_div.appendChild(img_holder);
    wrapper.appendChild(img_div);
    return wrapper;
}
function createTextDiv(name, title, period, desc){
    var wrapper = document.createElement("DIV");
    wrapper.setAttribute("class","w3-col m9");
    wrapper.setAttribute("style","text-align: left");
    var heading = "<span> <strong>"+title+"</strong> &emsp;&emsp;<i>"+period+"</i></span><br>&bull;&emsp;"+desc+"<br><br>";
    wrapper.innerHTML=heading;
    return wrapper;
}
function createEmploymentDiv(element){
    var name = element.organization;
    var title = element.title;
    var period = element.period;
    var desc = element.description.join("<br>&bull;&emsp;");
    var child = document.createElement("DIV");
    child.setAttribute("class","w3-row-padding w3-center text-row");
    logo = createLogoDiv(element.logo);
    text = createTextDiv(name,title,period,desc);
    child.appendChild(logo);
    child.appendChild(text);
    return child;
}
function parseElement(element, elementType, parentId){
    if (elementType==="employment"){
        child = createEmploymentDiv(element);
    }
    else{
        if(elementType=="projects"){
            child = createProjectDiv(element);
        }
    }
    parent = document.getElementById(parentId);
    parent.appendChild(child);
}
{/* <div class="w3-row-padding w3-center">
    <div class="w3-col m3">
        <div class="pv-entity__logo company-logo">
            <img class="lazy-image pv-entity__logo-img pv-entity__logo-img EntityPhoto-square-5 loaded" alt="Texas A&amp;M" src="https://media-exp2.licdn.com/mpr/mpr/shrinknp_100_100/AAEAAQAAAAAAAAumAAAAJDFjMTEwZjIzLWJlZmItNDFmOS1hMzkwLWQzM2QwNWYxYTNiNw.png">
        </div>
    </div>
    <div class="w3-col m9" style="text-align: left">
        <span> <strong>Graduate Student</strong> - <i>Aug 2017 - Present</i></span>
        <p>Department of Electrical and Computer Engineering with specialization in Information Sciences.</p>
        <p>CGPA: 3.7</p>
    </div>
  </div> */}