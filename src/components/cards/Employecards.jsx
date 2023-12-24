
import Card from 'react-bootstrap/Card';
import styles from '../../styles/style.module.css'
import { ArrowDownOutlined, ArrowUpOutlined,BarChartOutlined } from '@ant-design/icons';
import { Statistic } from 'antd';
import CountUp from 'react-countup';

const formatter = (value) => <CountUp end={value} separator="," />;
function Employecards(){
    
    return(
        <>
        <div className={styles.EmployeCard}>
        <Card className={styles.Employe_card_body} style={{height:"90px",border:'none',backgroundColor:'#EBEBEB'}}>
        <Card.Body>
        <Statistic
          title="Total Employees"
          value={300}
          formatter={formatter}
          //precision={2}
          valueStyle={{
            color: '#cf1322',
          }}
          suffix={<BarChartOutlined />}
          //suffix="%"
        />
        </Card.Body>
        </Card>  
        
        <Card className={styles.Employe_card_body} style={{height:"90px",border:'none',backgroundColor:'#EBEBEB'}}>
        <Card.Body>
            
        <Statistic
          title="New Employees"
          value={100}
          formatter={formatter}
          //precision={2}
          valueStyle={{
            color: '#cf1322',
          }}
          suffix={<BarChartOutlined />}
          //suffix="%"
        />
        </Card.Body>
        </Card>
        <Card className={styles.Employe_card_body} style={{height:"90px",border:'none',backgroundColor:'#EBEBEB'}}>
        <Card.Body>
          
        <Statistic
          title="New Employees"
          value={80}
          precision={2}
          valueStyle={{
            color: '#cf1322',
          }}
          prefix={<ArrowUpOutlined />}
          suffix="%"
        />
        </Card.Body>
        </Card>
        <Card className={styles.Employe_card_body} style={{height:"90px",border:'none',backgroundColor:'#EBEBEB'}}>
        <Card.Body>
            
        <Statistic
          title="New Employees"
          value={20}
          precision={2}
          valueStyle={{
            color: '#cf1322',
          }}
          prefix={<ArrowDownOutlined />}
          suffix="%"
        />
        </Card.Body>
        </Card>
    </div>
    </>

    );

}
export default Employecards