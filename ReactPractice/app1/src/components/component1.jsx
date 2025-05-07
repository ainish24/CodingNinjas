const student1="John Doe"
const student2="Jane Smith"
const subjects1=["Math","Science","History"]
const marks1=[85,90,78]
const subjects2=["English","Art","Physical Education"]
const marks2=[88,92,95]

const component1 = () => {
  return (
    <>    
        <h3>{student1}</h3>
        <ul>
            <li>{subjects1.join(",")}</li>
            <li>{marks1.join(",")}</li>
            {(marks1.reduce((a, m) => a + m, 0) / marks1.length)>90 ? <li>Average Above 90</li> : <li>Average Below 90</li>}
        </ul>
        <h3>{student2}</h3>
        <ul>
            <li>{subjects2.join(",")}</li>
            <li>{marks2.join(",")}</li>
            {(marks2.reduce((a, m) => a + m, 0) / marks2.length)>90 ? <li>Average Above 90</li> : <li>Average Below 90</li>}
        </ul>
    </>
  )
}
export default component1