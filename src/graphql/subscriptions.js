/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask($owner: String!) {
    onCreateTask(owner: $owner) {
      id
      title
      description
      status
      owner
    }
  }
`;
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask($owner: String!) {
    onUpdateTask(owner: $owner) {
      id
      title
      description
      status
      owner
    }
  }
`;
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask($owner: String!) {
    onDeleteTask(owner: $owner) {
      id
      title
      description
      status
      owner
    }
  }
`;
