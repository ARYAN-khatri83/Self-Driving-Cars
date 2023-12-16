class Controls{
    constructor(){
        this.fowrard = false;
        this.left=false;
        this.right=false;
        this.reverse=false;

        this.#addKeyboardListners();
    }

    #addKeyboardListners(){
        document.onkeydown=(event)=>{
            switch(event.key){
                case "ArrowLeft":
                    this.left=true;
                    break;
                case "ArrowRight":
                    this.right=true;
                    break;
                case "ArrowUp":
                    this.fowrard=true;
                    break;
                case "ArrowDown":
                    this.reverse=true;
                    break;        
            }
        }
        document.onkeyup=(event)=>{
            switch(event.key){
                case "ArrowLeft":
                    this.left=false;
                    break;
                case "ArrowRight":
                    this.right=false;
                    break;
                case "ArrowUp":
                    this.fowrard=false;
                    break;
                case "ArrowDown":
                    this.reverse=false;
                    break;        
            }
        }
    }
}