
export interface Group<T> {
    from: T;
}

export interface Association<FROM, TO>
       extends   Group<FROM> {
    from: FROM,
    to:   TO
}