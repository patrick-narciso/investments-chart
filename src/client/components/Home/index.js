import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-awesome-styled-grid';
import { Card, Radio } from 'antd';
import useFetch from 'client/hooks/useFetch';
import useLocalStorage from 'client/hooks/useLocalStorage';
import { API_URL, PROXY_URL } from 'client/config';
import AreaChart from 'client/components/AreaChart';
import moment from 'moment';
import styled from 'styled-components';

const Grid = styled(Container)`
  width: 100% !important;
  height: 100vh;
  padding-top: 30px;
  margin: 0;
  background-color: #ececec;
  .ant-card-body {
    padding: 20px 0 0 20px;
  }
`;

const Home = () => {
  const { data } = useFetch({ url: `${PROXY_URL}/proxy?url=${API_URL}` });
  const [chartSeries, setChartSeries] = useState([]);
  const [filterValue, setFilterValue] = useState('allPeriods');
  const [period, setPeriod] = useLocalStorage('period', {});

  useEffect(() => {
    setChartSeries(data);
  }, [data]);

  const periodDict = {
    oneMonth: 1,
    threeMonths: 3,
    oneYear: 12,
    twoYears: 24,
    allPeriods: 0,
  };

  const handlePeriod = months => {
    setFilterValue(months);
    if (period[months]) {
      setChartSeries(period[months]);
      return;
    }
    if (!periodDict[months]) {
      setPeriod({ [months]: data, ...period });
      setChartSeries(data);
      return;
    }
    const startDate = moment()
      .subtract(periodDict[months], 'months')
      .toDate()
      .getTime();
    const series = data.filter(periodData => periodData[0] >= startDate);
    setChartSeries(series);
    setPeriod({ [months]: series, ...period });
  };

  return (
    <Grid>
      <Row justify="center">
        <Col sm={6} md={6} xl={6}>
          <Radio.Group value={filterValue} onChange={e => handlePeriod(e.target.value)}>
            <Radio.Button value="allPeriods">Desde o início</Radio.Button>
            <Radio.Button value="oneMonth">Último mês</Radio.Button>
            <Radio.Button value="threeMonths">3 meses</Radio.Button>
            <Radio.Button value="oneYear">1 ano</Radio.Button>
            <Radio.Button value="twoYears">2 anos</Radio.Button>
          </Radio.Group>
        </Col>
      </Row>
      <Row justify="center">
        <Col sm={6} md={6} xl={6}>
          <Card bordered={false}>
            {Boolean(chartSeries) && (
              <AreaChart title="Gráfico de Rendimentos" seriesTitle="Rendimentos" seriesData={chartSeries} />
            )}
          </Card>
        </Col>
      </Row>
    </Grid>
  );
};

export default Home;
