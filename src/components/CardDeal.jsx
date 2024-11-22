import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better perfomance systems <br className="sm:block hidden" /> here
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>I specialize in developing secure, scalable transaction platforms that ensure seamless performance and protect sensitive data. With expertise in backend development, data science, and penetration testing, I’ll build a reliable, future-proof solution for your business.</p>
      <Button styles={`mt-10`} />
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
