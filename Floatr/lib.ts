interface FloatrSettings {
    width: any;
    height: any;
    count: number;
    gravity: number;
    speed: number;
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
    private frametime: number = 0;
    private lastTimestamp: number = 0;

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

    public updateSettings(settings: FloatrSettings) {
        this.settings = settings;
        this.spawned = false;
        console.table(this.settings);
    }

    private rand(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); 
    }

    private __animationLoop(timestamp: number = 0) {
        this.frametime = (this.lastTimestamp == 0) ? 0 : (timestamp - this.lastTimestamp);
        this.floatrCanvasCtx.clearRect(0, 0, this.width, this.height);

        if(!this.spawned) {
            for(let i = 0; i < this.settings.count; i++) {
                this.__singleParticle = {
                    'x' : this.rand(0, this.width),
                    'y' :  this.rand(-1 * (this.height * .6), this.height),
                    'variance' : this.rand(50, 100),
                    'size' : (Math.random() * 100) % 1 + 1
                }
                this.particles[i] = this.__singleParticle;
            }
            //console.table(this.particles);
            this.__g =  this.settings.gravity;
            this.spawned = true;
        }

        for(let i = 0; i < this.settings.count; i++)
        {
            this.particles[i].y += (1/2) * this.__g * Math.sin(this.__t) * this.particles[i].variance;
            this.particles[i].x += (1/2) * this.__g * Math.cos(this.__t * 2 * this.particles[i].variance / 100) * this.particles[i].variance;

            var circle = new Path2D();
            circle.arc(this.particles[i].x, this.particles[i].y, this.particles[i].size, 0, 2 * Math.PI);
            this.floatrCanvasCtx.fillStyle = 'rgba(255, 255, 255, ' + this.particles[i].variance / 100 * 3/4 + ')';
            this.floatrCanvasCtx.fill(circle);
        }

        this.__t += this.settings.speed * (this.frametime / 100);
        this.lastTimestamp = timestamp;
        window.requestAnimationFrame((timestamp) => this.__animationLoop(timestamp));
    }

}