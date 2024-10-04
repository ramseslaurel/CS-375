
let gl = undefined;

function init() {
    let canvas = document.getElementById("webgl-canvas");
    gl = canvas.getContext("webgl2");
    if (!gl) { alert("Your Web browser doesn't support WebGL 2\nPlease contact Dave"); }

    // Add initialization code here

    gl.clearColor(1.0, 0.0, 0.0, 1.0);
    gl.enable(gl.DEPTH_TEST);
    let sphere = new Sphere(gl, 36, 18);
    let ms = new MatrixStack();
    let angle = 0.0;
    

function render() {
    // Add rendering code here

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

                    angle += 1.0;
                    angle %= 360.0;

                    ms.push();
                    ms.rotate(angle, [0, 1, 0]);
                    ms.scale(0.9);
                    sphere.MV = ms.current();
                    sphere.draw();
                    ms.pop();

                    requestAnimationFrame(render);
                };

    render();
}

window.onload = init;

