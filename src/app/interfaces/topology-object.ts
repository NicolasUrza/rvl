export interface TopologyObject {
    name: string;
    imgsource: string;
    isConnected: boolean;
    getProperties(): any;
}
