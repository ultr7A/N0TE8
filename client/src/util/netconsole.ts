import { Color3 } from "@babylonjs/core";
import {ls_to_level } from "./ls-to-level";

export class NetConsole {
    public static log(data: unknown, ui_feedback, babylon_scene) {    

        console.log(data);
        
        const   xhr = new XMLHttpRequest();
                xhr.onload = (str_response) => ui_feedback 
                                            ?   ui_feedback(str_response) 
                                            :   this.babylonjs_feedback(babylon_scene);
    
        let urlEncodedData  =   
                                encodeURIComponent( "message" ) 
                                + '=' + 
                                encodeURIComponent( typeof data === "object" 
                                                    ? ls_to_level(data, 5) 
                                                    : data.toString());
    
            urlEncodedData  =   urlEncodedData.replace( /%20/g, '+' );                    
    
        xhr.open("POST", "https://shell.wrapt.org/console", true)
        xhr.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' ); 
        xhr.send(urlEncodedData)
    
    }

    private static babylonjs_feedback(scene) {

        scene.clearColor = Color3.Gray;
        setTimeout(() => {
            scene.clearColor = Color3.Black;
        }, 180);

    }
}