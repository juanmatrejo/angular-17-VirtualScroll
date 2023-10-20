export interface Country {
    name: Name;
    tld?: string[];
    cca2: string;
    ccn3?: string;
    cca3: string;
    cioc?: string;
    independent?: boolean;
    status: Status;
    unMember: boolean;
    currencies?: Currencies;
    idd: Idd;
    capital?: string[];
    altSpellings: string[];
    region: Region;
    subregion?: string;
    languages?: { [key: string]: string };
    translations: { [key: string]: Translation };
    latlng: number[];
    landlocked: boolean;
    borders?: string[];
    area: number;
    demonyms?: Demonyms;
    flag: string;
    maps: Maps;
    population: number;
    gini?: { [key: string]: number };
    fifa?: string;
    car: Car;
    timezones: string[];
    continents: Continent[];
    flags: Flags;
    coatOfArms: CoatOfArms;
    startOfWeek: StartOfWeek;
    capitalInfo: CapitalInfo;
    postalCode?: PostalCode;
}

export interface CapitalInfo {
    latlng?: number[];
}

export interface Car {
    signs?: string[];
    side: Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export enum Continent {
    Africa = "Africa",
    Antarctica = "Antarctica",
    Asia = "Asia",
    Europe = "Europe",
    NorthAmerica = "North America",
    Oceania = "Oceania",
    SouthAmerica = "South America",
}

export interface Currencies {
    LRD?: Aed;
    CLP?: Aed;
    EUR?: Aed;
    GBP?: Aed;
    KES?: Aed;
    BBD?: Aed;
    RWF?: Aed;
    XOF?: Aed;
    SOS?: Aed;
    VES?: Aed;
    SHP?: Aed;
    KZT?: Aed;
    NOK?: Aed;
    KRW?: Aed;
    AZN?: Aed;
    ARS?: Aed;
    LYD?: Aed;
    SZL?: Aed;
    ZAR?: Aed;
    MAD?: Aed;
    BOB?: Aed;
    THB?: Aed;
    SYP?: Aed;
    USD?: Aed;
    AUD?: Aed;
    TTD?: Aed;
    YER?: Aed;
    BRL?: Aed;
    BMD?: Aed;
    ANG?: Aed;
    JOD?: Aed;
    GYD?: Aed;
    XPF?: Aed;
    NZD?: Aed;
    DOP?: Aed;
    MRU?: Aed;
    OMR?: Aed;
    DJF?: Aed;
    BGN?: Aed;
    XCD?: Aed;
    GGP?: Aed;
    ISK?: Aed;
    UGX?: Aed;
    CKD?: Aed;
    XAF?: Aed;
    KWD?: Aed;
    AOA?: Aed;
    BYN?: Aed;
    TRY?: Aed;
    PEN?: Aed;
    CRC?: Aed;
    DZD?: Aed;
    INR?: Aed;
    SGD?: Aed;
    MZN?: Aed;
    BND?: Aed;
    LSL?: Aed;
    MNT?: Aed;
    BZD?: Aed;
    DKK?: Aed;
    MDL?: Aed;
    TOP?: Aed;
    BDT?: Aed;
    AFN?: Aed;
    VND?: Aed;
    CNY?: Aed;
    CDF?: Aed;
    MKD?: Aed;
    AWG?: Aed;
    KPW?: Aed;
    GEL?: Aed;
    EGP?: Aed;
    ILS?: Aed;
    SDG?: BAM;
    UZS?: Aed;
    TZS?: Aed;
    IMP?: Aed;
    AED?: Aed;
    ZMW?: Aed;
    MOP?: Aed;
    STN?: Aed;
    SRD?: Aed;
    GMD?: Aed;
    TWD?: Aed;
    CVE?: Aed;
    UYU?: Aed;
    ERN?: Aed;
    BAM?: BAM;
    GNF?: Aed;
    NPR?: Aed;
    BHD?: Aed;
    JPY?: Aed;
    MMK?: Aed;
    SBD?: Aed;
    RSD?: Aed;
    IDR?: Aed;
    PYG?: Aed;
    TND?: Aed;
    PAB?: Aed;
    BIF?: Aed;
    CHF?: Aed;
    TMT?: Aed;
    MVR?: Aed;
    SEK?: Aed;
    KGS?: Aed;
    ETB?: Aed;
    ZWL?: Aed;
    PLN?: Aed;
    KYD?: Aed;
    JMD?: Aed;
    JEP?: Aed;
    VUV?: Aed;
    NAD?: Aed;
    SLL?: Aed;
    MUR?: Aed;
    CZK?: Aed;
    RON?: Aed;
    BTN?: Aed;
    MYR?: Aed;
    IRR?: Aed;
    PGK?: Aed;
    MGA?: Aed;
    CUC?: Aed;
    CUP?: Aed;
    NGN?: Aed;
    UAH?: Aed;
    HTG?: Aed;
    QAR?: Aed;
    FOK?: Aed;
    IQD?: Aed;
    PKR?: Aed;
    CAD?: Aed;
    TJS?: Aed;
    LKR?: Aed;
    GHS?: Aed;
    HNL?: Aed;
    LBP?: Aed;
    PHP?: Aed;
    AMD?: Aed;
    NIO?: Aed;
    SSP?: Aed;
    BSD?: Aed;
    KMF?: Aed;
    FJD?: Aed;
    ALL?: Aed;
    WST?: Aed;
    BWP?: Aed;
    LAK?: Aed;
    HKD?: Aed;
    TVD?: Aed;
    GTQ?: Aed;
    KID?: Aed;
    MXN?: Aed;
    SCR?: Aed;
    RUB?: Aed;
    KHR?: Aed;
    MWK?: Aed;
    GIP?: Aed;
    FKP?: Aed;
    COP?: Aed;
    SAR?: Aed;
    HUF?: Aed;
}

export interface Aed {
    name: string;
    symbol: string;
}

export interface BAM {
    name: string;
}

export interface Demonyms {
    eng: Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Flags {
    png: string;
    svg: string;
    alt?: string;
}

export interface Idd {
    root?: string;
    suffixes?: string[];
}

export interface Maps {
    googleMaps: string;
    openStreetMaps: string;
}

export interface Name {
    common: string;
    official: string;
    nativeName?: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common: string;
}

export interface PostalCode {
    format: string;
    regex?: string;
}

export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Antarctic = "Antarctic",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
}

export enum StartOfWeek {
    Monday = "monday",
    Saturday = "saturday",
    Sunday = "sunday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
    UserAssigned = "user-assigned",
}
