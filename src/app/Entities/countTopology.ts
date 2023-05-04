// crear clase
export class CountTopology {
    nClients = 0;
    nSwitches = 0;
    nRouters = 0;
    nServers = 0;
    Count(name: string) {
        switch (name) {
            case "client":
                this.nClients += 1;
                break;
            case "switch":
                this.nSwitches += 1;
                break;
            case "router":
                this.nRouters += 1;
                break;
            case "server":
                this.nServers += 1;
                break;
            default:
                break;
        }
    }
    GetCount(name: string) {
        switch (name) {
            case "client":
                return this.nClients;
            case "switch":
                return this.nSwitches;
            case "router":
                return this.nRouters;
            case "server":
                return this.nServers;
            default:
                return 0;
                break;
        }
    }
}