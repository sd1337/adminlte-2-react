import React, { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types';
import { splitIcon } from '../Utilities';

interface Props {
  icon?: string,
  title?: string,
  titleLeft?: boolean,
}

const TabTitle = ({ title, titleLeft, icon }: Props): ReactElement => {
  const hasIcon = !!(icon);
  const localIcon = hasIcon ? splitIcon(icon) : null;
  const hasTitle = !!(title);
  const hasIconOrHeader = hasIcon || hasTitle;
  if (hasIconOrHeader) {
    return (
      <li className={`header${titleLeft ? ' pull-left' : ''}`}>
        {hasIcon && <FontAwesomeIcon icon={localIcon as [IconPrefix, IconName]} />}
        {hasTitle ? ` ${title}` : ''}
      </li>
    );
  }
  return <></>;
};

TabTitle.defaultProps = {
  icon: undefined,
  title: undefined,
  titleLeft: false,
};

export default TabTitle;
