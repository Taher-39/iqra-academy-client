import { NavLink } from 'react-router-dom';
import { TSidebarItem, TUserPath } from '../Types';

export const sidebarItemsGenerator = (items: TUserPath[], role: string): TSidebarItem[] => {
  return items.map(item => {
    const sidebarItem: TSidebarItem = {
      key: item.name,
      label: item.path ? <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink> : item.name
    };

    if (item.children) {
      sidebarItem.children = item.children.map(child => ({
        key: child.name,
        label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>
      }));
    }

    return sidebarItem;
  });
};
