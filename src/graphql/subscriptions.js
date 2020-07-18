/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateTranslationPost = /* GraphQL */ `
  subscription OnCreateTranslationPost {
    onCreateTranslationPost {
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
export const onUpdateTranslationPost = /* GraphQL */ `
  subscription OnUpdateTranslationPost {
    onUpdateTranslationPost {
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
export const onDeleteTranslationPost = /* GraphQL */ `
  subscription OnDeleteTranslationPost {
    onDeleteTranslationPost {
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
