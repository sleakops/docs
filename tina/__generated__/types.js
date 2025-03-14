export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const DocPartsFragmentDoc = gql`
    fragment DocParts on Doc {
  __typename
  title
  description
  tags
  body
}
    `;
export const PostPartsFragmentDoc = gql`
    fragment PostParts on Post {
  __typename
  title
  authors {
    __typename
    name
    title
    url
    image_url
  }
  date
  tags
  body
}
    `;
export const HomepagePartsFragmentDoc = gql`
    fragment HomepageParts on Homepage {
  __typename
  _warning
  label
  title
  description
  blocks {
    __typename
    ... on HomepageBlocksHero {
      title
      subtitle
      document {
        ... on Doc {
          __typename
          title
          description
          tags
          body
        }
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
      }
      documentLabel
    }
    ... on HomepageBlocksFeatures {
      items {
        __typename
        title
        description
        image
      }
    }
    ... on HomepageBlocksYouTubeEmbed {
      title
      url
      caption
    }
  }
}
    `;
export const PagesPartsFragmentDoc = gql`
    fragment PagesParts on Pages {
  __typename
  title
  description
  body
}
    `;
export const SidebarPartsFragmentDoc = gql`
    fragment SidebarParts on Sidebar {
  __typename
  _warning
  label
  items {
    __typename
    ... on SidebarItemsCategory {
      title
      link
      docLink {
        ... on Doc {
          __typename
          title
          description
          tags
          body
        }
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
      }
      items {
        __typename
        ... on SidebarItemsCategoryItemsCategory {
          title
          link
          docLink {
            ... on Doc {
              __typename
              title
              description
              tags
              body
            }
            ... on Document {
              _sys {
                filename
                basename
                hasReferences
                breadcrumbs
                path
                relativePath
                extension
              }
              id
            }
          }
          items {
            __typename
            ... on SidebarItemsCategoryItemsCategoryItemsCategory {
              title
              link
              docLink {
                ... on Doc {
                  __typename
                  title
                  description
                  tags
                  body
                }
                ... on Document {
                  _sys {
                    filename
                    basename
                    hasReferences
                    breadcrumbs
                    path
                    relativePath
                    extension
                  }
                  id
                }
              }
              items {
                __typename
                ... on SidebarItemsCategoryItemsCategoryItemsCategoryItemsDoc {
                  document {
                    ... on Doc {
                      __typename
                      title
                      description
                      tags
                      body
                    }
                    ... on Document {
                      _sys {
                        filename
                        basename
                        hasReferences
                        breadcrumbs
                        path
                        relativePath
                        extension
                      }
                      id
                    }
                  }
                  label
                }
                ... on SidebarItemsCategoryItemsCategoryItemsCategoryItemsLink {
                  title
                  href
                }
              }
            }
            ... on SidebarItemsCategoryItemsCategoryItemsDoc {
              document {
                ... on Doc {
                  __typename
                  title
                  description
                  tags
                  body
                }
                ... on Document {
                  _sys {
                    filename
                    basename
                    hasReferences
                    breadcrumbs
                    path
                    relativePath
                    extension
                  }
                  id
                }
              }
              label
            }
            ... on SidebarItemsCategoryItemsCategoryItemsLink {
              title
              href
            }
          }
        }
        ... on SidebarItemsCategoryItemsDoc {
          document {
            ... on Doc {
              __typename
              title
              description
              tags
              body
            }
            ... on Document {
              _sys {
                filename
                basename
                hasReferences
                breadcrumbs
                path
                relativePath
                extension
              }
              id
            }
          }
          label
        }
        ... on SidebarItemsCategoryItemsLink {
          title
          href
        }
      }
    }
    ... on SidebarItemsDoc {
      document {
        ... on Doc {
          __typename
          title
          description
          tags
          body
        }
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
      }
      label
    }
    ... on SidebarItemsLink {
      title
      href
    }
  }
}
    `;
export const SettingsPartsFragmentDoc = gql`
    fragment SettingsParts on Settings {
  __typename
  _warning
  label
  logo {
    __typename
    alt
    src
  }
  title
  tagline
  url
  navbar {
    __typename
    label
    link
    docLink {
      ... on Doc {
        __typename
        title
        description
        tags
        body
      }
      ... on Document {
        _sys {
          filename
          basename
          hasReferences
          breadcrumbs
          path
          relativePath
          extension
        }
        id
      }
    }
    pageLink {
      ... on Pages {
        __typename
        title
        description
        body
      }
      ... on Document {
        _sys {
          filename
          basename
          hasReferences
          breadcrumbs
          path
          relativePath
          extension
        }
        id
      }
    }
    externalLink
    position
    items {
      __typename
      label
      link
      docLink {
        ... on Doc {
          __typename
          title
          description
          tags
          body
        }
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
      }
      pageLink {
        ... on Pages {
          __typename
          title
          description
          body
        }
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
      }
      externalLink
      position
      items {
        __typename
        label
        link
        docLink {
          ... on Doc {
            __typename
            title
            description
            tags
            body
          }
          ... on Document {
            _sys {
              filename
              basename
              hasReferences
              breadcrumbs
              path
              relativePath
              extension
            }
            id
          }
        }
        pageLink {
          ... on Pages {
            __typename
            title
            description
            body
          }
          ... on Document {
            _sys {
              filename
              basename
              hasReferences
              breadcrumbs
              path
              relativePath
              extension
            }
            id
          }
        }
        externalLink
        position
      }
    }
  }
  footer {
    __typename
    style
    links {
      __typename
      title
      items {
        __typename
        ... on SettingsFooterLinksItemsInternal {
          label
          to {
            ... on Doc {
              __typename
              title
              description
              tags
              body
            }
            ... on Pages {
              __typename
              title
              description
              body
            }
            ... on Post {
              __typename
              title
              authors {
                __typename
                name
                title
                url
                image_url
              }
              date
              tags
              body
            }
            ... on Document {
              _sys {
                filename
                basename
                hasReferences
                breadcrumbs
                path
                relativePath
                extension
              }
              id
            }
          }
        }
        ... on SettingsFooterLinksItemsBlog {
          label
        }
        ... on SettingsFooterLinksItemsExternal {
          label
          href
        }
      }
    }
    copyright
  }
}
    `;
export const DocDocument = gql`
    query doc($relativePath: String!) {
  doc(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...DocParts
  }
}
    ${DocPartsFragmentDoc}`;
export const DocConnectionDocument = gql`
    query docConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: DocFilter) {
  docConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...DocParts
      }
    }
  }
}
    ${DocPartsFragmentDoc}`;
export const PostDocument = gql`
    query post($relativePath: String!) {
  post(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PostParts
  }
}
    ${PostPartsFragmentDoc}`;
export const PostConnectionDocument = gql`
    query postConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PostFilter) {
  postConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PostParts
      }
    }
  }
}
    ${PostPartsFragmentDoc}`;
export const HomepageDocument = gql`
    query homepage($relativePath: String!) {
  homepage(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...HomepageParts
  }
}
    ${HomepagePartsFragmentDoc}`;
export const HomepageConnectionDocument = gql`
    query homepageConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: HomepageFilter) {
  homepageConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...HomepageParts
      }
    }
  }
}
    ${HomepagePartsFragmentDoc}`;
export const PagesDocument = gql`
    query pages($relativePath: String!) {
  pages(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PagesParts
  }
}
    ${PagesPartsFragmentDoc}`;
export const PagesConnectionDocument = gql`
    query pagesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PagesFilter) {
  pagesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PagesParts
      }
    }
  }
}
    ${PagesPartsFragmentDoc}`;
export const SidebarDocument = gql`
    query sidebar($relativePath: String!) {
  sidebar(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...SidebarParts
  }
}
    ${SidebarPartsFragmentDoc}`;
export const SidebarConnectionDocument = gql`
    query sidebarConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: SidebarFilter) {
  sidebarConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...SidebarParts
      }
    }
  }
}
    ${SidebarPartsFragmentDoc}`;
export const SettingsDocument = gql`
    query settings($relativePath: String!) {
  settings(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...SettingsParts
  }
}
    ${SettingsPartsFragmentDoc}`;
export const SettingsConnectionDocument = gql`
    query settingsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: SettingsFilter) {
  settingsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...SettingsParts
      }
    }
  }
}
    ${SettingsPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    doc(variables, options) {
      return requester(DocDocument, variables, options);
    },
    docConnection(variables, options) {
      return requester(DocConnectionDocument, variables, options);
    },
    post(variables, options) {
      return requester(PostDocument, variables, options);
    },
    postConnection(variables, options) {
      return requester(PostConnectionDocument, variables, options);
    },
    homepage(variables, options) {
      return requester(HomepageDocument, variables, options);
    },
    homepageConnection(variables, options) {
      return requester(HomepageConnectionDocument, variables, options);
    },
    pages(variables, options) {
      return requester(PagesDocument, variables, options);
    },
    pagesConnection(variables, options) {
      return requester(PagesConnectionDocument, variables, options);
    },
    sidebar(variables, options) {
      return requester(SidebarDocument, variables, options);
    },
    sidebarConnection(variables, options) {
      return requester(SidebarConnectionDocument, variables, options);
    },
    settings(variables, options) {
      return requester(SettingsDocument, variables, options);
    },
    settingsConnection(variables, options) {
      return requester(SettingsConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "http://localhost:4001/graphql",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
