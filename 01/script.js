/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("glCanvas");

/** @type {WebGL2RenderingContext} */
const gl = canvas.getContext("webgl2");

if (!gl) {
    console.error("WebGL2 not supported.");
}

canvas.height = 500;
canvas.width = 500;
gl.viewport(0, 0, canvas.width, canvas.height);

gl.clearColor(0.5, 0.1, 0.1, 1);

render();

function render() {
    gl.clear(gl.COLOR_BUFFER_BIT); // gl.clearColor로 정의한 색으로 초기화

    gl.enable(gl.SCISSOR_TEST);

    gl.scissor(0, 0, canvas.width / 2, canvas.height / 2); // 왼쪽 위 사각형
    gl.clearColor(0.1, 0.5, 0.1, 1); // 초록색
    gl.clear(gl.COLOR_BUFFER_BIT); // gl.clearColor로 정의한 색으로 초기화

    gl.disable(gl.SCISSOR_TEST); // scissor test 비활성화

    console.log(gl.getParameter(gl.SCISSOR_BOX)); // 현재 scissor box의 위치와 크기 확인
}