import Sidebar from "../Sidebar"
import Header from "../Header"
import styles from "../../styles/style.module.css"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { useEffect,useState } from "react"
import axios from "axios"

function Events(){
  const [eventData,setEventData]=useState([])

  useEffect(()=>{
    function getEvent(){
      axios.get('http://localhost:9090/api/employees/allevent')
      .then(response =>{
        setEventData(response.data)
        console.log(response.data)

      })
      .catch(error =>{
        console.log(error)
      });
        }
        getEvent()

    

  },[]);

  const formatedData =() =>{

   eventData.map(event =>({
    id:event.id,
    title:event.title,
    start:event.startDate,
    end:event.endDate,

  }));
}

    

      const calendarStyle={
        width:"1000px",
        position:'relative',
        left:"230px"
      }
    return (
        <>
        <Sidebar/>
      <div className={styles.postionHeader}> 
        <Header/>      
        </div>
        <div style={calendarStyle}>
        <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: 'New year', date: '2024-01-01' },
          { title: 'christmass', date: '2023-12-25'},
          { title: 'Awards event', date: '2023-12-11'},
          { title: 'company meeting', date: '2023-12-15'},
          { title: 'New stock', date: '2023-12-04'},
          { title: 'company meeting', date: '2023-12-08'}
        ]}
         />
        </div>
        
        </>
    )
}
export default Events