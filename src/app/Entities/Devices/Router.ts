import { IDevice } from "src/app/interfaces/idevice";

export class Router implements IDevice
{
    name: string;
    imgSource: string;
    constructor(){
        this.name = "Router";
        this.imgSource = "assets/img/router.png";
    }

}