#version 300 es

precision mediump float;

uniform vec4 inputColor;
out vec4 resultColor;

void main() {
    resultColor = inputColor;
}
