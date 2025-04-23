/**
 * Loads a shader source file from a given URL.
 * @param {string} url The URL of the shader source file.
 * @returns {Promise<string>} A promise that resolves to the shader source code.
 */
async function loadShaderSource(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to load shader source from ${url}: ${response.statusText}`);
    }
    /** @type {Promise<String>} */
    const shaderSource = await response.text();
    return shaderSource;
}

/**
 * Vertex Shader Source File과 Fragment Shader Source File을 읽어와서 Shader Program을 생성하는 함수
 * @param {WebGL2RenderingContext} gl 
 * @param {string} vertexShaderPath
 * @param {string} fragmentShaderPath 
 */
export async function createShaderProgram(gl, vertexShaderPath, fragmentShaderPath) {
    // Part 1: Create Shader Objects
    /**@type {WebGLShader} */
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    /**@type {WebGLShader} */
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    if (!vertexShader || !fragmentShader) {
        throw new Error("Failed to create shader objects.");
    }

    // Part 2: Read the Raw Shader Source Code
    /** @type {Promise<string>} */
    const vertexShaderSource = await loadShaderSource(vertexShaderPath);
    const fragmentShaderSource = await loadShaderSource(fragmentShaderPath);

    // Part 2: Apply the Shader Source Code
    gl.shaderSource(vertexShader, vertexShaderSource);
    gl.shaderSource(fragmentShader, fragmentShaderSource);

    // Part 3: Compile Shader
    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);

    // Part 4: Create Shader Program
    /**@type {WebGLProgram} */
    const shader = gl.createProgram();
    if (!shader) {
        throw new Error("Failed to create shader program.");
    }

    // Part 5: Attach Shader to Program
    gl.attachShader(shader, vertexShader);
    gl.attachShader(shader, fragmentShader);

    gl.linkProgram(shader);

    return shader
}