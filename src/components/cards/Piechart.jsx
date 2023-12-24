import {Chart} from "react-google-charts"

const data = [
    ["Departments", "Employees"],
    ["Technology", 10],
    ["Finance", 60],
    ["sales", 30],
    ["Administration", 20],
    ["Marketing", 40],
  ];
  
  export const options = {
    title: "Employees in Departments",
    is3D: true,
  }


function Piechart(){
    const cardStyle={
        width:'30%',  
        position:'relative',
        left:'700px',
        top:'-390px'
    }

    return(
        <>
        <div style={cardStyle}>
        <Chart
      chartType="PieChart"
      data={data}
      options={options}
      height={"400px"}
    />
        </div>
        </>
    )
}
export default Piechart