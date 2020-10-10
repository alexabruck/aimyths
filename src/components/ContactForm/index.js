import React from "react"
import { Link } from "gatsby"
import { TextField, Checkbox, FormControlLabel } from "@material-ui/core"

import Button from "../Button"
import "./index.scss"

const botField = (
  <p style={{ opacity: 0, height: "0px", overflow: "hidden", margin: 0 }}>
    <label>
      Field
      <input name="bot-field" />
    </label>
  </p>
)

export default class index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gdprChecked: false,
    }
  }
  render() {
    return (
      <form
        className="contact-form"
        name="contact"
        method="POST"
        data-netlify-honeypot="bot-field"
        data-netlify="true"
        action="/contact-success"
      >
        <input type="hidden" name="form-name" value="contact" />
        {botField}
        <TextField
          className="contact-form__formfield"
          id="name"
          label="Your name"
          variant="outlined"
          dark
          name="Name"
        />
        <TextField
          className="contact-form__formfield"
          id="subject"
          label="Subject"
          variant="outlined"
          name="Subject"
        />
        <TextField
          multiline
          rows={6}
          className="contact-form__formfield"
          id="message"
          label="Your message"
          variant="outlined"
          name="Message"
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <FormControlLabel
            style={{ width: "auto" }}
            className="contact-form__formfield"
            control={
              <Checkbox
                color={"black"}
                checked={this.state.gdprChecked}
                onChange={() => {
                  this.setState({ gdprChecked: !this.state.gdprChecked })
                }}
                name="checkedGDPR"
              />
            }
            label={
              <span>
                I accept the{" "}
                <Link
                  to="/privacy-policy"
                  style={{ textDecoration: "underline" }}
                >
                  Privacy Policy
                </Link>
              </span>
            }
          />

          <Button
            onClick={
              !this.state.gdprChecked &&
              (e => {
                e.preventDefault()
              })
            }
            type="submit"
            style={{
              color: "white",
              display: "inline-block",
              width: "150px",
              cursor: !this.state.gdprChecked && "not-allowed",
            }}
          >
            Submit
          </Button>
        </div>
      </form>
    )
  }
}
