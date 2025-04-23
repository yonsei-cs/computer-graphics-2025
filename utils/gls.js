/**
 * WebGL 2.0 Interface를 생성하는 함수
 * @param {HTMLCanvasElement} canvas 
 * @returns {WebGL2RenderingContext} WebGL 2.0 Interface
 * @throws {Error} WebGL 2.0 not supported.
 */
export function getOpenGLInterface(canvas) {
    /**
     * @type {WebGL2RenderingContext}
     */
    const gl = canvas.getContext("webgl2");

    if (!gl) {
        throw new Error("WebGL2 not supported.");
    }

    return gl;
}

/**
 * Vertex Array Object를 생성하는 함수
 * @param {WebGL2RenderingContext} gl
 * @returns {WebGLVertexArrayObject} gl에 binding된 Vertex Array Object
 * @throws Vertex Array Object 생성 실패
 * @description Vertex Array Object: GPU 메모리에 정점 데이터의 구성과 속성을 저장하는 객체
 * @example const vertexArrayObject = initVertexArrayObject(gl);
 */
export function initVertexArrayObject(gl) {
    // Part 1: Create Vertex Array Object
    /**@type {WebGLVertexArrayObject} */
    const vertexArrayObject = gl.createVertexArray();
    if (!vertexArrayObject) {
        throw new Error("Failed to create vertex array object.");
    }

    // Part 2: Bind Vertex Array Object
    gl.bindVertexArray(vertexArrayObject);

    return vertexArrayObject;
}

/**
 * Vertex Buffer Object를 생성하는 함수
 * @param {WebGL2RenderingContext} gl
 * @param {Float32Array} vertices
 * @returns {WebGLBuffer} gl에 binding된 Vertex Buffer Object
 * @throws Vertex Buffer Object 생성 실패
 * @description Vertex Buffer Object: GPU 메모리에 정점 데이터를 저장하는 객체
 * @example const vertexBufferObject = initVertexBufferObject(gl);
 */
export function initVertexBufferObject(gl) {
    // Part 1: Create Vertex Buffer Object
    /**@type {WebGLBuffer} */
    const vertexBufferObject = gl.createBuffer();
    if (!vertexBufferObject) {
        throw new Error("Failed to create vertex buffer object.");
    }

    // Part 2: Bind Vertex Buffer Object
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBufferObject);

    return vertexBufferObject;
}