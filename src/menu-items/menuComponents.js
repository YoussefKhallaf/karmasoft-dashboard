// third-party
import { FormattedMessage } from 'react-intl';
import {
  LineChartOutlined,
  IdcardOutlined,
  DatabaseOutlined,
  PieChartOutlined,
  TagOutlined,
  ExperimentOutlined,
  BarcodeOutlined,
  DollarOutlined
} from '@ant-design/icons';

// assets

const icons = {
  LineChartOutlined,
  IdcardOutlined,
  DatabaseOutlined,
  PieChartOutlined,
  TagOutlined,
  ExperimentOutlined,
  DollarOutlined,
  BarcodeOutlined
};

const menuComponents = {
  id: 'menu-items-display',
  url: '#',
  type: 'group',
  icon: icons.LineChartOutlined,
  children: [
    {
      id: 'sales menu-items-display',
      url: '/dashboard/analytics',
      title: <FormattedMessage id="sales" />,
      type: 'item',
      icon: icons.LineChartOutlined
    },
    {
      id: 'marketing',
      url: '/marketing',
      title: <FormattedMessage id="marketing" />,
      type: 'item',
      icon: icons.PieChartOutlined
    },
    {
      id: 'attendence',
      url: '/attendence',
      title: <FormattedMessage id="attendence" />,
      type: 'item',
      icon: icons.TagOutlined
    },
    {
      id: 'analysis',
      url: '/analysis',
      title: <FormattedMessage id="analysis" />,
      type: 'item',
      icon: icons.ExperimentOutlined
    },
    {
      id: 'payroll',
      title: <FormattedMessage id="payroll" />,
      type: 'item',
      icon: icons.DollarOutlined
    },
    {
      id: 'inventory',
      title: <FormattedMessage id="inventory" />,
      type: 'item',
      icon: icons.BarcodeOutlined
    }
  ]
};

export default menuComponents;
