
export interface Group<T> {
    from: T;
}

export interface Association<FROM, TO> {
    from: FROM,
    to:   TO
}