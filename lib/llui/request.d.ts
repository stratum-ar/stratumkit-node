/// <reference types="node" />
export declare class RequestGenerator {
    private bytes;
    end(): void;
    append(data: number[]): void;
    toBuffer(): Buffer;
}
