import {Chart} from "react-google-charts"
const data = [
    [
      "Month",
      "Developer",
      "Sales",
      "Marketing",
      
    ],
    ["Jan", 165, 938, 522],
    ["Feb", 100, 150, 200],
    ["Mar", 90, 80, 30],
    ["May", 150, 938, 550],
    ["Jun", 40, 93, 52],
    ["Jul", 200, 400, 522],
  ];

  const options = {
    title: "Salary Statistics",
    vAxis: { title: "$(thousands)" },
    hAxis: { title: "Month" },
    seriesType: "bars",
    series: { 5: { type: "line" } },
  };

function EmployeLineCard(){
    const cardStyle={
        width:'50%',  
    }
    return (
        <>
        <div style={cardStyle}>
        
        <Chart
      chartType="ComboChart"
      height="400px"
      data={data}
      options={options}
    />
        </div>
        
        </>
    )
}

export default EmployeLineCard;