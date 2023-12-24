import Sidebar from "../Sidebar"
import Header from "../Header"
import Featurecard from "../cards/Featurecards"
import Tablecards from "../cards/Tablecards"
import styles from '../../styles/style.module.css'
import EmployeLineCard from "../cards/EmployeLineCard"
import Piechart from "../cards/Piechart"

function Dashboard(){
    const cardPosition={
        position:'relative',
        left:'200px',
        top:'50px'
    }
    return(
        <>
        <Sidebar/>
      <div className={styles.postionHeader}> 
        <Header/>      
        </div>
        
        <div className={styles.card_body}>
            <Featurecard/>
        </div>
        <div style={cardPosition}>
            <EmployeLineCard/>
            <Piechart/>
        </div>
        <div>
        
        </div>
        
        <div className={styles.employeTable} style={{overflowY:'scroll'}}>
            <Tablecards/>
        </div>
        </>
    )
}
export default Dashboard
