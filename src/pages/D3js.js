import React, { useEffect, useState, useRef } from 'react';
// Import Animation
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { select, axisBottom, axisRight, scaleLinear, scaleBand } from 'd3';

const FindUs = () => {
  const svgRef = useRef();
  const [animation, setAnimation] = useState();
  const [data, setData] = useState([25, 40, 60, 30, 65, 75, 100]);
  const fetchData = async () => {
    await fetch('data/animation.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setAnimation(data.data[0]));
  };

  useEffect(() => {
    fetchData();

    const svg = select(svgRef.current);
    const xScale = scaleBand()
      .domain(data.map((value, index) => index))
      .range([0, 300])
      .padding(0.5);

    const yScale = scaleLinear().domain([0, 150]).range([150, 0]);

    const colorScale = scaleLinear()
      .domain([75, 100, 150])
      .range(['green', 'orange', 'red'])
      .clamp(true);

    const xAxis = axisBottom(xScale).ticks(data.length);

    svg.select('.x-axis').style('transform', 'translateY(150px)').call(xAxis);

    const yAxis = axisRight(yScale);
    svg.select('.y-axis').style('transform', 'translateX(300px)').call(yAxis);

    svg
      .selectAll('.bar')
      .data(data)
      .join('rect')
      .attr('class', 'bar')

      .style('transform', 'scale(1, -1)')
      .attr('x', (value, index) => xScale(index))
      .attr('y', -150)
      .attr('width', xScale.bandwidth())
      .transition()
      .attr('fill', colorScale)
      .attr('height', (value) => 150 - yScale(value));
  }, [data]);

  return (
    <div>
      {animation && (
        <D3Style
          exit='exit'
          variants={animation.pageAnimation}
          initial={animation.pageAnimation.hidden}
          animate={animation.pageAnimation.show}
          style={{ background: '#dbdbdb' }}
        >
          <Title>
            <Hide>
              <motion.h2
                variants={animation.titleAnim}
                initial={animation.titleAnim.hidden}
                animate={animation.titleAnim.show}
              >
                D3-JS
              </motion.h2>
            </Hide>
          </Title>
          <Title>
            <Hide>
              <motion.h2
                variants={animation.titleAnim}
                initial={animation.titleAnim.hidden}
                animate={animation.titleAnim.show}
              >
                On this page, all the animation coming from the JSON file in my
                public folder as in API
              </motion.h2>
            </Hide>
          </Title>
          <Title>
            <Hide>
              <motion.h2
                variants={animation.titleAnim}
                initial={animation.titleAnim.hidden}
                animate={animation.titleAnim.show}
              >
                And building Chart using D3-JS check
                <a href='https://github.com/d3/d3/wiki/Tutorials'>
                  This like for more details
                </a>
              </motion.h2>
            </Hide>
          </Title>
          <Hide>
            <SvgStyle
              ref={svgRef}
              variants={animation.lineAnim}
              initial={animation.lineAnim.hidden}
              animate={animation.lineAnim.show}
            >
              <g className='x-axis' />
              <g className='y-axis' />
            </SvgStyle>
          </Hide>
          <div className='button-div'>
            <button onClick={() => setData(data.map((value) => value + 5))}>
              Generate & update data
            </button>
          </div>
        </D3Style>
      )}
    </div>
  );
};

const D3Style = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  .button-div {
    display: flex;
    margin: 2rem;
    button {
      margin: 2rem;
      color: #000;
    }
  }
  @media (max-width: 1300px) {
    padding: 2rem;
    h2 {
      font-size: 1.5rem;
      font-weight: bolder;
    }
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
`;
const Hide = styled.div`
  overflow: hidden;
`;

const SvgStyle = styled(motion.svg)`
  background: #eee;
  overflow: visible;
  margin-bottom: 2rem;
  display: block;
`;
export default FindUs;
