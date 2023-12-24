import React from "react"
import {Chart} from "react-google-charts"


export const data = [
  ["City", "2010 Population", "2000 Population","2003 Population"],
  ["New York City, NY", 8175000, 8008000,900000],
  ["Los Angeles, CA", 3792000, 3694000,500000],
  ["Chicago, IL", 2695000, 2896000,40000],
  ["Houston, TX", 2099000, 1953000,230000],
  ["Philadelphia, PA", 1526000, 1517000,940000],
];

export const options = {
  title: "Population of Largest U.S. Cities",
  chartArea: { width: "50%" },
  colors: ["#b0120a", "#ffab91"],
  hAxis: {
    title: "Total Population",
    minValue: 0,
  },
  vAxis: {
    title: "City",
  },
};

function Trial(){

  return(
    <>
     <Chart
      chartType="BarChart"
      width="60%"
      height="400px"
      data={data}
      options={options}
    />
    </>
  )
}
export default Trial