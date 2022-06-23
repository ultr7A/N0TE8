export class EditorContextTraversal<Coords extends Record<string, any>> {
    public relative = false;
    public magnitude = 1.0;
    public coords: Coords

    public EditorContextTraversal(
        relative: boolean,
    ) {
        this.relative = relative;
    }

}
