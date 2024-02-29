import React from 'react';
import './BubbleChart.scss';
import DoghnutChart from "../doghnutChart/DoghnutChart";
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { useTranslation } from 'react-i18next';


export default function BubbleChart(props) {

  const { height, width } = useWindowDimensions();
  const { t } = useTranslation();

  const maxY = Math.max(...props.dataset.map(o => o.y));

  return(
    <div className='container bubbleChart-container'>
      <div className='rowContainer rowContainer-alignEnd'>
        <div className='bubbleChart-yAxis-label'>
          <div className='bubbleChart-yAxis-dot'></div>
          {t('CHART.VOICE_SHARE')}
        </div>
        <div className='flex-1 bubbleChart-header rowContainer'>
          <div className='bubbleChart-header-black rowContainer'>
            <img src={require('../../assets/img/chevron.png')} className='bubbleChart-header-chevron' height={22}/>
            <div className='bubbleChart-header-black-label'>
              {t('CHART.TECH_DEVELOPMENT')}
            </div>
          </div>
          <div className='bubbleChart-header-gray rowContainer rowContainer-justifyEnd'>
            <div className='bubbleChart-header-gray-label'>
              {t('CHART.COMERCIAL_AVAILABILITY')}
            </div>
          </div>
        </div>
        <div className='bubbleChart-yAxisRight' style={{visibility: 'hidden'}}>
          <div>{t('CHART.INNOVATION_FOODTECH')}</div>
        </div>
      </div>
      <div className='rowContainer flex-1'>
        <div className='bubbleChart-yAxis'>
          <div></div>
          <div>{maxY > 50 ? '80%' : '40%'}</div>
          <div>{maxY > 50 ? '60%' : '30%'}</div>
          <div>{maxY > 50 ? '40%' : '20%'}</div>
          <div>{maxY > 50 ? '20%' : '10%'}</div>
          <div>{maxY > 50 ? '0%' : '0%'}</div>
        </div>
        <div className='container bubbleChart-data'>
          <img className='bubbleChart-data-legend' src={require('../../assets/img/legend.png')} />
          <div className='rowContainer bubbleChart-data-background'>
            <div className='bubbleChart-data-background-left' />
            <div className='bubbleChart-data-background-right' />
          </div>
          <div className='bubbleChart-horizontalLine'>
            <div className='bubbleChart-verticalLine' />
            <div className='bubbleChart-verticalLine' />
            <div className='bubbleChart-verticalLine' />
            <div className='bubbleChart-verticalLine' />
            <div className='bubbleChart-verticalLine' />
            <div className='bubbleChart-verticalLine' />
            <div className='bubbleChart-verticalLine' />
            <div className='bubbleChart-verticalLine' />
            <div className='flex-1' />
          </div>
          <div className="bubbleChart-horizontalLine">
            <div className='bubbleChart-verticalLine' />
            <div className='bubbleChart-verticalLine' />
            <div className='bubbleChart-verticalLine' />
            <div className='bubbleChart-verticalLine' />
            <div className='bubbleChart-verticalLine' />
            <div className='bubbleChart-verticalLine' />
            <div className='bubbleChart-verticalLine' />
            <div className='bubbleChart-verticalLine' />
            <div className='flex-1' />
          </div>
          <div className="bubbleChart-horizontalLine">
            <div className='bubbleChart-verticalLine' />
            <div className='bubbleChart-verticalLine' />
            <div className='bubbleChart-verticalLine' />
            <div className='bubbleChart-verticalLine' />
            <div className='bubbleChart-verticalLine' />
            <div className='bubbleChart-verticalLine' />
            <div className='bubbleChart-verticalLine' />
            <div className='bubbleChart-verticalLine' />
            <div className='flex-1' />
          </div>
          <div className="bubbleChart-horizontalLine">
            <div className='bubbleChart-verticalLine' />
            <div className='bubbleChart-verticalLine' />
            <div className='bubbleChart-verticalLine' />
            <div className='bubbleChart-verticalLine' />
            <div className='bubbleChart-verticalLine' />
            <div className='bubbleChart-verticalLine' />
            <div className='bubbleChart-verticalLine' />
            <div className='bubbleChart-verticalLine' />
            <div className='flex-1' />
          </div>
          <div className="flex-1 rowContainer">
            <div className='bubbleChart-verticalLine' />
            <div className='bubbleChart-verticalLine' />
            <div className='bubbleChart-verticalLine' />
            <div className='bubbleChart-verticalLine' />
            <div className='bubbleChart-verticalLine' />
            <div className='bubbleChart-verticalLine' />
            <div className='bubbleChart-verticalLine' />
            <div className='bubbleChart-verticalLine' />
            <div className='flex-1' />
          </div>
          { props.dataset.map((data) => {
            const yValue = maxY > 50 ? data.y / 2 : data.y;
            const scale = ((yValue * 0.6) / 50) + 0.4;
            return(
              <div 
              key={`data-${data.id}`} 
              style={{
                position: 'absolute',
                bottom: `${yValue/50*100}%`, // Position bubble y axis
                left: `${data.x/6*100}%`, // Position bubble x axis
              }}>
                <div className='bubbleChart-item container container-alignCenter container-justifyCenter'>
                  <div 
                  className='bubbleChart-item-label'
                  style={{
                    left: '-100%',
                    width: '100%',
                    marginLeft: Math.min(width*0.1, 200)*scale/-2 + 20,
                  }}>
                    <div 
                    className='bubbleChart-item-label-content'
                    style={{
                      fontSize: ((maxY >= 50 && yValue < 50) || (maxY < 50 && yValue < 25)) ? 10 : 14,
                      padding: ((maxY >= 50 && yValue < 50) || (maxY < 50 && yValue < 25)) ? 8 : 12,
                      paddingRight: '15%',
                    }}>
                      <div className='bubbleChart-item-label-text'>
                        {data.label.toUpperCase()}
                      </div>
                    </div>
                  </div>

                  <div 
                  style={{
                    position: 'relative',
                    marginLeft: `-100%`, // Correct bubble size deviation
                    marginBottom: `-100%`, // Correct bubble size deviation
                    transform: `scale(${scale})`, // Scale bubble based on y axis value
                  }}>
                    <DoghnutChart
                    data={data}
                    onClick={() => props.onBubblePress(data)}/> 
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className='bubbleChart-yAxisRight'>
          <div>{t('CHART.INNOVATION_FOODTECH')}</div>
          <div className='bubbleChart-yAxisRight-dot'/>
        </div>
      </div>
      <div className='rowContainer'>
        <div className='bubbleChart-yAxis' style={{marginRight: 8}}></div>
        <div className='rowContainer rowContainer-alignCenter rowContainer-spaceBetween bubbleChart-xAxis'> 
          <div className='bubbleChart-xAxis-content'>
            <div className='bubbleChart-xAxis-label' style={{left: '11%'}}>
              <div className='bubbleChart-xAxis-label-text'>
                {t('CHART.START').toUpperCase()}
              </div>
            </div>
            <div className='bubbleChart-xAxis-label' style={{left: '22.2%'}}>
              <div className='bubbleChart-xAxis-label-text'>
                {t('CHART.EXPECTATION').toUpperCase()}
              </div>
            </div>
            <div className='bubbleChart-xAxis-label' style={{left: '44.5%'}}>
              <div className='bubbleChart-xAxis-label-text'>
                {t('CHART.CHALLENGES').toUpperCase()}
              </div>
            </div>
            <div className='bubbleChart-xAxis-label' style={{left: '66.5%'}}>
              <div className='bubbleChart-xAxis-label-text'>
                {t('CHART.INTRODUCTION').toUpperCase()}
              </div>
            </div>
            <div className='bubbleChart-xAxis-label' style={{left: '77.5%'}}>
              <div className='bubbleChart-xAxis-label-text'>
                {t('CHART.GROWTH').toUpperCase()}
              </div>
            </div>
            <div className='bubbleChart-xAxis-label' style={{left: '88.5%'}}>
              <div className='bubbleChart-xAxis-label-text'>
                {t('CHART.MASS_MARKET').toUpperCase()}
              </div>
            </div>
          </div>
        </div>
        <div className='bubbleChart-yAxisRight' style={{visibility: 'hidden'}}>
          <div>{t('CHART.INNOVATION_FOODTECH')}</div>
        </div>
      </div>
    </div>
  )
}
