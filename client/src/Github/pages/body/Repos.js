import React from "react";
import dateFormat from "dateformat";

export default function Repos(user) {
  // console.log(user.repos);
  const repos = user.repos;

  return (
    <div id="repos">
      {repos.map((repo) => {
        return (
          <div key={repo.id} className="card card-body mb-3">
            <div className="row">
              <div className="col-md-6">
                <div className="repod">
                  <h3>
                    <a
                      className="mb-6 text-uppercase text-decoration-none"
                      href={repo.html_url}
                      target="_blank"
                    >
                      {repo.name}
                    </a>
                  </h3>
                  <p className="mt-2 mb-2">{repo.description}</p>
                  <p>
                    Language:{" "}
                    <span className="badge bg-info">{repo.language}</span>
                  </p>
                  <p>
                    Demo:{" "}
                    {repo.homepage ? (
                      <a href={repo.homepage}>Click Here</a>
                    ) : null}
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex justify-content-end">
                  <span className="badge bg-primary p-2 mx-2">
                    Stars: {repo.stargazers_count}
                  </span>
                  <span className="badge bg-secondary p-2 mx-2">
                    Watchers: {repo.watchers_count}
                  </span>
                  <span className="badge bg-success p-2">
                    Forks: {repo.forks_count}
                  </span>
                </div>
                <div className="d-flex justify-content-end">
                  <span className=" d-block mt-3">
                    Crated:{" "}
                    {dateFormat(repo.created_at, "dS mmm yyyy, h:MM TT")}
                  </span>
                </div>
                <div className="d-flex justify-content-end">
                  <span className=" d-block mt-3">
                    Update:{" "}
                    {dateFormat(repo.updated_at, "dS mmm yyyy, h:MM TT")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
