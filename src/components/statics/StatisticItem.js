import PropTipes from 'prop-types';
import css from './static.css';

const StatisticItem = ({ label, percentage }) => {
  return (
    <li class="item">
      <span class="label">{label}</span>
      <span class="percentage">{percentage}%</span>
    </li>

    // <section class="statistics">
    //   <h2 class="title">Upload stats</h2>

    //   <ul class="stat-list">
    //     <li class="item">
    //       <span class="label">{label}</span>
    //       <span class="percentage">{percentage}%</span>
    //     </li>
    //     <li class="item">
    //       <span class="label">{label}</span>
    //       <span class="percentage">1{percentage}%</span>
    //     </li>
    //     <li class="item">
    //       <span class="label">{label}</span>
    //       <span class="percentage">{percentage}%</span>
    //     </li>
    //     <li class="item">
    //       <span class="label">{label}</span>
    //       <span class="percentage">{percentage}%</span>
    //     </li>
    //   </ul>
    // </section>
  );
};

StatisticItem.propTypes = {
  label: PropTipes.string.isRequired,
  percentage: PropTipes.number.isRequired,
};
export default StatisticItem;
