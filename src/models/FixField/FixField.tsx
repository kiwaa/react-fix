import { Field } from 'fixparser/FIXParserBrowser';

export class FixField {
    id: number;
    tag: number;
    name: string | null;
    value: any;
    valueName: string | null | undefined;

    header: boolean;
    trailer: boolean;

    constructor(id: number, field: Field) {
        this.id = id;
        this.tag = field.tag;
        this.name = field.name;
        this.value = field.value;
        this.valueName = field.enumeration?.description;

        const headerTags: number[] = [8, 9, 35, 34, 49, 52, 56]
        this.header = headerTags.findIndex(x => x == this.tag) != -1;
        this.trailer = this.tag == 10;
    }
}