/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
        nextToken
        startedAt
      }
      postLikes {
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
        nextToken
        startedAt
      }
      postLikes {
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
        nextToken
        startedAt
      }
      postLikes {
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateTranslationPost = /* GraphQL */ `
  subscription OnCreateTranslationPost {
    onCreateTranslationPost {
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
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateTranslationPost = /* GraphQL */ `
  subscription OnUpdateTranslationPost {
    onUpdateTranslationPost {
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
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteTranslationPost = /* GraphQL */ `
  subscription OnDeleteTranslationPost {
    onDeleteTranslationPost {
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
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreatePostLike = /* GraphQL */ `
  subscription OnCreatePostLike {
    onCreatePostLike {
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
export const onUpdatePostLike = /* GraphQL */ `
  subscription OnUpdatePostLike {
    onUpdatePostLike {
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
export const onDeletePostLike = /* GraphQL */ `
  subscription OnDeletePostLike {
    onDeletePostLike {
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
export const onCreateTranslationPostLike = /* GraphQL */ `
  subscription OnCreateTranslationPostLike {
    onCreateTranslationPostLike {
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
export const onUpdateTranslationPostLike = /* GraphQL */ `
  subscription OnUpdateTranslationPostLike {
    onUpdateTranslationPostLike {
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
export const onDeleteTranslationPostLike = /* GraphQL */ `
  subscription OnDeleteTranslationPostLike {
    onDeleteTranslationPostLike {
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
