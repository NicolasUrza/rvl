export class Connections {
    div1: string;
    div2: string;
    constructor(div1: string, div2: string) {
        this.div1 = div1;
        this.div2 = div2;
    }
    contains(name: string){
        return (this.div1==name || this.div2==name)
            
    }

}