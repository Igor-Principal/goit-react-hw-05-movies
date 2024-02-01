import css from './footer.module.css';

export const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className="container">
        <div className={css.block}>
          <p className={css.text}>
            Project completed by student{' '}
            <a
              href="https://www.linkedin.com/in/ihor-pryntsypal-659532291/"
              className={css.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ihor Pryntsypal
            </a>{' '}
            as a React homework assignment at GoIT school.
          </p>
        </div>
      </div>
    </footer>
  );
};
