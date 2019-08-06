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

 
class EditCriminal extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      ministry: '',
      batchId: '',
      criminalId: ''
    }

    this.onChangeMinistry = this.onChangeMinistry.bind(this)
    this.onChangeBatchId = this.onChangeBatchId.bind(this)
    this.onChangeCriminalId = this.onChangeCriminalId.bind(this)
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
onChangeCriminalId(event){
  console.log(event.target.value)

  this.setState({criminalId: event.target.value})

}

onSubmit(){

  let obj = {
    "$class": "criminalsystem.ChangeCriminalStatus",
    "CriminalId": this.state.criminalId,
    "MinistryPersonId": this.state.batchId,
    "MinistryCategory": this.state.ministry


  }
  console.log(obj)
  Axios.post('http://35.222.10.88:3000/api/ChangeCriminalStatus' ,obj ).then(response =>{
    if(response.status == 200){
      alert("Criminal status has been changed")
      this.setState({
        ministry: '',
      batchId: '',
      criminalId: ''
      })
    }
    else{
      alert("Criminal not found")
    }
    // console.log(response.status)

  })
    .catch(err => {
      alert("Something went wrong.Please Try Again")
      // console.log(err)
    });
}
  render() {
    return (
    <div className = "form-styling">
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
          <Label for="exampleUrl">Ministery Person Batch Id</Label>
          <Input
            type="text"
            name="Batch id"
            id="batch id"
            onChange = {this.onChangeBatchId}
            value = {this.state.batchId}
            placeholder="Batch id"
          />
        </FormGroup> 
        <FormGroup>
          <Label for="exampleNumber">Criminal id</Label>
          <Input
            type="number"
            name="Criminal id"
            id="criminal id"
            onChange = {this.onChangeCriminalId}
            value = {this.state.criminalId}
            placeholder="Criminal Id"
          />
        </FormGroup>
        
     
        <Button style = {{marginTop:"1em"}} onClick = {this.onSubmit}>Add Ministry</Button>
       
      </div>
    );
  }
}

export default EditCriminal
