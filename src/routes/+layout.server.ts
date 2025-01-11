import { gql } from 'graphql-request';

import { client } from '$lib/graphql/client';

import type { LayoutServerLoad } from './$types';

const GET_MENUS = gql`
  query GetMenus {
    primaryMenu: menu(id: "primary", idType: LOCATION) {
      menuItems {
        nodes {
          label
          url
        }
      }
    }
    secondaryMenu: menu(id: "secondary", idType: LOCATION) {
      menuItems {
        nodes {
          label
          url
        }
      }
    }
    footerCommunityMenu: menu(id: "footer-community", idType: LOCATION) {
      menuItems {
        nodes {
          label
          url
        }
      }
    }
    footerServicesMenu: menu(id: "footer-services", idType: LOCATION) {
      menuItems {
        nodes {
          label
          url
        }
      }
    }
    footerContactMenu: menu(id: "footer-contact", idType: LOCATION) {
      menuItems {
        nodes {
          label
          url
        }
      }
    }
  }
`;

export interface LayoutGQLDataMenuNodes {
  nodes?: {
    label?: string;
    url?: string;
  };
}
export interface LayoutGQLDataMenu {
  menuItems: LayoutGQLDataMenuNodes;
}
export interface LayoutGQLData {
  primaryMenu: LayoutGQLDataMenu;
  secondaryMenu: LayoutGQLDataMenu;
  footerCommunityMenu: LayoutGQLDataMenu;
  footerServicesMenu: LayoutGQLDataMenu;
  footerContactMenu: LayoutGQLDataMenu;
}
export const load: LayoutServerLoad = async ({ request, parent }) => {
  // Access cookies from the request
  const cookies = request.headers.get('cookie') || '';

  // Retrieve data from child routes
  const childData = await parent();

  // Example: Check for a session cookie and pass it down
  const isLoggedIn = cookies.includes('session=');

  // Query for Menus
  const data: LayoutGQLData = await client.request(GET_MENUS);

  // console.log({ request });

  if (!data) {
    throw new Error('Failed to fetch menus');
  }

  // Merge the child route's data with the layout's data
  return {
    ...childData,

    primaryMenu: data?.primaryMenu.menuItems.nodes,
    secondaryMenu: data?.secondaryMenu.menuItems.nodes,
    footerCommunityMenu: data?.footerCommunityMenu.menuItems.nodes,
    footerServicesMenu: data?.footerServicesMenu.menuItems.nodes,
    footerContactMenu: data?.footerContactMenu.menuItems.nodes,
    isLoggedIn,
  };
};
