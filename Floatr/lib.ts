interface FloatrSettings {
    width: any;
    height: any;
    count: number;
}

interface FloatrParticle {
    x: number;
    y: number;
    variance: number;
    size: number;
}

interface FloatrAllParticles extends Array<FloatrParticle> {}

class Floatr {

    private __t: number; //Global Timer
    private __g: number; //Gravity

    private container: HTMLElement;
    private settings: FloatrSettings;
    private width: any;
    private height: any;
    private spawned: boolean = false;

    private __singleParticle: FloatrParticle;
    private particles: FloatrAllParticles;

    public floatrCanvas: HTMLCanvasElement;
    public floatrCanvasCtx: CanvasRenderingContext2D;

    constructor(container: string, settings: FloatrSettings) {
        
        this.showBoot();

        this.container = document.getElementById(container);
        this.settings = settings;
        this.width = (this.settings.width == 'inherit') ? this.container.offsetWidth : this.settings.width;
        this.height = (this.settings.height == 'inherit') ? this.container.offsetHeight : this.settings.height;
        this.__t = 0;
        this.particles = [];
        this.createCanvasElement();

    }

    private logger(message: string) {
        console.log('%c<floatr>%c ' + message + '', 'color:DarkBlue;background-color:#fff;font-weight:bold;', 'color:#fff;');
    }

    private showBoot() {
        this.logger('initializing...');
    }

    private createCanvasElement() {
        this.floatrCanvas = document.createElement('canvas');
        this.floatrCanvas.id = 'floatrCanvas';
        this.floatrCanvas.width = this.width;
        this.floatrCanvas.height = this.height;
        this.floatrCanvasCtx = this.floatrCanvas.getContext('2d');
        this.floatrCanvasCtx.fillStyle = 'white';
        this.container.appendChild(this.floatrCanvas);
        this.logger('canvas element created');
    }

    public Render() { //begin loop
        this.__animationLoop();
    }

    private __animationLoop(timestamp: Number = 0) {
        this.__t++;

        if(!this.spawned) {
            for(let i = 0; i < this.settings.count; i++) {
                this.__singleParticle = {
                    'x' : Math.floor(Math.random() * (this.width + 1)),
                    'y' :  Math.floor(Math.random() * (this.height + 500)) - 500,
                    'variance' : Math.floor(Math.random() * 5) + 1,
                    'size' : parseFloat(Math.random().toPrecision(2)) + 1
                }
                this.particles[i] = this.__singleParticle;
            }
            this.__g =  0.05;
            this.spawned = true;
        }
        for(let i = 0; i < this.settings.count; i++)
        {
            //let calcT = Math.sin(this.__t * this.particles[i].variance) * 10;
            //this.particles[i].y += (1/2) * this.__g * calcT * this.particles[i].variance;

            var circle = new Path2D();
            circle.arc(this.particles[i].x, this.particles[i].y, 20, 0, 2 * Math.PI);
            this.floatrCanvasCtx.fillStyle = 'rgba(255, 255, 255, 0.5)';
            this.floatrCanvasCtx.fill(circle);

        }

        window.requestAnimationFrame((timestamp) => this.__animationLoop(timestamp));
    }

}