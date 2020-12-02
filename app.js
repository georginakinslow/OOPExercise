//1a. 
const elf = {
    title: `Elf`,
    main: `Buddy`,
}

//1b.
 quote: function (){
    return `The best way to spread Christmas cheer is singing loud for all to hear`;
},

//1c.
info: function (){
    return `${this.title} is about ${this.title}`;
},


//2a.
const muppetXmas = {
    title: `The Muppet Christmas Carol`,
    main: `Ebenezer Scrooge`,
}

//2b. 
quote: function (){
    return `Wherever you find love it feels like Christmas`;
}

//2c. 
const muppetXmas = {
    title: `The Muppet Christmas Carol`,
    main: `Ebenezer Scrooge`,
}
info: function (){
    return `Hello, I am ${this.main} and I am in the movie ${this.title}`;
};
    
//3a. 
function XmasMovie (title, main){
    this.XmasMovie = title;
    this.Xmasmovie = main;
}

//3b. 
XmasMovie.prototype.info = function (){
    return `${this.title} is about ${this.main}`;
}

//3c. 
const XmasMovie = new XmasMovie(elf1);
console.log(XmasMovie);
console.log(XmasMovie.title ());
console.log(XmasMovie.main ());

//3d. 
const XmasMovie = new XmasMovie(muppetXmas1);
console.log(XmasMovie);
console.log(XmasMovie.title ());
console.log(XmasMovie.main ());

//4a.
    function CM(title, main){
        this.title = title;
        this.main = main;
    }

//4b.
const CM = new CM(`${this.title} is about ${this.main}`;
console.log (CM);
console.log(CM.title ());
console.log(CM.main ());


//4c. 
const CM = new CM (Elf2);
console.log(main);
console.log(title);

//4d.
const CM = new CM (muppetXmas2);
console.log(CM);
console.log(CM.title ());
console.log(CM.main ());

//4e. 
const loveXmas = staticMethod(){
    return `I Love Christmas!`
}

//4f.
CM = (loveXmas){
    return `I Love Christmas!`;
}
console.log(`I Love Christmas`);

//5a.
 CMCast extends Class CM


//5b.
CMCast extends CM{
    constructor(title,main,cast)
}

//5c. 
CMCast extends CM{
    constructor(title,main,cast)
}
super(title,main);
this.CM = CMCast;

//5d.
const CM = new CM(`Elf3`);
constructor(title,main,cast);
this.title = `Elf3`;
this.main = Buddy;
this.cast = buddy: `Will Ferrell`, walter: `James Caan`, jovie: `Zooey Deschanel`, papaElf: `Bob Newhart`;

//5e.
const CM = new CM(muppetXmas3);
constructor(title,cast);
this.title = muppetXmas3;
this.cast = scrooge: `Michael Caine`, charlesDickens: `The Great Gonzo`, bobCrachit: `Kermit The Frog`;

//BONUS
//6a.
Create static new CMCast (){
return `kevin: `Macaulay Culkin`, harry: `Joe Pesci`, marv: `Daniel Stern`;
};

//6b.
Class CM extends `Home Alone`{
    constructor (title, main, cast);
    super (title);
    this.name = `Home Alone`;
    super (main);
    this.main = `Kevin McCallister`;
    super (cast);
    this.cast = `kevin: `Macaulay Culkin`, harry: `Joe Pesci`, marv: `Daniel Stern`;
}
    homeAlone(){
        return `homeAlone`;
    }
    const CM = homeAlone
