import classes from './NewsletterSignup.module.css';

import { Form } from 'react-router-dom';
function NewsletterSignup() {
  return (
    <Form method="post" className={classes.newsletter}>
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </Form>
  );
}

export default NewsletterSignup;