import { Matrix4 } from "wrapt.co_re/lib/Model [╍⬡╍ꙮ╍▦╍]/maths/matrix/matrix-4";
import { Group } from "./000_association.interface";

export class Perspective implements Group<Matrix4> {

    constructor(
        public from: Matrix4
    ){                      }

}