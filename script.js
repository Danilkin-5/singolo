window.addEventListener("load", function(event) {

    window.addEventListener('scroll', function(event) {
        if (window.scrollY >= 95) document.getElementsByTagName("header")[0].classList.add("fixed");
        else document.getElementsByTagName("header")[0].classList.remove("fixed");
    });

    document.getElementsByClassName('left-phone')[0].addEventListener("click", (event) => {
        document.getElementsByClassName('left-phone')[0].classList.toggle("left-darked");
    });

    document.getElementsByClassName('right-phone')[0].addEventListener("click", (event) => {
        document.getElementsByClassName('right-phone')[0].classList.toggle("right-darked");
    });

    var chevron = document.getElementsByClassName('chevron');
    Array.from(chevron).forEach(item => {
        item.addEventListener("click", (event) => {
            document.getElementsByClassName('second-image-slider')[0].classList.toggle("none");
            document.getElementsByClassName('left-phone')[0].classList.toggle("none");
            document.getElementsByClassName('right-phone')[0].classList.toggle("none");
        });
    });

    var btn = document.getElementsByClassName('btn');
    Array.from(btn).forEach(item => {
        item.addEventListener("click", (event) => {
            let imgNode = [];
            let container = document.getElementById("container-images");
            while (container.firstChild) {
                imgNode.push(container.firstChild.cloneNode(true));
                container.removeChild(container.firstChild);
            }
            imgNode.sort(function() {
                return Math.random() - 0.5;
            });
            imgNode.forEach((item) => {
                container.appendChild(item);
            });
        });
    });
    var arrImg = document.getElementsByClassName("img");
    Array.from(arrImg).forEach((item, index) => {
        item.addEventListener('click', function(event) {
            Array.from(arrImg).forEach((item) => {
                item.classList.remove("img-bordered");
            });
            item.classList.add("img-bordered");
        });
    });

   this.document.getElementById("submit").addEventListener("click",(event) => {
        event.preventDefault();
        var name = document.getElementById("name");
        var email = document.getElementById("email");
        var subject = document.getElementById("subject");
        var describe = document.getElementById("describe");

        
        var modalname = document.getElementById("modal-name");
        var modalemai = document.getElementById("modal-email");
        var modalsubject = document.getElementById("modal-subject");
        var modaldescribe = document.getElementById("modal-describe");

        if(!email.checkValidity())  alert("Email does not satisfy the main email rules.");
        if(!name.checkValidity()) alert("Name does not satisfy the main user name rules.");
        else if(email.checkValidity() && name.checkValidity()) {            
            modalname.innerHTML = "<p>"+name.value+"</p>";
            modalemai.innerHTML = "<p>"+email.value+"</p>";
            if(subject.value)
            modalsubject.innerHTML = "<p>"+subject.value+"</p>";
            if(describe.value)
            modaldescribe.innerHTML = "<p>"+describe.value+"</p>";
    
            this.document.getElementsByClassName("modal-view")[0].classList.remove("none");
            this.document.getElementsByClassName('shadow')[0].classList.remove("none");
        }              
    });

    this.document.getElementById("close-btn").addEventListener('click', (event) => {
        this.document.getElementsByClassName("modal-view")[0].classList.add("none");
        this.document.getElementsByClassName("shadow")[0].classList.add("none");

        document.getElementById('contact-form').reset();
    });

});



function clickLi(self) {
    let allLi = document.getElementsByClassName('menu-item');
    Array.from(allLi).forEach((element) => {
        element.classList.remove("active");
    });
    self.classList.add("active");
}
