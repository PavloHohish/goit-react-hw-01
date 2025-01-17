import clsx from 'clsx';
import css from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
  const statsViews = clsx(css.statsItem, css.views);

  return (
    <div className={css.wrapper}>
      <div className={css.profileInfo}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.stats}>
        <li className={css.statsItem}>
          <span>Followers</span>
          <span className={css.statsCount}>{stats.followers}</span>
        </li>
        <li className={statsViews}>
          <span>Views</span>
          <span className={css.statsCount}>{stats.views}</span>
        </li>
        <li className={css.statsItem}>
          <span>Likes</span>
          <span className={css.statsCount}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
