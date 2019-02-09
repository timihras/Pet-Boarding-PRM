import React from 'react'
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import styled from 'styled-components'
import { Card } from '../../../components/styles/page'

const data = [
  { name: 'Aug 18', revenue: 900, pv: 2400, amt: 2400 },
  { name: 'Sep 18', revenue: 1000, pv: 1398, amt: 2210 },
  { name: 'Oct 18', revenue: 1200, pv: 9800, amt: 2290 },
  { name: 'Nov 18', revenue: 1080, pv: 3908, amt: 2000 },
  { name: 'Dec 18', revenue: 1290, pv: 4800, amt: 2181 },
  { name: 'Jan 19', revenue: 990, pv: 3800, amt: 2500 },
  // { name: 'Feb 19', revenue: 3490, pv: 4300, amt: 2100 },
];

const StackedAreaChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <CartesianGrid stroke='#f2f2f2' />
        <XAxis hide dataKey="name" />
        <YAxis mirror />
        <Tooltip content={<TooltipEuro />} />
        <Area type='monotone' dataKey='revenue' stroke='#D2AEBB' fill='#D45983' />
      </AreaChart>
    </ResponsiveContainer >
  )
}

const TooltipCard = styled(Card)`
  text-align: center;
  padding: ${props => props.theme.sizeXS} ${props => props.theme.sizeM};

  .title {
    font-weight: 700
  }

  .subtitle {
    font-size: ${props => props.theme.fontSizeXS};
    color: ${props => props.theme.disabledTextColor};
  }
`;

const TooltipEuro = (props) => {

  const { active } = props
  if (active) {
    const { payload, label } = props
    return (
      <TooltipCard>
        <div className="title">{label} </div>
        <div className="subtitle">{payload[0].value} €</div>
      </TooltipCard>
    )
  }
  return null;
};

export default StackedAreaChart;