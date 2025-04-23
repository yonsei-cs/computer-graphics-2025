/**
 * 
 * @param {Window} window
 * @param {HTMLCanvasElement} canvas 
 * @param {Function} renderFunction
 */
export function autoResizeWindow(window, canvas, renderFunction) {
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.getContext('webgl2').viewport(0, 0, canvas.width, canvas.height);
        if (renderFunction) {
            renderFunction();
        }
    });
}