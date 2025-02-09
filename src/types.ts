export interface ICar {
    make: string;
    model: string;
    barrels08: number;
    barrelsa08: number;
    charge120: number;
    charge240: number;
    city08: number;
    city08u: number;
    citya08: number;
    citya08u: number;
    citycd: number;
    citye: number;
    cityuf: number;
    co2: number;
    co2a: number;
    co2tailpipeagpm: number;
    co2tailpipegpm: number;
    comb08: number;
    comb08u: number;
    comba08: number;
    comba08u: number;
    combe: number;
    combinedcd: number;
    combineduf: number;
    cylinders: number;
    displ: number;
    drive: string;
    engid: string;
    eng_dscr: string[];
    fescore: number;
    fuelcost08: number;
    fuelcosta08: number;
    fueltype: string;
    fueltype1: string;
    ghgscore: number;
    ghgscorea?: number | null;
    highway08: number;
    highway08u: number;
    highwaya08: number;
    highwaya08u: number;
    highwaycd: number;
    highwaye: number;
    highwayuf: number;
    hlv: number;
    hpv: number;
    id: string;
    lv2: number;
    lv4: number;
    mpgdata: string;
    phevblended: string;
    pv2: number;
    pv4: number;
    range: number;
    rangecity: number;
    rangecitya: number;
    rangehwy: number;
    rangehwya: number;
    trany: string;
    ucity: number;
    ucitya: number;
    uhighway: number;
    uhighwaya: number;
    vclass: string;
    year: string;
    yousavespend: number;
    guzzler?: string | null;
    trans_dscr?: string | null;
    tcharger?: "T" | null;
    scharger?: "S" | null;
    atvtype?: string | null;
    fueltype2?: string | null;
    rangea?: number | null;
    evmotor?: string | null;
    mfrcode: string;
    c240dscr?: string | null;
    charge240b: number;
    c240bdscr?: string | null;
    createdon: string;
    modifiedon: string;
    startstop: "Y" | "N";
    phevcity: number;
    phevhwy: number;
    phevcomb: number;
    basemodel: string;
}