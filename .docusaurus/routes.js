import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '081'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'ef7'),
    routes: [
      {
        path: '/docs/Blockchain/',
        component: ComponentCreator('/docs/Blockchain/', 'ebb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Blockchain/Mecanismo de Consenso',
        component: ComponentCreator('/docs/Blockchain/Mecanismo de Consenso', '0db'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/blockchain---fundamentos',
        component: ComponentCreator('/docs/category/blockchain---fundamentos', '7f1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/plataformas',
        component: ComponentCreator('/docs/category/plataformas', '74f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Plataformas/Ethereum',
        component: ComponentCreator('/docs/Plataformas/Ethereum', 'e14'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Plataformas/Hyperledger',
        component: ComponentCreator('/docs/Plataformas/Hyperledger', 'be9'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '57d'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
