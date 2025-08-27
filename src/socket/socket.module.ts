import { Module } from "@nestjs/common";
import { SocketClient } from "./socket-client";

@Module({
    imports:[],
    providers:[SocketClient],

})

export class SocketModule{}