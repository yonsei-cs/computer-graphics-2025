#version 300 es
// shader 버전 지정

layout(location = 0) in vec3 aPos;
// 위치 속성의 location을 지정, vec3는 3차원 벡터를 의미

void main() {
    gl_Position = vec4(aPos, 1.0f);
    // 위치 속성을 vec4로 변환하여 gl_Position에 할당
    // gl_Position은 OpenGL에서 정점의 위치를 나타내는 내장 변수
}