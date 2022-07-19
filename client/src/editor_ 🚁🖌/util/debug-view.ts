import { Scene } from "@babylonjs/core";

/**
 * 
 * 
 * DebugView
 * 
 * 
 */
export class DebugView {

    public static enable(scene: Scene) {
           // hide/show the Inspector
        window.addEventListener("keydown", (ev) => {
            // Shift+Ctrl+Alt+I
            if (ev.shiftKey && ev.ctrlKey && ev.altKey && ev.keyCode === 73) {
                if (scene.debugLayer.isVisible()) {
                    scene.debugLayer.hide();
                } else {
                    scene.debugLayer.show();
                }
            }
        });
    }

}

