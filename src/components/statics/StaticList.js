import PropTipes from 'prop-types';
import css from './static.css';

const StaticList = ({ title, stats }) => {
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>
      <ul class="stat-list">
        {stats.map(el => (
          <li class="item" key={el.id}>
            <span class="label">{el.label}</span>
            <span class="percentage">{el.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
StaticList.propTypes = {
  title: PropTipes.string.isRequired,
  stats: PropTipes.arrayOf({
    label: PropTipes.string.isRequired,
    percentage: PropTipes.number.isRequired,
  }).isRequired,
};

export default StaticList;
