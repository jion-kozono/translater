/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        username
        email
        selfIntroduction
        score
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        posts {
          nextToken
          startedAt
        }
        translationPosts {
          nextToken
          startedAt
        }
        Postikes {
          nextToken
          startedAt
        }
        translationPostikes {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      selfIntroduction
      score
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      posts {
        items {
          id
          userId
          content
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      translationPosts {
        items {
          id
          userId
          postId
          content
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Postikes {
        items {
          id
          userId
          postId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      translationPostikes {
        items {
          id
          userId
          translationPostId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        selfIntroduction
        score
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        posts {
          nextToken
          startedAt
        }
        translationPosts {
          nextToken
          startedAt
        }
        Postikes {
          nextToken
          startedAt
        }
        translationPostikes {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const userByEmail = /* GraphQL */ `
  query UserByEmail(
    $email: AWSEmail
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userByEmail(
      email: $email
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        username
        email
        selfIntroduction
        score
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        posts {
          nextToken
          startedAt
        }
        translationPosts {
          nextToken
          startedAt
        }
        Postikes {
          nextToken
          startedAt
        }
        translationPostikes {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      userId
      content
      description
      createdAt
      updatedAt
      user {
        id
        username
        email
        selfIntroduction
        score
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        posts {
          nextToken
          startedAt
        }
        translationPosts {
          nextToken
          startedAt
        }
        Postikes {
          nextToken
          startedAt
        }
        translationPostikes {
          nextToken
          startedAt
        }
      }
      _version
      _deleted
      _lastChangedAt
      translationPosts {
        items {
          id
          userId
          postId
          content
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      postLikes {
        items {
          id
          userId
          postId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        content
        description
        createdAt
        updatedAt
        user {
          id
          username
          email
          selfIntroduction
          score
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
        translationPosts {
          nextToken
          startedAt
        }
        postLikes {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const searchPosts = /* GraphQL */ `
  query SearchPosts(
    $filter: SearchablePostFilterInput
    $sort: SearchablePostSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchPosts(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        content
        description
        createdAt
        updatedAt
        user {
          id
          username
          email
          selfIntroduction
          score
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
        translationPosts {
          nextToken
          startedAt
        }
        postLikes {
          nextToken
          startedAt
        }
      }
      nextToken
      total
    }
  }
`;
export const syncPosts = /* GraphQL */ `
  query SyncPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userId
        content
        description
        createdAt
        updatedAt
        user {
          id
          username
          email
          selfIntroduction
          score
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
        translationPosts {
          nextToken
          startedAt
        }
        postLikes {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getTranslationPost = /* GraphQL */ `
  query GetTranslationPost($id: ID!) {
    getTranslationPost(id: $id) {
      id
      userId
      postId
      content
      createdAt
      updatedAt
      user {
        id
        username
        email
        selfIntroduction
        score
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        posts {
          nextToken
          startedAt
        }
        translationPosts {
          nextToken
          startedAt
        }
        Postikes {
          nextToken
          startedAt
        }
        translationPostikes {
          nextToken
          startedAt
        }
      }
      _version
      _deleted
      _lastChangedAt
      translationPostLikes {
        items {
          id
          userId
          translationPostId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const listTranslationPosts = /* GraphQL */ `
  query ListTranslationPosts(
    $filter: ModelTranslationPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTranslationPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        postId
        content
        createdAt
        updatedAt
        user {
          id
          username
          email
          selfIntroduction
          score
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
        translationPostLikes {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTranslationPosts = /* GraphQL */ `
  query SyncTranslationPosts(
    $filter: ModelTranslationPostFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTranslationPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userId
        postId
        content
        createdAt
        updatedAt
        user {
          id
          username
          email
          selfIntroduction
          score
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
        translationPostLikes {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getPostLike = /* GraphQL */ `
  query GetPostLike($id: ID!) {
    getPostLike(id: $id) {
      id
      userId
      postId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listPostLikes = /* GraphQL */ `
  query ListPostLikes(
    $filter: ModelPostLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        postId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPostLikes = /* GraphQL */ `
  query SyncPostLikes(
    $filter: ModelPostLikeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPostLikes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userId
        postId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTranslationPostLike = /* GraphQL */ `
  query GetTranslationPostLike($id: ID!) {
    getTranslationPostLike(id: $id) {
      id
      userId
      translationPostId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTranslationPostLikes = /* GraphQL */ `
  query ListTranslationPostLikes(
    $filter: ModelTranslationPostLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTranslationPostLikes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        translationPostId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTranslationPostLikes = /* GraphQL */ `
  query SyncTranslationPostLikes(
    $filter: ModelTranslationPostLikeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTranslationPostLikes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userId
        translationPostId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
