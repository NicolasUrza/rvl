// crear clase
export class CountTopology {
    /*
    nClients = 0;
    nSwitches = 0;
    nRouters = 0;
    nServers = 0;*/
    //hashmap de objetos
    topologyObjects = new Map<string,number>();


    Count(name: string) {
        //si no encuentro el objeto en el hashmap lo creo
        if(!this.topologyObjects.has(name)){
            this.topologyObjects.set(name,0);
        }
        //aumento el contador
        this.topologyObjects.set(name,this.topologyObjects.get(name)+1);
    }
    GetCount(name: string) {
        return this.topologyObjects.get(name);
    }
}