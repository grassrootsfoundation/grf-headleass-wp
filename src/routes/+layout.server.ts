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
    communityMenu: menu(id: "footer-community", idType: LOCATION) {
      menuItems {
        nodes {
          label
          url
        }
      }
    }
    servicesMenu: menu(id: "footer-services", idType: LOCATION) {
      menuItems {
        nodes {
          label
          url
        }
      }
    }
    contactMenu: menu(id: "footer-contact", idType: LOCATION) {
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
  communityMenu: LayoutGQLDataMenu;
  servicesMenu: LayoutGQLDataMenu;
  contactMenu: LayoutGQLDataMenu;
}
export const load: LayoutServerLoad = async ({ request, parent }) => {
  // Access cookies from the request
  const cookies = request.headers.get('cookie') || '';

  // Retrieve data from child routes
  const childData = await parent();

  // Example: Check for a session cookie and pass it down
  const isLoggedIn = cookies.includes('session=');

  // Query for Menus
  try {
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
      communityMenu: data?.communityMenu.menuItems.nodes,
      servicesMenu: data?.servicesMenu.menuItems.nodes,
      contactMenu: data?.contactMenu.menuItems.nodes,
      isLoggedIn,
    };
  } catch (error) {
    const err = error as Error;
    console.error('GraphQL Error:', err.message);
  }
};
