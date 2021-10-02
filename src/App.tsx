import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import './App.css';

export const App = () => {
  return (
    <div className='container'>
      <div className='react-calendar-heatmap'>
        <CalendarHeatmap
          startDate={new Date('2020-12-31')}
          values={[
            {date: '2021-01-01', count: 1},
            {date: '2021-01-02', count: 4},
            {date: '2021-01-03', count: 2},
          ]}
          classForValue={(value) => value
            ? `color-scale-${value.count}`
            : 'color-empty'
          }
        />
      </div>
    </div>
  );
}
