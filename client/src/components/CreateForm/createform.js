import React, { Component } from "react";
import API from "../../utils/API";
import "./index.css";
import { Redirect } from "react-router-dom";
import LoginHeader from "../DMHeader";

class CreateForm extends Component {
  // Setting the component's initial state
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      firstName: "",
      lastName: "",
      city: "",
      state: "",
      bio: "",
      jobtitle: "",
      img: "",
      toaccount: false
    }
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const fuck = document.getElementsByClassName("formInputs");
    var companies = [
      {
        employerName: "FUCK FACE!",
        employerId: "1234"
      },
      {
        employerName: "SHIT FACE",
        employerId: "5678"
      }
    ]
    var user = {
      userName: fuck.username.value,
      password: fuck.password.value,
      matches: companies
    }
    console.log(user);
    // console.log(Date.now)
    // Preventing the default behavior of the form submit (which is to refresh the page)

    API.createUser(user)
    // .then((response) => {
    //   console.log("THIS IS IN THE handleFormSubmit FUNCTION IN THE FORM COMPONENT");
    //   console.log("++++++++++++++++++++++++==================================++++++++++++++++++++++++++");
    //   this.setState({
    //     userName: "",
    //     password: ""
    //   });



    // }).catch((err) => {
    //   console.log(err);
    // })



    // // window.location.replace("/myaccount")
  };

  getAccount = (event) => {
    event.preventDefault();
    const fuck = document.getElementsByClassName("formInputs");
    var user = {
      userName: fuck.userName.value,
      password: fuck.password.value
    }
    console.log(user);

    API.logIn(user);


    // API.getUser(user).then((res) => {
    //   console.log("THIS IS AFTER GETUSER IN THE FORM COMPONENT")
    //   console.log(res.data[0].userName);

    //   // this.setState({
    //   //   userName: "",
    //   //   password: ""
    //   // });
    //   window.location.replace("/myaccount" + "/" + res.data[0].userName)
    // }).catch((err) => {
    //   console.log(err);
    // })

  }

  deleteAccount = (event) => {
    event.preventDefault();
    var userInputs = document.getElementsByClassName("formInputs");
    var userAccount = {
      userName: userInputs.userName.value,
      password: userInputs.password.value
    }
    API.deleteUser(userAccount).then((res) => {
      console.log("loginform.js code line 106: ...");
      console.log(res);
      console.log("loginform.js code line 106: ^^^")
    })
  }

  mainCard = (event) => {
    event.preventDefault();
    // let history = useHistory();
    // this.props.history.push('/myAccount');
    var userInputs = document.getElementsByClassName("formInputs");
    var userAccount = {
      userName: userInputs.userName.value,
      password: userInputs.password.value
    }
    // console.log(userInputs.userName.value);
    // console.log(userInputs.password.value);
    console.log(userAccount);
    console.log("THIS IS THE mainCard IN THE FORM COMPONENT");

    API.userInfo(userAccount)
      .then((response) => {
        var user = {
          userName: response.data[0].userName,
          password: response.data[0].password
        }
        console.log("loginform.js code line 132: ...");
        console.log(user);
        console.log("loginform.js code line 132: ^^^");
        // this.props.history.push("/myAccount")
        // <MainCard account={user} />

        // API.mainCard(user)
      })
    // .then((response) => {
    //   // window.location.href = "/myAccount"
    //   console.log(response);
    //   console.log("THIS IS THE RESPONSE IN THE MAINCARD FUNCTION IN FORM COMPONENT")

    // })
    // .then((res) => {
    //   console.log(res);
    //   console.log("MAIN CARD FUNCTION IN FORM COMPONENT")
    // })
    // API.mainCard()
  }

  test = (event) => {
    event.preventDefault();
    var user = {
      username: "poop",
      password: "goh"
    }
    console.log('------');
    this.setState({ toAccount: true, account: user })
    // this.forceUpdate();
  }

  createAccount = (event) => {
    event.preventDefault();
    console.log(this.state)
    console.log("HELLO THIS IS THE STATE")
    var user = this.state
    // console.log(user)
    API.createUser(user).then((response) => {
      console.log(response);
    })
  }

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    // if (this.res.data){
    //     return <Nav/>;
    // } else {    

    return (

      <div className="form">
        <form>
          <div className="input-container">
            <label>UserName</label>
            <input
              onChange={this.handleInputChange}
              type="text" name="userName"
              value={this.state.userName}
              className="formInputs" />

            <label>password</label>
            <input
              onChange={this.handleInputChange}
              type="password" name="password"
              value={this.state.password}
              className="formInputs" />

            <label>First Name</label>

            <input
              onChange={this.handleInputChange}
              type="text" name="firstName"
              value={this.state.firstName}
              className="formInputs" />

            <label>last name</label>

            <input
              onChange={this.handleInputChange}
              type="text" name="lastName"
              value={this.state.lastName}
              className="formInputs" />

            <label>city</label>

            <input
              onChange={this.handleInputChange}
              type="text" name="city"
              value={this.state.city}
              className="formInputs" />

            <label>state</label>

            <input
              onChange={this.handleInputChange}
              type="text" name="state"
              value={this.state.state}
              className="formInputs" />

            <label>bio</label>

            <input
              onChange={this.handleInputChange}
              type="text" name="bio"
              value={this.state.bio}
              className="formInputs" />

            <label>Job title</label>

            <input
              onChange={this.handleInputChange}
              type="text" name="jobtitle"
              value={this.state.jobTitle}
              className="formInputs" />

            <label>img</label>
            <input
              onChange={this.handleInputChange}
              type="text" name="img"
              value={this.state.img}
              className="formInputs" />
          </div>
          <div>
            <input //Create Button
              className="modal-btn"
              type="submit"
              value="Create" onClick={this.createAccount} />
          </div>
        </form>
      </div>
    );
  }
}
//}

export default CreateForm;
