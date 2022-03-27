import React from "react";
import Repos from "./Repos";
import dateFormat from "dateformat";

export default function Profile(user) {
  const twitter = user.profile.twitter_username;
  const blogurl = user.profile.blog;
  return (
    <div className="sticky-top scrolly">
      <img src={user.profile.avatar_url} className="img-fluid rounded-circle" alt="" />
      <div className="text-center">
        <h1>{user.profile.name}</h1>
        <p>{user.profile.login}</p>
        <p>{user.profile.bio}</p>
      </div>
      <a
        href={user.profile.html_url}
        className="btn btn-primary btn-block mt-3 mb-3 w-100"
      >
        View Profile
      </a>
      <div class="">
      <span className="badge bg-success">
        Followers: {user.profile.followers}
      </span>
      <span className="badge bg-warning">
        Following: {user.profile.following}
      </span>
      <span className="badge bg-primary">
        Public Repos: {user.profile.public_repos}
      </span>
      <span className="badge bg-info">
        Public Gists: {user.profile.public_gists}
      </span>
      </div>
      <ul className="text-left mt-4 mb-2 p-0">
        <li className="list-group-item">Company: {user.profile.company}</li>
        <li className="list-group-item">
          Website:
          <a className="text-decoration-none" href={`http://${blogurl}`}>
            {user.profile.blog}
          </a>
        </li>
        <li className="list-group-item">
          Twitter:
          <a
            className="text-decoration-none"
            href={`http://www.twitter.com/${twitter}`}
          >
            {user.profile.twitter_username}
          </a>
        </li>
        <li className="list-group-item">Address: {user.profile.location}</li>
        <li className="list-group-item">
          Member Since: {dateFormat(user.profile.created_at, "dS mmmm yyyy")}
        </li>
      </ul>
    </div>
  );
}
