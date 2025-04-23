#version 300 es

layout(location = 0) in vec4 a_position; // 정점 위치
uniform float scale; // 배율 값
uniform bool isVariableScaleObject; // 배율 적용 여부

void main() {
    if(isVariableScaleObject) {
        gl_Position = vec4(a_position.x * scale, a_position.y * scale, a_position.z, 1.0f); // 배율 적용
    } else {
        gl_Position = a_position; // 배율 미적용
    }
}