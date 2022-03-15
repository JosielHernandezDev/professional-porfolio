import React, { useState, useEffect, Suspense, lazy } from "react"
import "./Project.scss"

import { openSource, socialMediaLinks } from "../../../porfolio"
import Loading from "../../loading/loading"

import { Button } from "react-bootstrap"

export default function Projects() {
  const GithubRepoCard = lazy(() =>
    import("../../githubRepoCard/githubRepoCard")
  )

  const FailedLoading = () => null
  const renderLoader = () => <Loading />
  const [repo, setrepo] = useState([])

  const isDark = false

  useEffect(() => {
    const getRepoData = () => {
      fetch("/profile.json")
        .then(result => {
          if (result.ok) {
            return result.json()
          }
          throw result
        })
        .then(response => {
          setrepoFunction(response.data.user.pinnedItems.edges)
        })
        .catch(function (error) {
          console.error(
            `${error} (because of this error, nothing is shown in place of Projects section. Also check if Projects section has been configured)`
          )
          setrepoFunction("Error")
        })
    }
    getRepoData()
  }, [])

  function setrepoFunction(array) {
    setrepo(array)
  }

  if (
    !(typeof repo === "string" || repo instanceof String) &&
    openSource.display
  ) {
    const onClickHandle = url => {
      if (window !== "undefined") {
        // your document or window manipulation
        var win = window.open(url, "_blank")
        win.focus()
      }
    }

    return (
      <div id="projects" className="container my-5 main">
        <h1 className="project-title">Open Source Projects</h1>
        <div className="repo-cards-div-main">
          {repo.map((v, i) => {
            if (!v) {
              console.error(
                `Github Object for repository number : ${i} is undefined`
              )
            }
            return (
              <Suspense fallback={renderLoader()}>
                <GithubRepoCard repo={v} key={v.node.id} isDark={isDark} />
              </Suspense>
            )
          })}
        </div>
        <Button
          className="j-btn j-btn-primary project-button"
          onClick={() => onClickHandle(socialMediaLinks.github)}
        >
          More Projects
        </Button>
      </div>
    )
  } else {
    return <FailedLoading />
  }
}
