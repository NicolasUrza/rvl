import { TopologyObject } from "../interfaces/topology-object";

export class  TopologyObjectBuilder{
        build(name:string, imgSource:string): TopologyObject{
            let topologyObject = {
                name: name,
                imgsource: imgSource,
                cantInterfaces: 3,
                getProperties(): any {
                    return 
                        "Propiedades de "+ name
                
                }
            }
            return topologyObject;
        }
    

}