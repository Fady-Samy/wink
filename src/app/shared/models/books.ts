export interface Books {
    kind:       string;
    totalItems: number;
    items:      BookItem[];
}

export interface BookItem {
    kind:       Kind;
    id:         string;
    etag:       string;
    selfLink:   string;
    volumeInfo: VolumeInfo;
    saleInfo:   SaleInfo;
    accessInfo: AccessInfo;
    searchInfo: SearchInfo;
}

export interface AccessInfo {
    country:                Country;
    viewability:            Viewability;
    embeddable:             boolean;
    publicDomain:           boolean;
    textToSpeechPermission: TextToSpeechPermission;
    epub:                   Epub;
    pdf:                    PDF;
    webReaderLink:          string;
    accessViewStatus:       AccessViewStatus;
    quoteSharingAllowed:    boolean;
}

export enum AccessViewStatus {
    FullPublicDomain = "FULL_PUBLIC_DOMAIN",
    Sample = "SAMPLE",
}

export enum Country {
    Eg = "EG",
}

export interface Epub {
    isAvailable:   boolean;
    acsTokenLink?: string;
    downloadLink?: string;
}

export interface PDF {
    isAvailable:   boolean;
    acsTokenLink?: string;
}

export enum TextToSpeechPermission {
    Allowed = "ALLOWED",
}

export enum Viewability {
    AllPages = "ALL_PAGES",
    Partial = "PARTIAL",
}

export enum Kind {
    BooksVolume = "books#volume",
}

export interface SaleInfo {
    country:      Country;
    saleability:  Saleability;
    isEbook:      boolean;
    buyLink?:     string;
    listPrice?:   SaleInfoListPrice;
    retailPrice?: SaleInfoListPrice;
    offers?:      Offer[];
}

export interface SaleInfoListPrice {
    amount:       number;
    currencyCode: string;
}

export interface Offer {
    finskyOfferType: number;
    listPrice:       OfferListPrice;
    retailPrice:     OfferListPrice;
}

export interface OfferListPrice {
    amountInMicros: number;
    currencyCode:   string;
}

export enum Saleability {
    ForSale = "FOR_SALE",
    Free = "FREE",
    NotForSale = "NOT_FOR_SALE",
}

export interface SearchInfo {
    textSnippet: string;
}

export interface VolumeInfo {
    title:                string;
    publishedDate:        string;
    description?:         string;
    readingModes:         ReadingModes;
    pageCount:            number;
    printType:            PrintType;
    averageRating?:       number;
    ratingsCount?:        number;
    maturityRating:       MaturityRating;
    allowAnonLogging:     boolean;
    contentVersion:       string;
    imageLinks:           ImageLinks;
    language:             Language;
    previewLink:          string;
    infoLink:             string;
    canonicalVolumeLink:  string;
    subtitle?:            string;
    authors?:             string[];
    publisher?:           string;
    industryIdentifiers?: IndustryIdentifier[];
    categories?:          string[];
    panelizationSummary?: PanelizationSummary;
}

export interface ImageLinks {
    smallThumbnail: string;
    thumbnail:      string;
    extraLarge:      string;
    large:      string;
    medium:      string;
    small:      string;
}

export interface IndustryIdentifier {
    type:       Type;
    identifier: string;
}

export enum Type {
    Isbn10 = "ISBN_10",
    Isbn13 = "ISBN_13",
    Other = "OTHER",
}

export enum Language {
    Ar = "ar",
    En = "en",
}

export enum MaturityRating {
    NotMature = "NOT_MATURE",
}

export interface PanelizationSummary {
    containsEpubBubbles:  boolean;
    containsImageBubbles: boolean;
}

export enum PrintType {
    Book = "BOOK",
    Magazine = "MAGAZINE",
}

export interface ReadingModes {
    text:  boolean;
    image: boolean;
}
