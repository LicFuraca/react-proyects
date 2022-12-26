import Card from "../UI/Card";

import classes from "./Header.module.css";

const Header = () => {
  const date = new Date();

  const dayNumber = date.toLocaleDateString("es", { day: "numeric" });
  const month = date.toLocaleDateString("es", { month: "long" });
  const year = date.toLocaleDateString("es", { year: "numeric" });
  const weekDay = date.toLocaleDateString("es", { weekday: "long" });

  return (
    <Card>
      <section className={classes.card}>
        <div className={classes.date}>
          <div className={classes.dateRight}>
            <span className={classes.dateNumber}>{dayNumber}</span>
            <div>
              <span className={classes.dateMonth}>{month}</span>
              <span className={classes.dateYear}>{year}</span>
            </div>
          </div>
          <div className={classes.dateDay}>{weekDay}</div>
        </div>
      </section>
    </Card>
  );
};

export default Header;
