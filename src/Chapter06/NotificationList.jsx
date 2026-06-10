import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id:1,
        message:"좌회전입니다.",
        imageUrl:"https://watermark.lovepik.com/photo/50045/2928.jpg_wh1200.jpg",
    },
    {
        id:2,
        message:"우회전입니다.",
        imageUrl:"https://watermark.lovepik.com/photo/50045/2928.jpg_wh1200.jpg",
    },
    {
        id:3,
        message:"전방에 과속방지턱이 있습니다.",
        imageUrl:"https://watermark.lovepik.com/photo/50045/2928.jpg_wh1200.jpg",
    },
    {
        id:4,
        message:"어린이 보호구역입니다.",
        imageUrl:"https://watermark.lovepik.com/photo/50045/2928.jpg_wh1200.jpg",
    },
    {
        id:5,
        message:"제한속도 40입니다.",
        imageUrl:"https://watermark.lovepik.com/photo/50045/2928.jpg_wh1200.jpg",
    },
];


var timer;

class NotificationList extends React.Component{
    constructor(props){
        super(props);

        this.state={
            notifications:[],
        };
    }
    componentDidMount(){
        const {notifications}=this.state;
        timer = setInterval(()=>{
            if (notifications.length < reservedNotifications.length){
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications
                });
            }else{
                this.setState({
                    notifications: []
                });
                clearInterval(timer);
            }
        
        }, 1000);
    }
    componentWillUnmount(){
        if (timer){
            clearInterval(timer);
        }
    }
    
    render(){
        return(
            <div>
                {this.state.notifications.map((notification)=>{
                    return(
                     <Notification
                     key={notification.id}
                     id={notification.id}
                      message={notification.message}
                      imageUrl={notification.imageUrl}/>);
                      
                    
                })}
            
            </div>
        );
    }
}
export default NotificationList;