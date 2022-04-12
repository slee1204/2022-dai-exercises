//MUST HAVE - CREATE A TEMPLATE TAG
var template_scrollcont = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_scrollcont.innerHTML = `
<style>
    #cont {
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        overflow-y:auto;
        overflow-x;none;
    }
</style>
<div id='cont'>
    <scroll-text id='scroll1'></scroll-text>
    <scroll-text></scroll-text>
    <scroll-text></scroll-text>
    <scroll-text></scroll-text>
    <scroll-text></scroll-text>
    <scroll-text></scroll-text>
</div>



`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class ScrollCont extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_scrollcont.content.cloneNode(true)); //use the template to make a clone
        //style the main container!
        
        //e -> event oject from your browser (mouse/keyboard/hardware events..)
        //e.target -> elements / <tag> the event is happening on
        //e.target.scrollTop -> a data about how farthe scroll bar is, if scroll is available for the element
        this.shadowRoot.querySelector('#cont').onscroll =(e)=>this.HandleContScroll(e.target.scrollTop);
}

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    HandleContScroll(scrollNum=0){ //var scrollNum = e.target.scrollTop
       console.log("scroll",scrollNum);
       if(scrollNum > 200){
           //first scroll-text to slide right;
           this.shadowRoot.querySelector('#scroll1').SlideRight();
       }
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("scroll-cont", ScrollCont)