import {Server} from "socket.io"
import http from "http"
import express  from "express"

const app=express()
const server=http.createServer(app)

const io=new Server(server,{
    cors: {
        origin:["http://localhost:5173"]
    }
})

export function getReceiverSocketId(userId){
    return userScocketMap[userId]
}

const userScocketMap={}
io.on("connection",(socket)=>{
    console.log("A user connected",socket.id)
    const userId=socket.handshake.query.userId
    if(userId) userScocketMap[userId]=socket.id

    io.emit("getOnlineUsers",Object.keys(userScocketMap));
    socket.on("disconnect",()=>{
        console.log("A client is Disconnected",socket.id)
        delete userScocketMap[userId]
        io.emit("getOnlineUsers",Object.keys(userScocketMap))
    })
})

export {io, app, server};