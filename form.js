class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.title = createElement('h2');
        this.greeting = createElement('h2');
      
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.title.hide();
        this.greeting.hide();

    }

    display(){
        this.title.html("Ice Chips");
        this.title.position(150,150);

        this.button.position(150,300);
        this.input.position(100,255);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            var name = this.input.value();

            this.greeting.html("Hello "+name+"!!!");
            this.greeting.position(150,300);
            this.button1 = createButton('StartGame');
            this.button1.position(150,400);
            this.button1.mousePressed(()=>{
                flag=1;
                this.button1.hide();
                form.hide();
            })
        })
       
    }
}