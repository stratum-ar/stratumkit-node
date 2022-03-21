/// <reference types="node" />
export declare type AppInput = {
    x: number;
    y: number;
};
export declare class App {
    private _conn;
    private client;
    onInput: (input: AppInput) => void;
    private handleData;
    get connected(): boolean;
    start(appId: string): Promise<void> | null;
    sendCommand(id: number, data: Buffer): Promise<void>;
}
