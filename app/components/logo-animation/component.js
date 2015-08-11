import Ember from 'ember';

class Circle {
    constructor(ctx, pos, rad, color) {
        this.ctx = ctx;
        this.pos = pos || null;
        this.radius = rad || null;
        this.color = color || null;
    }
    draw() {
        if(!this.active) {
            return;
        }
        this.ctx.beginPath();
        this.ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = 'rgba(156,217,249,'+ this.active+')';
        this.ctx.fill();
    }
}

function getDistance(p1, p2) {
    return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
}

function shiftPoint(p) {
    TweenLite.to(p, 1+1*Math.random(), {x:p.originX-50+Math.random()*100,
        y: p.originY-50+Math.random()*100, ease:Circ.easeInOut,
        onComplete: function() {
            shiftPoint(p);
        }});
}


export default Ember.Component.extend({
    logo: 'off',
    willInsertElement() {
        this.animateHeader = true;

        this.height = '800';
        this.width = window.innerWidth;
        this.target = {x: this.width/2, y: this.height/2};

        this.points = [];
        this.canvas = this.$('canvas')[0];
        this.canvas.height = this.height;
        this.canvas.width = this.width - 20;
        this.ctx = this.canvas.getContext('2d');
        this.set('logo', '');
    },
    didInsertElement() {
        this.initPoints();
        this.initAnimation();
        this.$(window).on('resize', this.onResize.bind(this));
        this.$(window).on('scroll', this.onScroll.bind(this));
    },
    willDestroyElement() {
        this.set('logo', 'off');
        this.$(window).off('resize');
        this.$(window).off('scroll');
    },
    onScroll() {
        if(document.body.scrollTop > this.height) {
            this.animateHeader = false;
        } else {
            this.animateHeader = true;
        }
    },
    onResize() {
        this.target.x = window.innerWidth/2;
        this.canvas.width = window.innerWidth - 20;
    },
    setPos() {
        this.target.x = window.innerWidth/2;
        this.target.y = 330;
    },
    drawLines(p) {
        if(!p.active) {
            return;
        }
        for(var i in p.closest) {
            this.ctx.beginPath();
            this.ctx.moveTo(p.x, p.y);
            this.ctx.lineTo(p.closest[i].x, p.closest[i].y);
            this.ctx.strokeStyle = 'rgba(156,217,249,'+ p.active+')';
            this.ctx.stroke();
        }
    },
    animate() {
        if(this.animateHeader) {
            this.ctx.clearRect(0,0,this.width,this.height);
            for(var i in this.points) {
                // detect points in range
                if(Math.abs(getDistance(this.target, this.points[i])) < 4000) {
                    this.points[i].active = 0.3;
                    this.points[i].circle.active = 0.6;
                } else if(Math.abs(getDistance(this.target, this.points[i])) < 20000) {
                    this.points[i].active = 0.1;
                    this.points[i].circle.active = 0.3;
                } else if(Math.abs(getDistance(this.target, this.points[i])) < 40000) {
                    this.points[i].active = 0.02;
                    this.points[i].circle.active = 0.1;
                } else {
                    this.points[i].active = 0;
                    this.points[i].circle.active = 0;
                }
                this.drawLines(this.points[i]);
                this.points[i].circle.draw();
            }
        }
        window.requestAnimationFrame(this.animate.bind(this));
    },
    initAnimation() {
        this.animate();
        for(var i in this.points) {
            shiftPoint(this.points[i]);
        }
    },
    initPoints() {
        this.points = [];  // Clear points
        for(var x = 0; x < this.width; x = x + this.width/20) {
            for(var y = 0; y < this.height; y = y + this.height/20) {
                var px = x + Math.random()*this.width/20;
                var py = y + Math.random()*this.height/20;
                var p = {x: px, originX: px, y: py, originY: py };
                this.points.push(p);
            }
        }
        // for each point find the 5 closest points
        for(var i = 0; i < this.points.length; i++) {
            var closest = [];
            var p1 = this.points[i];
            for(var j = 0; j < this.points.length; j++) {
                var p2 = this.points[j];
                if(p1 !== p2) {
                    var placed = false;
                    for(var k = 0; k < 5; k++) {
                        if(!placed) {
                            if(closest[k] === undefined) {
                                closest[k] = p2;
                                placed = true;
                            }
                        }
                    }
                    for(var l = 0; l < 5; l++) {
                        if(!placed) {
                            if(getDistance(p1, p2) < getDistance(p1, closest[l])) {
                                closest[l] = p2;
                                placed = true;
                            }
                        }
                    }
                }
            }
            p1.closest = closest;
        }

        // assign a circle to each point
        for(var m in this.points) {
            var c = new Circle(this.ctx, this.points[m], 2+Math.random()*2, 'rgba(255,255,255,0.3)');
            this.points[m].circle = c;
        }

    },
});
