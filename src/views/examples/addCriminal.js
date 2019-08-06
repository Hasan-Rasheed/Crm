import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Select from 'react-select';
import { geolocated } from 'react-geolocated';
import axios from 'axios'

const ministryOption = [
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

//  var location = props.coords;
const assets = [
  { label: "None", value: "None" },
  { label: "Cash", value: "Cash" },
  { label: "Wallet", value: "Wallet" },
  { label: "Gun", value: "Gun" },
  { label: "Vehicle", value: "Vehicle" },
  { label: "Atm Card", value: "AtmCard" }
]

var recentTime = new Date()

const status = [
  { label: "true", value: true },
  { label: "false", value: false }

]
class AddCriminal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTime: JSON.stringify(recentTime),
      location: '24.878023199999998 , 67.0212071',
      ministry: '',
      serialNo: '07',
      cnic: '',
      name: '',
      crime: '',
      crimeDescription: '',
      sentenceStatus: true,
      asset1: '',
      asset2: '',
      asset3: '',
      batchId: ''
    }

    this.onChangeMinistry = this.onChangeMinistry.bind(this)
    this.onChangeSerialNo = this.onChangeSerialNo.bind(this)
    this.onChangeCnic = this.onChangeCnic.bind(this)
    this.onChangeName = this.onChangeName.bind(this)
    this.onChangeCrime = this.onChangeCrime.bind(this)
    this.onChangeCrimeDescription = this.onChangeCrimeDescription.bind(this)
    this.onChangeSentenceStatus = this.onChangeSentenceStatus.bind(this)
    this.onChangeAsset1 = this.onChangeAsset1.bind(this)
    this.onChangeAsset2 = this.onChangeAsset2.bind(this)
    this.onChangeAsset3 = this.onChangeAsset3.bind(this)
    this.onChangeBatchId = this.onChangeBatchId.bind(this)
    this.onChangeCurrentTime = this.onChangeCurrentTime.bind(this)
    this.onChangeLocation = this.onChangeLocation.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

  }

  onChangeMinistry(event) {
    console.log(event.value)

    this.setState({ ministry: event.value })

  }
  onChangeSerialNo(event) {
    console.log(event.target.value)

    this.setState({ serialNo: event.target.value })

  }
  onChangeCnic(event) {
    console.log(event.target.value)

    this.setState({ cnic: event.target.value })

  }
  onChangeName(event) {
    console.log(event.target.value)

    this.setState({ name: event.target.value })

  }
  onChangeCrime(event) {
    console.log(event.target.value)

    this.setState({ crime: event.target.value })

  }
  onChangeCrimeDescription(event) {
    console.log(event.target.value)

    this.setState({ crimeDescription: event.target.value })

  }
  onChangeSentenceStatus(event) {
    console.log(event.value)

    this.setState({ sentenceStatus: event.value })

  }
  onChangeAsset1(event) {
    console.log(event.value)

    this.setState({ asset1: event.value })

  }
  onChangeAsset2(event) {

    console.log(event.value)

    this.setState({ asset2: event.value })
  }
  onChangeAsset3(event) {
    console.log(event.value)

    this.setState({ asset3: event.value })
  }
  onChangeBatchId(event) {
    console.log(event.target.value)

    this.setState({ batchId: event.target.value })

  }
  onChangeCurrentTime(event) {
    console.log(event.target.value)

    this.setState({ currentTime: event.target.value })

  }
  onChangeLocation(event) {
    console.log(event.target.value)

    this.setState({ location: event.target.value })

  }
  onSubmit() {

    let obj = {
      "$class": "criminalsystem.Criminals",
      "Ministry": this.state.ministry,
      "SerialNo": this.state.serialNo,
      "Cnic": this.state.cnic,
      "Name": this.state.name,
      "crime": this.state.crime,
      "Description": this.state.crimeDescription,
      "sentenceStatus": this.state.sentenceStatus,
      "AssetDescription1": this.state.asset1,
      "AssetDescription2": this.state.asset2,
      "AssetDescription3": this.state.asset3,
      "batchId": this.state.batchId,
      "timeStamp": this.state.currentTime,
      "Location": this.state.location
    }

    console.log(obj)

    axios.post("http://35.222.10.88:3000/api/Criminals", obj).then(response => {
      if(response.status == 200){
        alert("Criminal has been added")
        this.setState({
          // currentTime: JSON.stringify(recentTime),
      // location: '24.878023199999998 , 67.0212071',
      ministry: '',
      serialNo: '',
      cnic: '',
      name: '',
      crime: '',
      crimeDescription: '',
      sentenceStatus: '',
      asset1: '',
      asset2: '',
      asset3: '',
      batchId: ''
        })
      }
      else{
        alert("Criminal has not been added Please Try again")
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
      <div className="form-styling" >

        <FormGroup>
          <Label for="exampleEmail">Select Ministry</Label>
          <Select
            className=" name "
            //   classNamePrefix="select"
            onChange={this.onChangeMinistry}
            //   name="color"
            options={ministryOption}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Serial no</Label>
          <Input
            type="text"
            name="Serial no"
            onChange={this.onChangeSerialNo}
            value={this.state.serialNo}
            id="serial no"
            placeholder="Serial no"
            disabled
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleUrl">CNIC</Label>
          <Input
            type="text"
            name="CNIC"
            onChange={this.onChangeCnic}
            value={this.state.cnic}
            id="cnic"
            placeholder="CNIC Number"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleNumber">Name</Label>
          <Input
            type="text"
            name="name"
            onChange={this.onChangeName}
            value={this.state.name}
            id="name"
            placeholder="Name"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleDatetime">Crime</Label>
          <Input
            type="text"
            name="crime"

            onChange={this.onChangeCrime}
            value={this.state.crime}
            id="crime"
            placeholder="Crime"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleDate">Crime Description</Label>
          <Input
            type="textarea"
            name="Crime Description"
            onChange={this.onChangeCrimeDescription}
            value={this.state.crimeDescription}
            id="crime description"
            placeholder="Crime Description"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleTime">Sentence Status</Label>
          <Select
            className=" name "
            //   classNamePrefix="select"
            onChange={this.onChangeSentenceStatus}
            //   name="color"
            options={status}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleColor">Select Asset 1</Label>
          <Select
            className=" name "
            onChange={this.onChangeAsset1}
            //  value = {this.state.asset1}
            options={assets}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleColor">Select Asset 2</Label>
          <Select
            className=" name "
            onChange={this.onChangeAsset2}
            //  value = {this.state.asset2}
            options={assets}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleColor">Select Asset 3</Label>
          <Select
            className=" name "
            onChange={this.onChangeAsset3}
            //  value = {this.state.asset3}
            options={assets}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSearch">Batch id</Label>
          <Input
            type="text"
            name="Batch id"
            onChange={this.onChangeBatchId}
            value={this.state.batchId}
            id="batch id"
            placeholder="Batch id"
          />
        </FormGroup>
        {console.log(this.state.currentTime)}
        <FormGroup>
          <Label for="exampleSelect">Timestamp</Label>
          <Input
            type="text"
            name="time"
            onChange={this.onChangeCurrentTime}
            id="time"
            value={this.state.currentTime}
            disabled>

          </Input>
        </FormGroup>
        {/* {console.log(this.props.coords)} */}
        <FormGroup>
          <Label for="exampleSelectMulti">Current location</Label>
          <Input
            type="text"
            name="Location"
            // onChange = {this.onChangeLocation}
            value={this.state.location}
            id="location"
            // value={this.state}
            disabled
          >

          </Input>

          <Button style={{ marginTop: "1em" }} onClick={this.onSubmit}>Add Criminal</Button>
        </FormGroup>

      </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(AddCriminal)
