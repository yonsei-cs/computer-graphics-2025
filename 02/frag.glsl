#version 300 es
// shader version
// OpenGL ES 3.0을 사용하기 위한 버전 지정
precision mediump float;
// Set the default precision for floating-point numbers to medium
// OpenGL ES에서는 precision을 설정해야 함

out vec4 color;
// Declare an output variable for the fragment color
// vec4는 4차원 벡터를 의미, RGBA 색상 모델을 사용
// OpenGL ES에서는 fragment shader의 출력 변수를 out으로 선언해야 함

void main() {
    color = vec4(1.0f, 0.5f, 0.2f, 1.0f);
    // Set the fragment color to a specific RGBA value
    // vec4(1.0f, 0.5f, 0.2f, 1.0f) = (R, G, B, A)
    // R = 1.0f (red), G = 0.5f (green), B = 0.2f (blue), A = 1.0f (alpha)
    // A = 1.0f는 불투명함을 의미, 0.0f는 완전 투명함을 의미
    // OpenGL ES에서는 fragment shader의 출력 변수를 out으로 선언해야 함
}