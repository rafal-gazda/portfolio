/*-----Menu function------*/
function menu()
{
    var navi = document.getElementsByClassName("navigation");
    var navjs = document.getElementsByClassName("navjs");
    var list = document.getElementsByClassName("list");
    console.log(list);
    
    var buttons = document.getElementsByClassName("nav__button__span");
    
    if (navjs.length > 0) 
    { 
        uncross(buttons);
        closeNav(navi);
    } 
    
    else 
    {
        cross(buttons);
        openNav(navi);
        list[0].style.display = "block";
    }
    
}

function cross(buttons)
{
    buttons[0].style.margin = "20px 0px 0px 0px";
    buttons[1].style.margin = "0px";
    buttons[2].style.margin = "0px";
    buttons[0].style.transform = "rotate(40deg)";   
    buttons[2].style.transform = "rotate(140deg)";
    buttons[1].style.display = "none";
    buttons[0].style.backgroundColor = "#a5a5a5";
    buttons[2].style.backgroundColor = "#a5a5a5";
}

function uncross(buttons)
{
    buttons[1].style.display = "block";
    buttons[0].style.transform = "rotate(0deg)";   
    buttons[2].style.transform = "rotate(180deg)";
    buttons[0].style.width = "100%";
    buttons[2].style.width = "100%";
    
    for(var i=0;i<=2;i++)
    {
        buttons[i].style.margin = "8.5px 0px 8.5px 0px";
        buttons[i].style.backgroundColor = "black";
    }
}

function openNav(navi)
{
    navi[0].classList.add("navjs");
}

function closeNav(navi)
{
    navi[0].classList.remove("navjs");
}

var list = document.querySelector('ul');
var check = document.getElementsByClassName("checked");
list.addEventListener('click', function(ev) 
{
  if (ev.target.tagName === 'A') 
  {
    if(check.length>0)
    {
        
        for(var i = 0; i <= check.length;i++)
        {
            if(check[i].classList.contains("checked"))
            {
                check[i].classList.remove("checked");
            }
        }
    }
    ev.target.classList.add('checked');
    check[0].style.width = "0%";
  }
}, false);

/*-----Typing function------*/

var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('inner__paragraph');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".inner__paragraph > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };

/*-----Slider-----*/

function thisDiv(n)
{
    slideDiv(n);
}

function slideDiv(n)
{
    var slideIndex = n;
    var slide = document.getElementsByClassName("hide");
    var slideBadgers = document.getElementsByClassName("slide__badger");
    if(slideIndex==1)
    {
        slide[0].style.left = "0%";
        slideBadgers[0].style.backgroundColor = "black";
        slideBadgers[1].style.backgroundColor = "gray";
    }
    
    if(slideIndex==2)
    {
        slide[0].style.left = "-100%";
        slideBadgers[0].style.backgroundColor = "gray";
        slideBadgers[1].style.backgroundColor = "black";
    }
}

/*-----Carousel-----*/

var slideIndex = 0;
var t; 
slideTime();


function choose(n)
{
    slide(n);
    clearTimeout(t);
    t = setTimeout(function(){slideTime()},4000);
}

function slideTime()
{
    slideIndex++;
    slide(slideIndex);
    t = setTimeout(function(){slideTime()},4000);
}

function slide(n)
{
    slideIndex=n;
    var slideText = document.getElementsByClassName("review__carousel");
    var slideBadger = document.getElementsByClassName("carousel__badger");
    if(slideIndex == 1 || slideIndex>3)
    {
        slideIndex = 1;
        slideText[0].style.left = "50%";
        for(var i = 0; i<=2;i++)
        {
            slideBadger[i].style.backgroundColor = "gray";          
        }
        slideBadger[slideIndex-1].style.backgroundColor = "white";
    }
    
    if(slideIndex == 2)
    {
        slideText[0].style.left = "-50%";
        for(var i = 0; i<=2;i++)
        {
          slideBadger[i].style.backgroundColor = "gray";          
        }
        slideBadger[slideIndex-1].style.backgroundColor = "white";
    }
    
    if(slideIndex == 3)
    {
        slideText[0].style.left = "-150%";
        for(var i = 0; i<=2;i++)
        {
          slideBadger[i].style.backgroundColor = "gray";          
        }
        slideBadger[slideIndex-1].style.backgroundColor = "white";
    }
}

/*-----Contact form-----*/

var inputs = document.getElementsByClassName("form-control");

inputs[0].addEventListener("click",border);
inputs[1].addEventListener("click",border);
inputs[2].addEventListener("click",border);

function border()
{
    var spans = document.getElementsByClassName("border-focus");
    var labels = document.getElementsByClassName("form-label");
    for(var i=0;i<inputs.length;i++)
    {
        if(inputs[i]===document.activeElement)
        {
            spans[i].style.width = "100%";
            labels[i].style.color = "black";
            labels[i].style.top = "10px";
        }
        
        else
        {
            spans[i].style.width = "0%";
            labels[i].style.top = "40px";
            labels[i].style.color = "white";
        }         
    }
}

