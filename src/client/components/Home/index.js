import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-awesome-styled-grid';
import { Card } from 'antd';
import useFetch from 'client/hooks/useFetch';
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

  useEffect(() => {
    setChartSeries(data);
  }, [data]);

  const filterPeriod = (months = null) => {
    if (!months) return data;
    const startDate = moment()
      .subtract(months, 'months')
      .toDate()
      .getTime();
    const series = data.filter(periodData => periodData[0] >= startDate);
    return setChartSeries(series);
  };

  return (
    <Grid>
      <Row justify="center">
        <Col sm={6} md={6}>
          <Card bordered={false}>
            <AreaChart
              title="Gráfico de Rendimentos"
              tooltipTitle="teste"
              seriesTitle="Rendimentos"
              seriesData={chartSeries}
            />
          </Card>
        </Col>
      </Row>
    </Grid>
  );
};

export default Home;
