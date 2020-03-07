import { Media } from './Media';

export class Image extends Media{

    hash: String;
    sha256: String;
    ext: String;
    mime: String;
    size: number=0;
    url: String;
    provider: String;
    provider_metadata: {};
    related: String;

}