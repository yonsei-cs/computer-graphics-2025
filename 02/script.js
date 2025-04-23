import { autoResizeWindow } from "../utils/windows.js";
import { createShaderProgram } from "../utils/shaders.js";
import { getOpenGLInterface, initVertexArrayObject, initVertexBufferObject } from "../utils/gls.js";

// #region Global Variable Declarations

// #region System Variables

/**
 * WebGL2를 바탕으로 Drawing하기 위해 사용하는 Canvas Element
 * @type {HTMLCanvasElement}
 */
const canvas = document.getElementById("glCanvas");

/**
 * `canvas`를 기반으로 WebGL 2.0 기능을 사용해 Drawing하기 위한 Interface
 * @type {WebGL2RenderingContext}
 */
const gl = getOpenGLInterface(canvas);

/**
 * Vertex Shader의 소스 코드가 저장된 경로
 * @type {string}
 */
const vertexShaderPath = "./vert.glsl";

/**
 * Fragment Shader의 소스 코드가 저장된 경로
 * @type {string}
 */
const fragmentShaderPath = "./frag.glsl";

/**
 * Shader Program
 * @type {WebGLProgram}
 */
const shader = await createShaderProgram(gl, vertexShaderPath, fragmentShaderPath);

// #endregion

// #region Drawing Variables
/**
 * Vertex Array Object
 * @type {WebGLVertexArrayObject}
 * @description VAO는 GPU 메모리에 정점 데이터의 구성과 속성을 저장하는 객체
 */
const vertexArrayObject = initVertexArrayObject(gl);

/**
 * Vertex Buffer Object
 * @type {WebGLBuffer}
 * @description VBO는 GPU 메모리에 정점 데이터를 저장하는 객체
 */
const vertexBufferObject = initVertexBufferObject(gl);

/**
 * 그릴 도형의 정점 데이터
 * @type {Float32Array}
 */
const triangleVertices = new Float32Array([
    -0.5, -0.5, +0.0,
    +0.5, -0.5, +0.0,
    +0.0, +0.5, +0.0,
]);

// #endregion

// #endregion

// #region Canvas Initialization

canvas.height = 500;
canvas.width = 500;

autoResizeWindow(window, canvas, render);

gl.viewport(0, 0, canvas.width, canvas.height);
gl.clearColor(0.3, 0.9, 0.9, 1);

// #endregion

// #region Drawing

// Part 1: write vertex data to GPU memory
gl.bufferData(gl.ARRAY_BUFFER, triangleVertices, gl.STATIC_DRAW);

// Part 2: Define the vertex attribute layout
gl.vertexAttribPointer(
    0, // attribute location (in vertex shader)
    3, // number of components per vertex attribute (x, y, z)
    gl.FLOAT, // type of each component
    false, // normalize
    0, // stride (0 = move forward size * sizeof(type) each iteration to get the next position)
    0 // offset in buffer (0 = start at the beginning of the buffer)
);
gl.enableVertexAttribArray(0); // enable the attribute

gl.useProgram(shader); // use the shader program

render();

// #endregion

function render() {
    gl.clear(gl.COLOR_BUFFER_BIT); // gl.clearColor로 정의한 색으로 초기화

    gl.bindVertexArray(vertexArrayObject); // bind the vertex array object
    gl.drawArrays(gl.TRIANGLES, 0, 3); // draw the triangle

}