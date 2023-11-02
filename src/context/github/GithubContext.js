import { createContext, useState, useReducer } from "react";
import { githubReducer } from "./GithubReducer";
const GithubContext = createContext();

const GITHUB_URL = "https://api.github.com";
const GITHUB_TOKEN = "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";

export const GithubProvider = ({ children }) => {
  // set initial repos as []
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Action
  const setLoading = (isLoading) => {
    dispatch({
      type: "SET_LOADING",
      payload: isLoading,
    });
  };

  const setUsers = (users) => {
    dispatch({
      type: "GET_USERS",
      payload: users,
    });
  };

  const getUserByLogin = async (login) => {
    setLoading(true);

    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    if (response.status === 404) {
      window.location = "/not-found";
      setLoading(false);
      return;
    }

    const data = await response.json();

    dispatch({
      type: "GET_USER",
      payload: data,
    });

    setLoading(false);
  };

  const fetchUsers = async (searchText) => {
    setLoading(true);
    const params = new URLSearchParams({
      q: searchText,
    });
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {});

    const { items } = await response.json();

    setUsers(items);
    setLoading(false);
  };

  // create function to get all the repos
  // dispatch loading
  // get repo github url: https://api.github.com/users/<login>/repos
  // get user repos
  // disptach GET_REPOS action

  const getUserRepos = async (login) => {
    setLoading(true);

    const response = await fetch(`${GITHUB_URL}/users/${login}/repos`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();

    dispatch({
      type: "GET_REPOS",
      payload: data,
    });

    setLoading(false);
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        repos: state.repos,
        fetchUsers,
        getUserByLogin,
        getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
