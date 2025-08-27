import { Injectable, OnModuleInit } from "@nestjs/common";
import { io, type Socket } from 'socket.io-client';

@Injectable()
export class SocketClient implements OnModuleInit{

    public socketClient: Socket;

    constructor(){
        this.socketClient = io('http://localhost:3000');
    }

    onModuleInit(){
        this.registerClientEvents();
        }
    

    private registerClientEvents(){
        this.socketClient.on('connect', () => {
            console.log('Connected to Gateway');
            this.socketClient.emit('newMessage', {msg:'Hey There'});

        });


        this.socketClient.on('onMessage', (payload: any)=>{
            console.log('SocketClientClass!');
            console.log(payload);
        });
    }
}