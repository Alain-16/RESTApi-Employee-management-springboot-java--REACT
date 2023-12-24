
import Card from 'react-bootstrap/Card';
import styles from '../../styles/style.module.css'
import { Link } from 'react-router-dom';
function Featurecard(){
    return(
        <div className={styles.card_body}>
        <Card className={styles.card}>
        <Card.Body>
            <Card.Subtitle className="mb-2 text-muted"><Link to="/employees"><img 
            alt=''
            width="90px"
            height="80px"
            src={require("../../assets/staff.png")}
            className={styles.cardImg}
            ></img> </Link></Card.Subtitle>
            <Card.Text>
            Employees
            </Card.Text>
        </Card.Body>
        </Card>
        <Card className={styles.card}>
        <Card.Body>
            
            <Card.Subtitle className="mb-2 text-muted"><img 
            alt=''
            width="90px"
            height="80px"
            src={require("../../assets/departments.png")}
            className={styles.cardImg}
            ></img></Card.Subtitle>
            <Card.Text>
            Departments
            </Card.Text>
        </Card.Body>
        </Card>
        <Card className={styles.card}>
        <Card.Body>
          
            <Card.Subtitle className="mb-2 text-muted"><img 
            alt=''
            width="90px"
            height="80px"
            src={require("../../assets/event.png")}
            className={styles.cardImg}
            ></img></Card.Subtitle>
            <Card.Text>
            Events
            </Card.Text>
        </Card.Body>
        </Card>
        <Card className={styles.card}>
        <Card.Body>
            
            <Card.Subtitle className="mb-2 text-muted"><img 
            alt=''
            width="90px"
            height="80px"
            src={require("../../assets/salary.png")}
            className={styles.cardImg}
            ></img></Card.Subtitle>
            <Card.Text>
            Payroll
            </Card.Text>
        </Card.Body>
        </Card>
        <Card className={styles.card}>
        <Card.Body>
            
            <Card.Subtitle className="mb-2 text-muted"><img 
            alt=''
            width="90px"
            height="80px"
            src={require("../../assets/dates.png")}
            className={styles.cardImg}
            ></img></Card.Subtitle>
            <Card.Text>
            Holidays
            </Card.Text>
        </Card.Body>
        </Card>
        <Card className={styles.card}>
        <Card.Body>
            
            <Card.Subtitle className="mb-2 text-muted"><img 
            alt=''
            width="90px"
            height="80px"
            src={require("../../assets/report.png")}
            className={styles.cardImg}
            ></img></Card.Subtitle>
            <Card.Text>
            Reports
            </Card.Text>
        </Card.Body>
        </Card>
    </div>

    );

}
export default Featurecard