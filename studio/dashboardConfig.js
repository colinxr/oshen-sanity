export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f4564b919894e4d52cc8cb5',
                  title: 'Sanity Studio',
                  name: 'oshen-sanity-studio',
                  apiId: 'f75615fd-a92c-42c6-9312-0520a95c9a58'
                },
                {
                  buildHookId: '5f4564b98f1da50a9f8397e2',
                  title: 'Blog Website',
                  name: 'oshen-sanity',
                  apiId: '96f26efc-f2bf-49e6-b248-04f52d3c2d07'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/colinxr/oshen-sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://oshen-sanity.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
