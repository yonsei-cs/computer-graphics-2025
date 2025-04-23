#version 300 es
precision mediump float;

in vec4 position;
out vec4 color;
uniform vec4 inputColor;

void main() {
    color = inputColor;
}