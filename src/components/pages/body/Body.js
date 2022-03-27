import React, { Component } from "react";
import Profile from "./Profile";
import Repos from "./Repos";
import axios from "axios";
import { clientID, clientSecret } from "../../GithubCredintials";

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      profile: null,
      repos: null,
    };
  }

  updateInput = (e) => {
    this.setState({
      ...this.state,
      username: e.target.value,
    });
  };

  //Form Submit
  searchUser = (event) => {
    event.preventDefault();
    this.searchProfile();
    this.searchRepos();
  };

  // Search a Profile
  searchProfile = () => {
    axios
      .get(
        `https://api.github.com/users/${this.state.username}?clientId=${clientID}&clientSecret=${clientSecret}`
      )
      .then((res) => {
        this.setState({
          profile: res.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // Search a Repos
  searchRepos = () => {
    axios
      .get(
        `https://api.github.com/users/${this.state.username}/repos?page=1&per_page=100&clientId=${clientID}&clientSecret=${clientSecret}`
      )
      .then((res) => {
        this.setState({
          repos: res.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
  // Pagination

  render() {
    return (
      <main>
        <div className="container searchContainer">
          <div className="search card card-body">
            <div className="row">
              <div className="col-lg-6">
                <h1>Github User's</h1>
              </div>
              <div className="col-lg-6">
                <form className="form-inline w-100" onSubmit={this.searchUser}>
                  <input
                    onChange={this.updateInput}
                    value={this.state.username}
                    type="text"
                    className="form-control"
                    id="searchUser"
                    placeholder="Github Username....."
                  />
                  <input
                    type="submit"
                    id="searchBtn"
                    className="btn btn-primary"
                    value="Search"
                  />
                </form>
              </div>
            </div>
          </div>

          <div id="profile">
            <div className="card card-body mb-3">
              <div className="row">
                <div className="col-lg-3">
                  {this.state.profile ? (
                    <Profile profile={this.state.profile} />
                  ) : null}
                </div>
                <div className="col-lg-9">
                  {this.state.repos ? <Repos repos={this.state.repos} /> : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
