#version 300 es

layout(location = 0) in vec3 aPos;

void main() {
    gl_Position = vec4(aPos, 1.0f);
    gl_PointSize = 5.0f;
}