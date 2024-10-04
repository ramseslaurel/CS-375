
let gl = undefined;

function init() {
    let canvas = document.getElementById("webgl-canvas");
    gl = canvas.getContext("webgl2");
    if (!gl) { alert("Your Web browser doesn't support WebGL 2\nPlease contact Dave"); }

    // Add initialization code here

    gl.clearColor(0.2, 0.2, 0.2, 1.0);
    gl.enable(gl.DEPTH_TEST);

    let ms = new MatrixStack();
    //sphere
    let sphere = new Sphere(gl, 36, 18);
    
    let sphere_angle = 0.0;
    //

    //Tetrahedron

    let tetrahedron = new Tetrahedron(gl);
    
    let tetrahedron_angle = 0.0;
    //

function render() {
    // Add rendering code here

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // sphere
    sphere_angle += 3.0;
    sphere_angle %= 360.0;

    ms.push();
    ms.rotate(sphere_angle, [1, 1, 1]);
    ms.scale(.50,.50,.50);
    ms.translate(0.5,-0.5,0.5);
    sphere.MV = ms.current();
    sphere.color = vec4(0.5, 0.0, 0.5, 1.0); //purple
    sphere.draw();
    ms.pop();
    //

    // Tetrahedron
    tetrahedron_angle += 5.0;
    tetrahedron_angle %= 360.0;

    ms.push();
    ms.rotate(stetrahedron_angle, [1, 0, 0]);
    ms.scale(.70,.25,1);
    ms.translate(0.5,0,0.5);
    tetrahedron.MV = ms.current();
    tetrahedron.color = vec4((1.0, 0.0, 0.0, 1.0);
    tetrahedron.draw();
    ms.pop();

    requestAnimationFrame(render);
    }

    render();
}
window.onload = init;

