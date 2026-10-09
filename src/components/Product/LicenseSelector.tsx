import { useId } from "react";
import { licensePlans } from "@/data/product";
import styles from "./LicenseSelector.module.css";

type PlanId = (typeof licensePlans)[number]["id"];

interface LicenseSelectorProps {
  value: PlanId;
  onChange: (value: PlanId) => void;
  legend?: string;
}

export default function LicenseSelector({
  value, onChange, legend = "License duration",
}: LicenseSelectorProps) {
  const id = useId();

  return (
    <fieldset className={styles.selector} aria-describedby={`${id}-prices`}>
      <legend>{legend}</legend>
      <div className={styles.options}>
        {licensePlans.map((plan) => (
          <label key={plan.id} className={styles.option}>
            <input type="radio" name={id} value={plan.id}
              checked={value === plan.id} onChange={() => onChange(plan.id)} />
            <span className={styles.optionBody}>
              <span className={styles.marker} aria-hidden="true" />
              <strong>{plan.days}<small> days</small></strong>
              <span className={styles.price}>${plan.price}</span>
            </span>
          </label>
        ))}
      </div>
      <p className={styles.priceNote} id={`${id}-prices`}>Proposed prices in USD. Same bot, different duration.</p>
    </fieldset>
  );
}
