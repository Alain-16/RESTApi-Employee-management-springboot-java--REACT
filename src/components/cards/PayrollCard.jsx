import Card from 'react-bootstrap/Card';
import styles from '../../styles/style.module.css'
import { ArrowDownOutlined, ArrowUpOutlined} from '@ant-design/icons';
import { Statistic } from 'antd';
import CountUp from 'react-countup';

const formatter = (value) => <CountUp end={value} separator="," />;


function PayrollCard(){

    return(
        <>
        <div className={styles.payrollCard_body}>
        <Card className={styles.payrollCard} style={{backgroundColor:'#FAFAFA'}}>
        <Card.Body>
            <Card.Subtitle className="mb-2 text-bg-light" style={{ fontSize: '20px',fontWeight: 'bold' }}>Web Developer</Card.Subtitle>
            <Statistic
          value={18960}
          formatter={formatter}
          //precision={2}
          valueStyle={{
            color: '#cf1322',
          }}
          prefix="$"
          />
          <Statistic
          value={5.74}
          precision={2}
          valueStyle={{
            color: '#cf1322',
          }}
          prefix={<ArrowDownOutlined />}
          suffix="%"
        />
        </Card.Body>
        </Card>
        <Card className={styles.payrollCard} style={{backgroundColor:'#FAFAFA'}}>
        <Card.Body>
        <Card.Subtitle className="mb-2 text-bg-light" style={{ fontSize: '20px',fontWeight: 'bold' }}>App Developer</Card.Subtitle>
            <Statistic
          value={11783}
          formatter={formatter}
          //precision={2}
          valueStyle={{
            color: '#cf1322',
          }}
          prefix="$"
          />
            <Statistic
          value={11.23}
          precision={2}
          valueStyle={{
            color: '#cf1322',
          }}
          prefix={<ArrowUpOutlined />}
          suffix="%"
        />
        </Card.Body>
        </Card>
        <Card className={styles.payrollCard} style={{backgroundColor:'#FAFAFA'}}>
        <Card.Body>
          
            <Card.Subtitle className="mb-2 text-bg-light" style={{ fontSize: '20px',fontWeight: 'bold' }}>Designer</Card.Subtitle>
            <Statistic
          value={2245}
          formatter={formatter}
          //precision={2}
          valueStyle={{
            color: '#cf1322',
          }}
          prefix="$"
          />
            <Statistic
          value={9.78}
          precision={2}
          valueStyle={{
            color: '#cf1322',
          }}
          prefix={<ArrowUpOutlined />}
          suffix="%"
        />
           
        </Card.Body>
        </Card>
        <Card className={styles.payrollCard} style={{backgroundColor:'#FAFAFA'}}>
        <Card.Body>
            
            <Card.Subtitle className="mb-2 text-bg-light" style={{ fontSize: '20px',fontWeight: 'bold' }}>Marketing</Card.Subtitle>
            <Statistic
          value={8751}
          formatter={formatter}
          //precision={2}
          valueStyle={{
            color: '#cf1322',
          }}
          prefix="$"
          />
            <Statistic
          value={8.20}
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
    )
}
export default PayrollCard