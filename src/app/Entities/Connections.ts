export class Connections {
    id1:string;
    id2:string;
    canvas: HTMLCanvasElement;
    constructor(id1:string){
        this.id1 = id1;
    }
    contains(id:string){
        return (this.id1 == id || this.id2 == id);
    }
    setSecondId(id:string){
        this.id2 = id;
    }
    setCanvas(canvas:HTMLCanvasElement){
        this.canvas = canvas;
    }
    updateCanvas(){
        let element1 = document.getElementById(this.id1);
        const element2 = document.getElementById(this.id2);
        const rect1 = element1.getBoundingClientRect();
        const rect2 = element2.getBoundingClientRect();
        const startX = rect1.left + rect1.width / 2;
        const startY = rect1.top + rect1.height / 2;
        const endX = rect2.left + rect2.width / 2;
        const endY = rect2.top + rect2.height / 2;
    

        // Get the context of the canvas element.
        const ctx = this.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.fillStyle = '#000';
        ctx.strokeStyle = '#eaf2ff';
        ctx.lineWidth = 7;
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();

    }
}