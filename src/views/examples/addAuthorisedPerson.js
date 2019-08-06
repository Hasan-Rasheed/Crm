import React , {Component} from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Select from 'react-select';
import Axios from 'axios';
const ministries= [
  { label: "Police Station", value: "PoliceStation" },
  { label: "Airport", value: "Airport" },
  { label: "Pakistan Armed Force", value: "PakistanArmedForce" },
  { label: "Pakistan Air Force", value: "PakistanAirForce" },
  { label: "Pakistan Navy", value: "PakistanNavy" },
  { label: "Pakistan Army", value: "PakistanArmy" },
  { label: "Airport Security Forces", value: "AirportSecurityForces" },
  { label: "Fedral Intelligence", value: "FedralIntelligence" },
  { label: "Intelligence Bureau", value: "IntelligenceBureau" },
  { label: "Pakistan Rangers", value: "PakistanRangers" },
  { label: "Law And Justice", value: "LawAndJustice" },
  { label: "Supreme Court", value: "SupremeCourt" }
 ]

 
class AddAuthorisedPerson extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      ministry: "",
      batchId: ""
    }

    this.onChangeMinistry = this.onChangeMinistry.bind(this)
    this.onChangeBatchId = this.onChangeBatchId.bind(this)
    this.onSubmit = this.onSubmit.bind(this)


  }

  onChangeMinistry(event){
  console.log(event.value)

    this.setState({ministry: event.value})

}
onChangeBatchId(event){
  console.log(event.target.value)

  this.setState({batchId: event.target.value})

}

onSubmit(){

  let obj =
  {
    "$class": "criminalsystem.MinistryPerson",
    "batchId": this.state.batchId,
    "MinistryCategory": this.state.ministry
  }
  console.log(obj)

  Axios.post('http://35.222.10.88:3000/api/MinistryPerson/',obj)
  .then(response =>{
    if(response.status == 200){
      alert("Ministry has been added")
      this.setState({ batchId:""})
    }
    else{
      alert("Ministry has not been added. Please Try again")
    }
    // console.log(response.status)
})
  .catch(err =>{
    console.log(err)
    alert("Something went wrong. Please try again")
  })

}

  render() {
    return (
      <div className = "form-styling" >
      
        <FormGroup>
          <Label for="exampleEmail">Select Ministry</Label>
          <Select
         className=" name "
       //   classNamePrefix="select"
           onChange = {this.onChangeMinistry}
       //   name="color"
         options={ministries}
       />
        </FormGroup>
       
        <FormGroup>
          <Label for="exampleUrl">Batch id</Label>
          <Input
            type="text"
            name="Batch id"
            id="batch id"
            placeholder="Batch id"
            onChange = {this.onChangeBatchId}
            value = {this.state.batchId}
          />
        </FormGroup> 
        <Button style = {{marginTop:"1em"}} onClick = {this.onSubmit}>Add Ministry</Button>

      </div>
    );
  }
}

export default AddAuthorisedPerson
