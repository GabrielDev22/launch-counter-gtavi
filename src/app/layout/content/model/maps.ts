export class MapInstructionSections{
    id!: number;
    img!: string;
    title! : string;
    tagZone! : string;
    tagText! : string;
    description! : string;
    mapDataZone! : MapDataZone;
    filter! : string;
}

export class MapDataZone{
    type! : string;
    inspiration! : string;
    confirmed! : string
    density! : string;
}

export enum ZoneUbication{
    VICE_CITY = 'V',
    LEONIDAS_KEYS = 'L',
    GRASSIREVERS = 'G',
    PORT_GELLHORN = 'P',
    RAG_WEED = 'R',
    MOUNT_KALAGA = 'M'
}