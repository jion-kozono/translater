/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const registerUser = /* GraphQL */ `
  mutation RegisterUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    registerUser(input: $input, condition: $condition) {
      id
      username
      email
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      email
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      userId
      content
      description
      createdAt
      updatedAt
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      userId
      content
      description
      createdAt
      updatedAt
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      userId
      content
      description
      createdAt
      updatedAt
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
export const createTranslationPost = /* GraphQL */ `
  mutation CreateTranslationPost(
    $input: CreateTranslationPostInput!
    $condition: ModelTranslationPostConditionInput
  ) {
    createTranslationPost(input: $input, condition: $condition) {
      id
      userId
      postId
      content
      createdAt
      updatedAt
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
export const updateTranslationPost = /* GraphQL */ `
  mutation UpdateTranslationPost(
    $input: UpdateTranslationPostInput!
    $condition: ModelTranslationPostConditionInput
  ) {
    updateTranslationPost(input: $input, condition: $condition) {
      id
      userId
      postId
      content
      createdAt
      updatedAt
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
export const deleteTranslationPost = /* GraphQL */ `
  mutation DeleteTranslationPost(
    $input: DeleteTranslationPostInput!
    $condition: ModelTranslationPostConditionInput
  ) {
    deleteTranslationPost(input: $input, condition: $condition) {
      id
      userId
      postId
      content
      createdAt
      updatedAt
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
export const createPostLike = /* GraphQL */ `
  mutation CreatePostLike(
    $input: CreatePostLikeInput!
    $condition: ModelPostLikeConditionInput
  ) {
    createPostLike(input: $input, condition: $condition) {
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
export const updatePostLike = /* GraphQL */ `
  mutation UpdatePostLike(
    $input: UpdatePostLikeInput!
    $condition: ModelPostLikeConditionInput
  ) {
    updatePostLike(input: $input, condition: $condition) {
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
export const deletePostLike = /* GraphQL */ `
  mutation DeletePostLike(
    $input: DeletePostLikeInput!
    $condition: ModelPostLikeConditionInput
  ) {
    deletePostLike(input: $input, condition: $condition) {
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
export const createTranslationPostLike = /* GraphQL */ `
  mutation CreateTranslationPostLike(
    $input: CreateTranslationPostLikeInput!
    $condition: ModelTranslationPostLikeConditionInput
  ) {
    createTranslationPostLike(input: $input, condition: $condition) {
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
export const updateTranslationPostLike = /* GraphQL */ `
  mutation UpdateTranslationPostLike(
    $input: UpdateTranslationPostLikeInput!
    $condition: ModelTranslationPostLikeConditionInput
  ) {
    updateTranslationPostLike(input: $input, condition: $condition) {
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
export const deleteTranslationPostLike = /* GraphQL */ `
  mutation DeleteTranslationPostLike(
    $input: DeleteTranslationPostLikeInput!
    $condition: ModelTranslationPostLikeConditionInput
  ) {
    deleteTranslationPostLike(input: $input, condition: $condition) {
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
